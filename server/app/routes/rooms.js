const express = require('express');
const router = express.Router();

const auth = require('../middlewares/auth');

const {
	getAll,
	publishRoom,
	getById,
	updateRoom,
	deleteRoom,
} = require('../controllers/rooms');
// Get All Room Types
// - /rooms

router.get('/', getAll);

// - Get a room Type ID
// -/rooms/roomTypeId
router.get('/:roomTypeId', getById);

// Create/Publish a Room Type
// - Auth Required, Admin role
// - /rooms
//  - Generate Room Numbers from passed room count and create rooms with generated room numbers
router.post('/', auth, publishRoom);
//  Update a Room Type
// - Auth Required, Admin role
// - /rooms/<roomTypeId>
// - If Room Count Changes, Update the Rooms
router.put('/:roomTypeId', auth, updateRoom);
//  Delete a Room Type
// - Auth Required, Admin role
// -/rooms/<roomTypeId>
// - Deletes associated Rooms
router.delete('/:roomTypeId', auth, deleteRoom);

module.exports = router;
