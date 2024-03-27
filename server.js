require('dotenv').config();
require('./config/database');

const express = require('express');
const morgan = require('morgan');
const categoryroute = require('./routes/category_routes');
const ApiError = require('./utils/apiError');
const globalError = require('./middlewares/errorMiddleware');

//connet to db
dbConnection();

// express app
const app = express();

// express middlewares for body parsing
app.use(express.json());

// routes
app.use('/api/v1/categories', categoryroute);
app.all('*', (req, res, next) => {
	next(new ApiError(`Can't find ${req.originalUrl} on this server!`, 404));
});
// global error middleware for express
app.use(globalError);

const port = process.env.PORT || 8000;
const mode = process.env.NODE_ENV;
if (mode === 'development') {
	app.use(morgan('dev'));
	console.log('mode : development');
}
const server = app.listen(8000, () => console.log(`Listening on port ${port}`));
process.on('unhandledRejection', (err) => {
	console.log(`Error: ${err.message}`);
	server.close(() => process.exit(1));
});