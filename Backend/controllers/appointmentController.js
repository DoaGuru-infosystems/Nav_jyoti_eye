const db = require('../config/db');
const { sendAppointmentNotification } = require('../utils/mailer');

exports.createAppointment = async (req, res) => {
  try {
    let { name, email, phone, appointment_date, problem, source } = req.body;

    // Validate
    if (!name || !phone || !appointment_date || !source) {
      return res.status(400).json({ error: 'Missing required fields' });
    }
    if (source !== 'home' && source !== 'appointment_page') {
      return res.status(400).json({ error: 'Invalid source' });
    }
    
    // Basic regex checks
    if (email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) return res.status(400).json({ error: 'Invalid email format' });
    }
    
    const phoneRegex = /^\d{10,15}$/;
    const strippedPhone = phone.replace(/\D/g, '');
    if (!phoneRegex.test(strippedPhone)) return res.status(400).json({ error: 'Invalid phone format, must be 10-15 digits' });

    // Validate date not in past (simple check)
    const aptDate = new Date(appointment_date);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (isNaN(aptDate.getTime()) || aptDate < today) {
      return res.status(400).json({ error: 'Invalid appointment date or date is in the past' });
    }

    // if (source === 'home') {
    //   problem = null;
    // }
    const [result] = await db.execute(
      'INSERT INTO appointments (name, email, phone, problem, appointment_date, source) VALUES (?, ?, ?, ?, ?, ?)',
      [name, email || null, phone, problem || null, appointment_date, source]
    );

    // Send email async
    sendAppointmentNotification({ name, email, phone, appointment_date, problem, source });

    return res.status(201).json({ message: 'Appointment booked successfully', id: result.insertId });
  } catch (error) {
    console.error('Create appointment error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

exports.getAppointments = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 5;
    const offset = (page - 1) * limit;

    const [rows] = await db.execute(
      'SELECT * FROM appointments ORDER BY created_at DESC LIMIT ? OFFSET ?',
      [limit, offset]
    );
    
    const [countResult] = await db.execute('SELECT COUNT(*) as total FROM appointments');
    const total = countResult[0].total;

    // Explicitly map database records to separate DB schema from frontend response
    const mappedRows = rows.map(r => ({
      id: r.id,
      name: r.name,
      email: r.email,
      phone: r.phone,
      problem: r.problem,
      appointmentDate: r.appointment_date ? new Date(r.appointment_date).toISOString() : null,
      date: r.created_at ? new Date(r.created_at).toISOString() : null,
      source: r.source
    }));

    return res.json({
      data: mappedRows,
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit)
    });
  } catch (error) {
    console.error('Get appointments error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};
