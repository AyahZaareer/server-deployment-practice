/* eslint-disable no-mixed-spaces-and-tabs */
module.exports = (req, res, next) => {
	res.status(404).json({ error: 'Not Found' });
};