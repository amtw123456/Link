const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// User registration controller
exports.registerUser = async (req, res) => {
    try {
        const { email, password } = req.body;
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
    console.log(req.body)
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        console.log(user)
        if (!user) {
            return res.status(401).json({ error: 'Authentication failed' });
        }
        const passwordMatch = await bcrypt.compare(password, user.password);
        console.log(passwordMatch)
        if (!passwordMatch) {
            return res.status(401).json({ error: 'Authentication failed' });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error: 'Login failed' });
    }
};
