'use strict';
const express = require('express');
// require('dotenv').config();
const app = express();
// let PORT = process.env.PORT || 3050;

const notFound = require('./error-handlers/404');
const errorHandler = require('./error-handlers/500');
app.get('/', (req, res) => {
	res.send('Hello World');
});
app.get('/bad', (req, res) => {
	throw new Error('Something went wrong');


});
app.use('*', notFound);
app.use(errorHandler);


// app.listen(PORT, () => {
// 	console.log(`server start on ${PORT}`);
// });

function start(port) {
	app.listen(port, () =>
		console.log(`server start on ${port}`));
};

module.exports = {
	app: app,
	start: start,
};
