const Joi = require('@hapi/joi');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const { hashPassword } = require('../common/passwordHash');
const User = require('../models/User');
const { userOutputTemplate, usersOutputTemplate } = require('./templates');

async function getAll(req, res) {
	let users = await User.find({ active: true });
	if (!users)
		return res.status(200).json({
			message: 'All Users',
			body: 'No Users at the Moment',
		});

	res.status(200).json({
		message: 'All Users',
		body: usersOutputTemplate(users),
	});
}

async function getById(req, res) {
	let user = await User.findOne({
		externalId: req.params.userId,
	});

	if (!user)
		return res.status(400).json({
			error: 'Uknown User',
		});

	res.status(200).json({
		message: 'Requested User',
		body: userOutputTemplate(user),
	});
}

async function registerUser(req, res) {
	const registerSchema = Joi.object({
		fullName: Joi.string().min(3).required(),
		// TODO Regex validate phone and email
		password: Joi.string().alphanum().required().min(6),
		phone: Joi.string().required().min(10),
		email: Joi.string().required(),
	});

	// Validate Body
	const { error } = registerSchema.validate(req.body);
	if (error) {
		message = error.details[0].message;
		return res.status(400).json({
			error: message,
		});
	}

	// Case Email or phone is registred
	let emailTaken = await User.findOne({
		email: req.body.email,
	});

	if (emailTaken !== null)
		return res.status(400).json({
			error: 'Email is already Registered',
		});

	let phoneTaken = await User.findOne({
		phone: req.body.phone,
	});

	if (phoneTaken !== null)
		return res.status(400).json({
			error: 'Phone is already Registered',
		});

	// Call Password Hash
	const hashedPassword = await hashPassword(req.body.password);
	// Create a User
	const user = new User({
		fullName: req.body.fullName,
		email: req.body.email,
		phone: req.body.phone,
		password: hashedPassword,
	});

	// Save User in the database
	await user.save(function (err, user) {
		if (err)
			return res.status(500).send({
				error:
					err.message ||
					'Some error occurred while creating the User.',
			});
		res.status(201).json({
			message: 'New User Created',
			body: userOutputTemplate(user),
		});
	});
}

async function loginUser(req, res) {
	const loginSchema = Joi.object({
		email: Joi.string().required(),
		password: Joi.string().required().min(6),
	});
	// Validate Login Body
	const { error } = loginSchema.validate(req.body);
	if (error) {
		message = error.details[0].message;
		return res.status(400).json({
			error: message,
		});
	}

	// Validate User Exists
	let user = await User.findOne({
		email: req.body.email,
		active: true,
	});

	if (!user)
		return res.status(400).json({
			error: 'Invalid Email or Password',
		});

	// Validate Password
	const isCorrectPassword = await bcrypt.compare(
		req.body.password,
		user.password
	);
	if (!isCorrectPassword)
		return res.status(400).json({
			error: 'Invalid Email or Password',
		});

	// Generate Token
	const token = jwt.sign(
		{
			id: user.externalId,
			role: user.role,
		},
		process.env.APP_jwtPrivateKey
	);

	// return
	res.status(200).json({
		message: 'Successful Login',
		body: userOutputTemplate(user),
		token: token,
	});
}
const updateUser = (req, res) => {
	res.json({ message: 'A Single User with given Id Updated' });
};

const deleteUser = (req, res) => {
	if (!req.params.userId)
		return res.status(400).json({
			error: 'An ID is required',
		});
	User.findOneAndUpdate(
		{ externalId: req.params.userId },
		{ $set: { active: false } },
		{ new: true },
		(err, doc) => {
			if (err) {
				return res.status(500).json({
					error: 'Something went wrong deleting the user',
				});
			}
			res.status(200).json({ message: 'User with given Id Deleted' });
		}
	);
};

module.exports = {
	registerUser,
	getAll,
	getById,
	updateUser,
	deleteUser,
	loginUser,
};
