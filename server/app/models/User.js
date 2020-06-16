const mongoose = require('mongoose');
const { v1: uuidv1 } = require('uuid');

const UserSchema = new mongoose.Schema(
	{
		externalId: {
			type: String,
			default: uuidv1,
			required: true,
			unique: true,
		},
		fullName: { type: String, required: true },
		email: { type: String, required: true, unique: true },
		password: { type: String, required: true },
		phone: { type: String, required: true, unique: true },
		role: { type: String, default: 'standard' },
		active: { type: Boolean, default: true },
		dateJoined: { type: Date, default: Date.now },
		dateLeft: { type: Date },
	},
	{ strict: true }
);

const User = mongoose.model('User', UserSchema);

module.exports = User;
