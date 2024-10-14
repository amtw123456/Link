const jwt = require('jsonwebtoken');

// Middleware to verify the token
exports.verifyToken = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1]; // Extract token from Bearer token

    if (!token) {
        return res.status(401).json({ error: 'Access Denied. No token provided.' });
    }

    try {
        const decoded = jwt.verify(token, 'SECRET'); // Use the same secret as used for signing
        req.user = decoded; // Attach the decoded token data (user info) to the request object
        next(); // Proceed to the next middleware or route handler
    } catch (error) {
        return res.status(401).json({ error: 'Invalid or expired token.' });
    }
};
