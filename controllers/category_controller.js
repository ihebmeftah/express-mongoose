const expressAsyncHandler = require('express-async-handler');
const category = require('../models/category');
const ApiError = require('../utils/apiError');

exports.addCategory = expressAsyncHandler(async (req, res) => {
    const { name } = req.body;
    const data = await category.create({
        name,
    });
    res.status(201).json(data);
})

exports.getCategories = expressAsyncHandler(async (req, res) => {
    const page = parseInt(req.query.page);
    const limit = parseInt(req.query.limit);
    const skip = (page - 1) * limit;
    if (!page &&!limit) {
        const data = await category.find()
        res.status(200).json(data)
    } else {
        const data = await category.find().skip(skip).limit(limit)
        res.status(200).json({
            total: data.length,
            data
        })
    }
})

exports.getOneCategory = expressAsyncHandler(async (req, res, next) => {
    const { id } = req.params;
    const data = await category.findById(id)
    if (!data) {
        return next(new ApiError('Category not found', 404))
    }
    res.status(200).json(data)
})

exports.deleteCategory = expressAsyncHandler(async (req, res, next) => {
    const { id } = req.params;
    const data = await category.findByIdAndDelete(id);
    if (!data) {
        return next(new ApiError('Category not found', 404))
    }
    res.status(200).json({ message: "Category deleted successfully" });
})
exports.updateCategory = expressAsyncHandler(async (req, res, next) => {
    const { id } = req.params;
    const { name } = req.body;
    const data = await category.findByIdAndUpdate(id, { name }, { new: true })
    if (!data) {
        return next(new ApiError('Category not found', 404))
    }
    res.status(200).json(data)
})