// models/Post.js
const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    postName: {
        type: String,
        required: true,
    },
    postInformation: {
        type: String,
        required: true,
    },
    posterName: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    images: {
        type: [String], // Array of image URLs or paths
        required: false, // Optional: if not all posts have images
    },
    friendsList: {
        type: [mongoose.Schema.Types.ObjectId], // Array of friend IDs
        ref: 'User', // Assuming there is a User model
        required: false, // Optional: if not all posts have a friends list
    },
});

module.exports = mongoose.model('Post', postSchema);
