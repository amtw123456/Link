// routes/postRoutes.js
const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware')
const postController = require('../controllers/postController');

// Routes
router.get('/helloWorld', authMiddleware.verifyToken, postController.helloWorld);           // Get all posts
// router.get('/', postController.getPosts);
router.post('/', authMiddleware.verifyToken, postController.createPost);        // Create a new post
router.get('/:id', authMiddleware.verifyToken, postController.getPostById);     // Get a post by ID
router.put('/:id', authMiddleware.verifyToken, postController.updatePost);      // Update a post by ID
router.delete('/:id', authMiddleware.verifyToken, postController.deletePost);   // Delete a post by ID

module.exports = router;
