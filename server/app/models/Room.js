const mongoose = require('mongoose');
const { v1: uuidv1 } = require('uuid');

const RoomTypeSchema = new mongoose.Schema(
	{
		externalId: {
			type: String,
			default: uuidv1,
			required: true,
			unique: true,
		},
		name: { type: String, required: true },
		description: { type: String, required: true },
		price: { type: String, required: true },
		category: { type: String, required: true },
		roomCount: { type: Number, required: true },
		headerPhoto: { type: String },
		photos: [
			{
				type: String,
			},
		],
	},
	{ timestamps: true },
	{ strict: true }
);

// Rooms will be populated automatically based on the roomCount on Room Type
// Each Room Must belong to a room type
const RoomSchema = new mongoose.Schema({
	roomNumber: { type: Number },
	booked: { type: Boolean, default: false },
	roomType: [{ type: mongoose.Schema.Types.ObjectId, ref: 'RoomType' }],
});

const RoomType = mongoose.model('RoomType', RoomTypeSchema);

const Room = mongoose.model('Room', RoomSchema);

module.exports = { RoomType, Room };
