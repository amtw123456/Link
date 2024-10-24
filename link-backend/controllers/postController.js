// controllers/postController.js
const Post = require('../models/Post');

// Get all posts
exports.helloWorld = async (req, res) => {
    res.json({ message: "Hello from server! red green" });
};


exports.getPosts = async (req, res) => {
    try {
        const posts = await Post.find();
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create a new post
exports.createPost = async (req, res) => {
    const { postContent, posterEmail, posterId } = req.body;

    const newPost = new Post({
        postContent,
        posterEmail,
        posterId,
    });

    try {
        const savedPost = await newPost.save();
        res.status(201).json(savedPost);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get a specific post by ID
exports.getPostById = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (!post) return res.status(404).json({ message: 'Post not found' });
        res.status(200).json(post);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getPostsByUserId = async (req, res) => {
    try {
        const userId = req.params.userId; // Expecting user ID to be sent as a URL parameter
        if (!userId) {
            return res.status(400).json({ message: 'User ID is required' });
        }

        const posts = await Post.find({ posterId: userId }); // Find posts with the given posterId

        if (posts.length === 0) {
            return res.status(404).json({ message: 'No posts found for the provided user ID' });
        }

        res.status(200).json(posts); // Return the list of posts
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update a post by ID
exports.updatePost = async (req, res) => {
    try {
        const updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedPost) return res.status(404).json({ message: 'Post not found' });
        res.status(200).json(updatedPost);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete a post by ID
exports.deletePost = async (req, res) => {
    try {
        const deletedPost = await Post.findByIdAndDelete(req.params.id);
        if (!deletedPost) return res.status(404).json({ message: 'Post not found' });
        res.status(200).json({ message: 'Post deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
