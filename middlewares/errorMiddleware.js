const globalError = (error, req, res) => {
	const status = error.statusCode || 500;
	res.status(status).json({
		error: error,
		message: error.message,
		stack : error.stack
	});
};

module.exports = globalError;