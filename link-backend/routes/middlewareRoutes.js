const express = require('express');
const router = express.Router();
const { verifyToken } = require('../middleware/authMiddleware');

// Protected route example
router.get('/verify', verifyToken, (req, res) => {
    res.status(200).json({ message: 'You are authenticated!', user: req.user });
});

module.exports = router;
