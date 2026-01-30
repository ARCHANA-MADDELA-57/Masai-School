const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { validateUser } = require('../middleware/validate');

// CRUD Route Mapping
router.post('/', validateUser, userController.createUser);    // Create
router.get('/', userController.getAllUsers);                  // Read All
router.get('/:id', userController.getUserById);               // Read One
router.put('/:id', validateUser, userController.updateUser);  // Update
router.delete('/:id', userController.deleteUser);            // Delete

module.exports = router;