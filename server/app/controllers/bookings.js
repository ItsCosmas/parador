const Joi = require('@hapi/joi');

const { Booking } = require('../models/Booking');
const {
	bookingOutputTemplate,
	bookingsOutputTemplate,
} = require('./templates');
// GET All Bookings
// - /bookings
// Filter Bookings by User
// - Auth Required, Admin role or logged in user
// - /bookings?user=<userId>
async function getAll(req, res) {
	let bookings = await Booking.find();
	if (!bookings)
		return res.status(200).json({
			message: 'All bookings',
			body: 'No Bookings at the Moment',
		});

	res.status(200).json({
		message: 'All bookings',
		body: bookingsOutputTemplate(bookings),
	});
}
// (req, res) => {
//     let user = req.query.user;

//     if (user === undefined) {
//         return res.json({ message: 'All Bookings' });
//     } else {
//         // Filter Bookings by User
//         // - Auth Required, Admin role or logged in user
//         // - /bookings?user=<userId>
//         res.json({
//             message: `All Bookings by a User with given UserId: ${user}`,
//         });
//     }
// }
// GET a Single Booking by User
// - Auth Required, Admin role or logged in user
// - /bookings?user=<userId>/<bookingId>

async function getById(req, res) {
	if (!req.params.bookingId)
		return res.status(400).json({
			error: 'An ID is required',
		});
	let booking = await Booking.findOne({
		externalId: req.params.bookingId,
	});

	if (!booking)
		return res.status(400).json({
			error: 'Uknown booking',
		});

	res.status(200).json({
		message: 'Requested Booking',
		body: bookingOutputTemplate(booking),
	});
}

// Create a booking
// - /bookings
// - Create a booking updates the RoomType Child room count'
async function createBooking(req, res) {
	const bookingSchema = Joi.object({
		userId: Joi.string().required(),
		roomTypeId: Joi.string().required(),
		price: Joi.string().required(),
	});
	// Validate Body
	const { error } = bookingSchema.validate(req.body);
	if (error) {
		message = error.details[0].message;
		return res.status(400).json({
			error: message,
		});
	}

	// Create a Booking
	const booking = new Booking({
		userId: req.body.userId,
		roomTypeId: req.body.roomTypeId,
		price: req.body.price,
	});

	// Save Booking in the database
	await booking.save(function (err, roomType) {
		if (err)
			return res.status(500).send({
				error:
					err.message ||
					'Some error occurred while creating the Booking.',
			});
		console.log(booking);

		res.status(201).json({
			message: 'Room Booked',
			body: bookingOutputTemplate(booking),
		});
	});
}

// Update a booking
// - /booking/<bookingId>
// - Create a booking updates the RoomType Child room count

module.exports = {
	createBooking,
	getAll,
	getById,
};
