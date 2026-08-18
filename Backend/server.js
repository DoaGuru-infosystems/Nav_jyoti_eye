require('dotenv').config();
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const db = require('./config/db');

const appointmentRoutes = require('./routes/appointmentRoutes');
const leadRoutes = require('./routes/leadRoutes');
const authRoutes = require('./routes/authRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
  origin: [process.env.FRONTEND_URL, 
    'http://localhost:5173', 'http://localhost:5174'].filter(Boolean), 
  credentials: true
}));
app.use(express.json());
app.use(cookieParser());
app.use(morgan('combined'));

// Test DB Connection
db.query('SELECT 1')
  .then(() => {
    console.log('Successfully connected to MySQL database.');
  })
  .catch((err) => {
    console.error('Failed to connect to MySQL database:', err);
  });

app.use('/api/auth', authRoutes);
app.use('/api/appointments', appointmentRoutes);
app.use('/api/leads', leadRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
