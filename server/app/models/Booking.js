// Booking Schema
// Stores the User Reference from users table
// Stores Room Type and Room Number
// Store Check In date and Check Out date

const mongoose = require('mongoose');
const { v1: uuidv1 } = require('uuid');

const BookingSchema = new mongoose.Schema(
	{
		externalId: {
			type: String,
			default: uuidv1,
			required: true,
			unique: true,
		},
		userId: { type: String, required: true },
		roomTypeId: { type: String, required: true },
		price: { type: String, required: true },
		checkInDate: { type: Date },
		checkOutDate: { type: Date },
	},
	{ timestamps: true },
	{ strict: true }
);

const Booking = mongoose.model('Booking', BookingSchema);

module.exports = { Booking };
