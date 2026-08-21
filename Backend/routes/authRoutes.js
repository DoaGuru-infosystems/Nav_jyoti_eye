const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Register Admin API (Hidden, not connected to frontend UI)
router.post('/register', authController.registerAdmin);

// Login Admin API
router.post('/login', authController.loginAdmin);

// Reset Password API (Forgot Password)
router.post('/reset-password', authController.resetPassword);

module.exports = router;
