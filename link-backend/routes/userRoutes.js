const express = require('express');
const userController = require('../controllers/userController'); // Import the controller
const router = express.Router();

// GET all users
router.get('/', userController.getUsers);

// GET a specific user by ID
router.get('/:id', userController.getUserById);

// POST (create) a new user
router.post('/', userController.createUser);

// PUT (update) a user by ID
router.put('/:id', userController.updateUser);

// DELETE a user by ID
router.delete('/:id', userController.deleteUser);

module.exports = router;
