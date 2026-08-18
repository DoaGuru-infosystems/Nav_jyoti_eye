const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('../config/db');

exports.registerAdmin = async (req, res) => {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
        return res.status(400).json({ error: 'Username, email, and password are required' });
    }

    try {
        const [existing] = await db.query('SELECT * FROM admins WHERE username = ? OR email = ?', [username, email]);
        if (existing.length > 0) {
            return res.status(400).json({ error: 'Username or email already exists' });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const user = await db.query('INSERT INTO admins (username, email, password) VALUES (?, ?, ?)', [username, email, hashedPassword]);

        return res.status(201).json({ 
            message: 'Admin registered successfully',
            data: user
        });
    } catch (err) {
        console.error('Register error:', err);
        return res.status(500).json({ error: 'Server error during registration' });
    }
};

exports.loginAdmin = async (req, res) => {
    // We allow frontend to send it as 'username' or 'email'. 
    // We'll treat both as the 'identifier' to check against DB username and email.
    const { username, email, password } = req.body;
    const identifier = username || email;

    if (!identifier || !password) {
        return res.status(400).json({ error: 'Username/Email and password are required' });
    }

    try {
        const [admins] = await db.query('SELECT * FROM admins WHERE username = ? OR email = ?', [identifier, identifier]);
        if (admins.length === 0) {
            return res.status(401).json({ error: 'Invalid username or password' });
        }

        const admin = admins[0];
        const isMatch = await bcrypt.compare(password, admin.password);

        if (!isMatch) {
            return res.status(401).json({ error: 'Invalid username or password' });
        }

        const token = jwt.sign({ id: admin.id, username: admin.username, role: 'admin' }, process.env.JWT_SECRET || 'fallback_secret', { expiresIn: '8h' });
        
        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            maxAge: 8 * 60 * 60 * 1000,
            sameSite: 'lax'
        });

        return res.json({ 
            success: true, 
            data: admin,
            message: 'Logged in successfully' 
        });
    } catch (err) {
        console.error('Login error:', err);
        return res.status(500).json({ error: err.message || 'Server error during login' });
    }
};
