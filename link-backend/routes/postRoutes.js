// routes/postRoutes.js
const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');

// Routes
router.get('/helloWorld', postController.helloWorld);           // Get all posts
// router.get('/', postController.getPosts);
router.post('/', postController.createPost);        // Create a new post
router.get('/:id', postController.getPostById);     // Get a post by ID
router.put('/:id', postController.updatePost);      // Update a post by ID
router.delete('/:id', postController.deletePost);   // Delete a post by ID

module.exports = router;
