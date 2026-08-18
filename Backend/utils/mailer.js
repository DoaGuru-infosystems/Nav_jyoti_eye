const nodemailer = require('nodemailer');
require('dotenv').config();

let transporter;

async function createTransporter() {
  if (process.env.SMTP_USER && process.env.SMTP_PASS) {
    transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: process.env.SMTP_PORT == 465, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });
  } else {
    // Fallback to Ethereal
    let testAccount = await nodemailer.createTestAccount();
    transporter = nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: testAccount.user, // generated ethereal user
        pass: testAccount.pass, // generated ethereal password
      },
    });
    console.log('No SMTP configured. Falling back to Ethereal test account:', testAccount.user);
  }
}

createTransporter();

const sendEmail = async (subject, htmlContent) => {
  try {
    if (!transporter) {
      await createTransporter();
    }
    const info = await transporter.sendMail({
      from: '"Nav Jyoti System" <no-reply@navjyotieyehospital.com>',
      to: process.env.ADMIN_NOTIFY_EMAIL || 'admin@localhost',
      subject: subject,
      html: htmlContent,
    });
    console.log('Message sent: %s', info.messageId);
    if (!process.env.SMTP_USER) {
      console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    }
  } catch (error) {
    console.error('Error sending email:', error);
  }
};

const sendAppointmentNotification = (data) => {
  const html = `
    <h2>New Appointment Booking</h2>
    <p><strong>Name:</strong> ${data.name}</p>
    <p><strong>Email:</strong> ${data.email}</p>
    <p><strong>Phone:</strong> ${data.phone}</p>
    <p><strong>Appointment Date:</strong> ${data.appointment_date}</p>
    <p><strong>Source:</strong> ${data.source}</p>
    ${data.problem ? `<p><strong>Problem:</strong> ${data.problem}</p>` : ''}
  `;
  sendEmail('New Appointment Booking - Nav Jyoti Eye Hospital', html);
};

const sendLeadNotification = (data) => {
  const html = `
    <h2>New Contact Lead</h2>
    <p><strong>Name:</strong> ${data.name}</p>
    <p><strong>Email:</strong> ${data.email}</p>
    <p><strong>Phone:</strong> ${data.phone || 'N/A'}</p>
    ${data.message ? `<p><strong>Message:</strong> ${data.message}</p>` : ''}
  `;
  sendEmail('New Contact Lead - Nav Jyoti Eye Hospital', html);
};

module.exports = {
  sendAppointmentNotification,
  sendLeadNotification
};
