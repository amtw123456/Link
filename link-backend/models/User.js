const mongoose = require('mongoose');

// Define the User schema
const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true, // Ensures email is unique
        trim: true,   // Removes whitespace
        lowercase: true, // Ensures email is stored in lowercase
        match: [/.+@.+\..+/, 'Please enter a valid email address'], // Basic email format validation
    },
    password: {
        type: String,
        required: true,
        minlength: 6, // Ensures password is at least 6 characters long
    }
}, {
    timestamps: true // Adds createdAt and updatedAt timestamps
});

// Create the User model using the schema
const User = mongoose.model('User', userSchema);

module.exports = User;