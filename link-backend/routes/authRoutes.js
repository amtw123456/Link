const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Route for user registration
router.post('/register', authController.registerUser);

// Route for user login
router.post('/login', authController.loginUser);

// Route to check if jwt token is valid
router.post('/verify', authController.verifyToken);

module.exports = router;
