const express = require('express');
const router = express.Router();
const leadController = require('../controllers/leadController');

const authMiddleware = require('../middleware/authMiddleware');

router.post('/', leadController.createLead);
router.get('/', authMiddleware, leadController.getLeads);

module.exports = router;
