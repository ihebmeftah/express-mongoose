const { check } = require('express-validator');
const { validatorMiddleware } = require('../../middlewares/validatorMiddleware');
exports.createSubCategoryValidator = [
	check('name').notEmpty().withMessage('SubCategory name is required')
		.isLength({ min: 2 }).withMessage('Too short SubCategory name')
		.isLength({ max: 32 }).withMessage('Too long SubCategory name'),
	check('category').notEmpty().withMessage('category is required')
		.isMongoId().withMessage('Invalid category Id format'),
	validatorMiddleware,
];
exports.updateSubCategoryValidator = [
    check('id').notEmpty().withMessage('SubCategory Id is required').isMongoId().withMessage('Invalid SubCategory Id format'),
	check('name').optional()
		.isLength({ min: 2 }).withMessage('Too short SubCategory name')
		.isLength({ max: 32 }).withMessage('Too long SubCategory name'),
	check('category').optional().isMongoId().withMessage('Invalid category Id format'),
	validatorMiddleware,
];

exports.getOneSubCategoryValidator = [
    check('id').notEmpty().withMessage('SubCategory Id is required').isMongoId().withMessage('Invalid SubCategory Id format'),
	validatorMiddleware,
];
exports.deleteSubCategoryValidator = [
    check('id').notEmpty().withMessage('SubCategory Id is required').isMongoId().withMessage('Invalid SubCategory Id format'),
	validatorMiddleware,
];