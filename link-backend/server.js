require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const postRoutes = require('./routes/postRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

if (process.env.MONGO_URI) {
    // Connect to MongoDB only if MONGO_URI is defined
    mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => console.log('MongoDB connected'))
        .catch((error) => console.error('MongoDB connection error:', error));
} else {
    console.log('Skipping MongoDB connection as no URI is defined.');
}

// Routes
app.use('/api/posts', postRoutes);
app.use('/api/users', userRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
