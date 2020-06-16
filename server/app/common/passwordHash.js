const bcrypt = require('bcrypt');
// Can be got from env
const saltRounds = 10;

async function hashPassword(password) {
	// await dosent wait for bcrypt.hash because bcrypt.hash
	// basically wrapping bcrypt in a promise in order to use await
	const hashedPassword = await new Promise((resolve, reject) => {
		bcrypt.hash(password, saltRounds, function (err, hash) {
			if (err) reject(err);
			resolve(hash);
		});
	});

	return hashedPassword;
}

module.exports = { hashPassword };
