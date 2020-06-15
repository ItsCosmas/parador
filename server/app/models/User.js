const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
	{
		externalID: { type: String, required: true, unique: true },
		fullName: { type: String, required: true },
		Email: { type: String, required: true },
		Phone: { type: String, required: true },
		role: { type: String, default: 'standard' },
		active: { type: Boolean, default: true },
		dateJoined: { type: Date, default: Date.now },
		dateLeft: { type: Date },
	},
	{ strict: true }
);

const User = mongoose.model('User', UserSchema);

module.exports = User;
