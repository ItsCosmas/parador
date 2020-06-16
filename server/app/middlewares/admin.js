module.exports = function (req, res, next) {
	// 401 Unauthorized
	// 403 Forbidden

	if (req.user.role !== 'admin')
		return res.status(403).json({ error: 'Access Denied' });

	next();
};
