const globalError = (error, req, res , next) => {
	const status = error.statusCode || 500;
	res.status(status).json({
		error: error,
		message: error.message,
		stack : error.stack
	});
};

module.exports = globalError;