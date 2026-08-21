const db = require('../config/db');
const { sendLeadNotification } = require('../utils/mailer');

exports.createLead = async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    // Validate
    if (!name || !phone) {
      return res.status(400).json({ error: 'Name and phone are required' });
    }
    
    if (email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) return res.status(400).json({ error: 'Invalid email format' });
    }

    const [result] = await db.execute(
      'INSERT INTO leads (name, email, phone, message) VALUES (?, ?, ?, ?)',
      [name, email || null, phone, message || null]
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
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 5;
    const offset = (page - 1) * limit;

    const [rows] = await db.execute(
      'SELECT * FROM leads ORDER BY created_at DESC LIMIT ? OFFSET ?',
      [limit, offset]
    );
    
    const [countResult] = await db.execute('SELECT COUNT(*) as total FROM leads');
    const total = countResult[0].total;

    const mappedRows = rows.map(r => ({
      id: r.id,
      name: r.name,
      email: r.email,
      phone: r.phone,
      message: r.message,
      date: r.created_at
    }));
    return res.json({
      data: mappedRows,
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit)
    });
  } catch (error) {
    console.error('Get leads error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};
