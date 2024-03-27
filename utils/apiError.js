// @description   this is a class that is used to handle errors in the api (error that i can predict)
class ApiError extends Error {
	constructor(message ,statusCode) {
		super(message);
		this.statusCode = statusCode;
		this.status =  `${statusCode}`.startsWith('4') ? 'fail' : 'error';
	}   
}

module.exports = ApiError;