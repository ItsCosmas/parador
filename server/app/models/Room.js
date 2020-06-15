const mongoose = require('mongoose');

const RoomType = new mongoose.Schema(
	{
		externalID: { type: String, required: true, unique: true },
		title: { type: String, required: true },
		description: { type: String, required: true },
		price: { type: String, required: true },
		category: { type: String, required: true },
		roomCount: { type: Number, required: true },
		headerPhoto: { type: String, required: true },
		photos: [
			{
				type: String,
			},
		],
	},
	{ strict: true }
);

// Rooms will be populated automatically based on the roomCount on Room Type
// Each Room Must belong to a room type
const Room = new mongoose.Schema({
	roomNumber: { type: Number },
	booked: { type: Boolean, default: false },
	roomType: [{ type: mongoose.Schema.Types.ObjectId, ref: 'RoomType' }],
});

const RoomType = mongoose.model('RoomType', RoomType);

const Room = mongoose.model('Room', Room);

module.exports = { RoomType, Room };
