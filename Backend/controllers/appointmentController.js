const db = require('../config/db');
const { sendAppointmentNotification } = require('../utils/mailer');

exports.createAppointment = async (req, res) => {
  try {
    let { name, email, phone, appointment_date, problem, source } = req.body;

    // Validate
    if (!name || !email || !phone || !appointment_date || !source) {
      return res.status(400).json({ error: 'Missing required fields' });
    }
    if (source !== 'home' && source !== 'appointment_page') {
      return res.status(400).json({ error: 'Invalid source' });
    }
    
    // Basic regex checks
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) return res.status(400).json({ error: 'Invalid email format' });
    
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

    if (source === 'home') {
      problem = null;
    }

    const [result] = await db.execute(
      'INSERT INTO appointments (name, email, phone, problem, appointment_date, source) VALUES (?, ?, ?, ?, ?, ?)',
      [name, email, phone, problem || null, appointment_date, source]
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
    const [rows] = await db.query('SELECT * FROM appointments ORDER BY created_at DESC');
    // Map database fields to match frontend expected fields if needed, 
    // frontend currently uses `date` for created_at, `appointmentDate`, `department` etc.
    const mappedRows = rows.map(r => ({
      id: r.id,
      name: r.name,
      email: r.email,
      phone: r.phone,
      appointmentDate: r.appointment_date,
      date: r.created_at,
      department: r.source === 'home' ? 'Home Page' : 'Appointment Page',
      problem: r.problem
    }));
    return res.json(mappedRows);
  } catch (error) {
    console.error('Get appointments error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};
