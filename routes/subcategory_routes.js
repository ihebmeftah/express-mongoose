const express = require('express');
const { createSubCategoryValidator, getOneSubCategoryValidator, deleteSubCategoryValidator, updateSubCategoryValidator } = require('../utils/validators/subcategoryValidators');
const { addSubCategory, getOneSubCategory, getSubCategory, deleteSubCategory, updateSubCategory } = require('../controllers/subcategroy_controller');

// allows us to use params from category routes
// ex: /api/v1/category/:categoryId/subcategory => we need access to categoryId from category route
const router = express.Router({ mergeParams: true }); 

router.route('/')
	.get(getSubCategory)
	.post(createSubCategoryValidator, addSubCategory)

router.route('/:id')
	.get(getOneSubCategoryValidator, getOneSubCategory)
	.delete(deleteSubCategoryValidator, deleteSubCategory)
	.put(updateSubCategoryValidator, updateSubCategory);



module.exports = router;