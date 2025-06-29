const express = require('express');
const router = express.Router();
const { register, login, logout } = require('../controllers/authController');

// Auth Routes
router.post('/register', register);
router.post('/login', login);
router.post('/logout', logout); // Optional, mainly for client clarity

module.exports = router;
