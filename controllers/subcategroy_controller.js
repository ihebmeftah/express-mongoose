const expressAsyncHandler = require('express-async-handler');
const Category = require('../models/category');
const ApiError = require('../utils/apiError');
const SubCategory = require('../models/subcategory');

exports.addSubCategory = expressAsyncHandler(async (req, res, next) => {
    const { name, category } = req.body;
    const existCategory = await Category.findById(category);
    if (!existCategory) {
        return next(new ApiError('Category not found', 404))
    }
    const data = await SubCategory.create({
        name,
        category
    });
    res.status(201).json(data);
})

exports.getOneSubCategory = expressAsyncHandler(async (req, res, next) => {
    const { id } = req.params;
    const data = await SubCategory.findById(id).populate({path:'category', select:'name -_id'});
    if (!data) {
        return next(new ApiError('SubCategory not found', 404))
    }
    res.status(200).json(data)
})

exports.getSubCategory = expressAsyncHandler(async (req, res) => {
    const page = parseInt(req.query.page);
    const limit = parseInt(req.query.limit);
    const skip = (page - 1) * limit;
    if (!page && !limit) {
        const data = await SubCategory.find()
        res.status(200).json(data)
    } else {
        const data = await SubCategory.find().skip(skip).limit(limit)
        res.status(200).json({
            total: data.length,
            data
        })
    }
})

exports.updateSubCategory = expressAsyncHandler(async (req, res, next) => {
    const { id } = req.params;
    const { name, category } = req.body;
    const existSubCategory = await SubCategory.findById(id);
    if (!existSubCategory) {
        return next(new ApiError('SubCategory not found', 404))
    }
    if (category) {
        const existCategory = await Category.findById(category);
        if (!existCategory) {
            return next(new ApiError('Category not found', 404))
        }
    }
    const data = await SubCategory.findByIdAndUpdate(id, { name : name || existSubCategory.name, category : category || existSubCategory.category }, { new: true })
  res.status(200).json(data);
})

exports.deleteSubCategory = expressAsyncHandler(async (req, res, next) => {
    const { id } = req.params;
    const data = await SubCategory.findByIdAndDelete(id);
    if (!data) {
        return next(new ApiError('SubCategory not found', 404))
    }
    res.status(200).json({
        message: 'SubCategory deleted successfully'
    })
})