const express = require('express');
const { addCategory, getCategories, getOneCategory, deleteCategory, updateCategory } = require('../controllers/category_controller');
const { getOneCategoryValidator, deleteCategoryValidator, updateCategoryValidator, createCategoryValidator } = require('../utils/validators/categoryValidators');

const router = express.Router();

router.use('/:categoryId/subcategory', require('./subcategory_routes')); 

router.route('/')
	.post(createCategoryValidator, addCategory)
	.get(getCategories);
router.route('/:id')
	.get(getOneCategoryValidator, getOneCategory)
	.delete(deleteCategoryValidator, deleteCategory)
	.put(updateCategoryValidator, updateCategory);

module.exports = router;