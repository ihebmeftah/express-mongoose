const express = require('express');
const { createSubCategoryValidator, getOneSubCategoryValidator, deleteSubCategoryValidator, updateSubCategoryValidator } = require('../utils/validators/subcategoryValidators');
const { addSubCategory, getOneSubCategory, getSubCategory, deleteSubCategory, updateSubCategory } = require('../controllers/subcategroy_controller');

const router = express.Router();

router.route('/')
	.get(getSubCategory)
	.post(createSubCategoryValidator, addSubCategory)

router.route('/:id')
	.get(getOneSubCategoryValidator, getOneSubCategory)
	.delete(deleteSubCategoryValidator, deleteSubCategory)
	.put(updateSubCategoryValidator, updateSubCategory);



module.exports = router;