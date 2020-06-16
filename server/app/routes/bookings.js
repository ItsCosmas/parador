const express = require('express');
const { getAll, getById, createBooking } = require('../controllers/bookings');
const auth = require('../middlewares/auth');
const admin = require('../middlewares/admin');

const router = express.Router();
// GET All Bookings
// - /bookings
router.get('/', [auth, admin], getAll);
// GET a Single Booking
// - Auth Required, Admin role or logged in user
// - /bookings/<bookingId>
router.get('/:bookingId', auth, getById);
// Create a booking
// - /bookings
// - Create a booking updates the RoomType Child room count
router.post('/', auth, createBooking);
// Update a booking
// - /booking/<bookingId>
// - Create a booking updates the RoomType Child room count
router.put('/:bookingId', (req, res) => {
	res.json({ message: 'Booking Updated' });
});

module.exports = router;
