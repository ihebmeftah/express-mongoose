const { validationResult } = require('express-validator')
exports.validatorMiddleware = (req, res, next) => {
    const error = validationResult(req)
    if (!error.isEmpty()) {
        return res.status(422).json({ errors: error.array() })
    }
    next()
}