const db = require('../config/db');
const { sendLeadNotification } = require('../utils/mailer');

exports.createLead = async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    // Validate
    if (!name || !email) {
      return res.status(400).json({ error: 'Name and email are required' });
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) return res.status(400).json({ error: 'Invalid email format' });

    const [result] = await db.execute(
      'INSERT INTO leads (name, email, phone, message) VALUES (?, ?, ?, ?)',
      [name, email, phone || null, message || null]
    );

    // Send email async
    sendLeadNotification({ name, email, phone, message });

    return res.status(201).json({ message: 'Lead created successfully', id: result.insertId });
  } catch (error) {
    console.error('Create lead error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

exports.getLeads = async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM leads ORDER BY created_at DESC');
    const mappedRows = rows.map(r => ({
      id: r.id,
      name: r.name,
      email: r.email,
      phone: r.phone,
      message: r.message,
      date: r.created_at
    }));
    return res.json(mappedRows);
  } catch (error) {
    console.error('Get leads error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};
