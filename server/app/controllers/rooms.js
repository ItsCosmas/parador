const {
	roomTypeOutputTemplate,
	roomTypesOutputTemplate,
} = require('./templates');
const { RoomType, Room } = require('../models/Room');
const Joi = require('@hapi/joi');
// Get All Room Types
// - /rooms

async function getAll(req, res) {
	let rooms = await RoomType.find();
	if (!rooms)
		return res.status(200).json({
			message: 'All rooms',
			body: 'No Rooms at the Moment',
		});

	res.status(200).json({
		message: 'All rooms',
		body: roomTypesOutputTemplate(rooms),
	});
}

// GET a Single room
async function getById(req, res) {
	if (!req.params.roomTypeId)
		return res.status(400).json({
			error: 'An ID is required',
		});
	let room = await RoomType.findOne({
		externalId: req.params.roomTypeId,
	});

	if (!room)
		return res.status(400).json({
			error: 'Uknown Room',
		});

	res.status(200).json({
		message: 'Requested Room',
		body: roomTypeOutputTemplate(room),
	});
}
// Create/Publish a Room Type
// - Auth Required, Admin role
// - /rooms
//  - Generate Room Numbers from passed room count and create rooms with generated room numbers
async function publishRoom(req, res) {
	const publishSchema = Joi.object({
		name: Joi.string().min(5).required(),
		description: Joi.string().required().min(50),
		price: Joi.string().required(),
		category: Joi.string().required(),
		roomCount: Joi.number().required(),
	});
	// Validate Body
	const { error } = publishSchema.validate(req.body);
	if (error) {
		message = error.details[0].message;
		return res.status(400).json({
			error: message,
		});
	}

	// Case name of room already exist
	let nameExist = await RoomType.findOne({
		name: req.body.name,
	});

	if (nameExist !== null)
		return res.status(400).json({
			error: 'A Room with a similar name already exists',
		});

	// Create a Room
	const roomType = new RoomType({
		name: req.body.name,
		description: req.body.description,
		price: req.body.price,
		category: req.body.category,
		roomCount: req.body.roomCount,
	});

	// Save Room in the database
	await roomType.save(function (err, roomType) {
		if (err)
			return res.status(500).send({
				error:
					err.message ||
					'Some error occurred while creating the Room.',
			});
		res.status(201).json({
			message: 'New Room Published',
			body: roomTypeOutputTemplate(roomType),
		});
	});
}

//  Update a Room Type
// - Auth Required, Admin role
// - /rooms/<roomTypeId>
// - If Room Count Changes, Update the Rooms

async function updateRoom(req, res) {
	if (!req.params.roomTypeId)
		return res.status(400).json({
			error: 'An ID is required',
		});

	const updateSchema = Joi.object({
		name: Joi.string().min(5).required(),
		description: Joi.string().required().min(50),
		price: Joi.string().required(),
		category: Joi.string().required(),
		roomCount: Joi.number().required(),
	});
	// Validate Body
	const { error } = updateSchema.validate(req.body);
	if (error) {
		message = error.details[0].message;
		return res.status(400).json({
			error: message,
		});
	}

	// Case name of room already exist
	let nameExist = await RoomType.findOne({
		name: req.body.name,
	});

	if (nameExist !== null && nameExist === req.body.name)
		return res.status(400).json({
			error: 'A Room with a similar name already exists',
		});

	RoomType.findOneAndUpdate(
		{ externalId: req.params.roomTypeId },
		{
			$set: {
				name: req.body.name,
				description: req.body.description,
				price: req.body.price,
				category: req.body.category,
				roomCount: req.body.roomCount,
			},
		},
		{ new: true },
		(err, doc) => {
			if (err) {
				return res.status(500).json({
					error: 'Something went wrong deleting the user',
				});
			}
			res.status(200).json({
				message: 'Room Updated',
			});
		}
	);
}

//  Delete a Room Type
// - Auth Required, Admin role
// -/rooms/<roomTypeId>
// - Deletes associated Rooms

const deleteRoom = (req, res) => {
	if (!req.params.roomTypeId)
		return res.status(400).json({
			error: 'An ID is required',
		});
	RoomType.deleteOne({ externalId: req.params.roomTypeId }, (err, doc) => {
		if (err) {
			return res.status(500).json({
				error: 'Something went wrong deleting the Room',
			});
		}
		res.status(200).json({ message: 'Room with given Id Deleted' });
	});
};

module.exports = {
	getAll,
	getById,
	publishRoom,
	updateRoom,
	deleteRoom,
};
