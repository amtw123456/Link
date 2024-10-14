// models/Post.js
const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    postContent: {
        type: String,
        required: true,
    },
    posterEmail: {
        type: String,
        required: true,
    },
    posterId: {
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

});

module.exports = mongoose.model('Post', postSchema);
