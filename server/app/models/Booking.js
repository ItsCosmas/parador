// Booking Schema
// Stores the User Reference from users table
// Stores Room Type and Room Number
// Store Check In date and Check Out date

const mongoose = require('mongoose');

const Booking = new mongoose.Schema(
	{
		externalID: { type: String, required: true, unique: true },
		user: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
		// roomType: [{ type: mongoose.Schema.Types.ObjectId, ref: 'RoomType' }],
		roomNumber: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Room' }],
		checkInDate: { type: Date },
		checkOutDate: { type: Date },
	},
	{ strict: true }
);

const Booking = mongoose.model('Booking', Booking);

module.exports = { Booking };
