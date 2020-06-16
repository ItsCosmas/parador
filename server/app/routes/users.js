const express = require('express');
const router = express.Router();

const {
	getAll,
	registerUser,
	getById,
	loginUser,
	updateUser,
	deleteUser,
} = require('../controllers/users');

// GET all users
// - /users

router.get('/', getAll);

// GET a single user
// - /users/<userId>

router.get('/:userId', getById);

// Create a User
// - /users

router.post('/', registerUser);

// Login a User
// - /users/login
router.post('/login', loginUser);

// Update a User
// - /users/<userId>

router.put('/:userId', updateUser);

// Delete a User
// - Auth Required, Logged In User or Admin role
// - /users/<userId>

router.delete('/:userId', deleteUser);

module.exports = router;
