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
});

module.exports = mongoose.model('Post', postSchema);
