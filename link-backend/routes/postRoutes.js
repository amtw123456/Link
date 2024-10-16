// routes/postRoutes.js
const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware')
const postController = require('../controllers/postController');

// Routes
router.get('/helloWorld', postController.helloWorld);           // Get all posts

router.post('/', authMiddleware.verifyToken, postController.createPost);        // Create a new post

router.get('/:id', authMiddleware.verifyToken, postController.getPostById);     // Get a post by ID

router.get('/by-user/:userId', authMiddleware.verifyToken, postController.getPostsByUserId);

// router.get('/by-freinds/:userId', authMiddleware.verifyToken, postController.getPostsByUserId);

router.put('/:id', authMiddleware.verifyToken, postController.updatePost);      // Update a post by ID

router.delete('/:id', authMiddleware.verifyToken, postController.deletePost);   // Delete a post by ID

module.exports = router;
