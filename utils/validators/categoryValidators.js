const { check } = require("express-validator");
const { validatorMiddleware } = require("../../middlewares/validatorMiddleware");

exports.getOneCategoryValidator = [
    check("id").isMongoId().withMessage("Invalid Category Id format"),
    validatorMiddleware,
]

exports.createCategoryValidator = [
    check("name").notEmpty().withMessage("Category name is required")
                .isLength({ min: 3 }).withMessage("Too short category name")
                .isLength({ max: 32 }).withMessage("Too long category name"),
    validatorMiddleware,
]

exports.updateCategoryValidator = [
    check("id").isMongoId().withMessage("Invalid Category Id format"),
    check("name").notEmpty().withMessage("Category name is required")
    .isLength({ min: 3 }).withMessage("Too short category name")
    .isLength({ max: 32 }).withMessage("Too long category name"),
    validatorMiddleware,
]


exports.deleteCategoryValidator = [
    check("id").isMongoId().withMessage("Invalid Category Id format"),
    validatorMiddleware,
]
