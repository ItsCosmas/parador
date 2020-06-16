const jwt = require('jsonwebtoken');

function getTokenFromHeader(header) {
	if (header && header.split(' ')[0] === 'Bearer') {
		return header.split(' ')[1];
	}

	return null;
}

function auth(req, res, next) {
	const header = req.header('Authorization');
	if (!header)
		return res.status(400).json({ error: 'Missing Authorization Token' });
	token = getTokenFromHeader(header);
	if (!token)
		return res.status(400).json({ error: 'Missing Authorization Token' });

	try {
		const decoded = jwt.verify(token, process.env.APP_jwtPrivateKey);
		req.user = decoded;
		next();
	} catch (e) {
		res.status(400).json({ error: 'Invalid Token' });
	}
}

module.exports = auth;
