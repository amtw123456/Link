const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// User registration controller
exports.registerUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(409).json({ error: 'User with this email already exists' });
        }

        const hashedPassword = await bcrypt.hash(password, 12);
        const user = new User({ email, password: hashedPassword });
        await user.save();
        res.status(201).json({ message: 'User registered successfully' });

    } catch (error) {
        res.status(500).json({ error: 'Registration failed' });
    }
};

// User login controller
exports.loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(401).json({ error: 'Authentication failed' });
        }
        const passwordMatch = await bcrypt.compare(password, user.password);

        if (!passwordMatch) {
            return res.status(401).json({ error: 'Authentication failed' });
        }
        const token = jwt.sign({ userId: user._id, email: user.email }, 'SECRET', {
            expiresIn: '300s',
        });
        res.status(200).json({ userId: user._id, jwtToken: token, email: user.email });
    } catch (error) {
        res.status(500).json({ error: 'Login failed' });
    }
};

exports.verifyToken = (req, res) => {
    const token = req.headers.authorization?.split(' ')[1]; // Extract token from Bearer token
    if (!token) {
        return res.status(401).json({ error: 'Access Denied. No token provided.' });
    }

    try {
        const decoded = jwt.verify(token, 'SECRET'); // Use the same secret as used for signing
        req.user = decoded; // Attach the decoded token data (user info) to the request object
        // Return true if token is valid
        return res.status(200).json({ valid: true, user: req.user });
    } catch (error) {
        return res.status(401).json({ error: 'Invalid or expired token.' });
    }
};


