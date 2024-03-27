const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: [true, 'Please provide cate gory name'],
			unique: [true, 'Category name already exists'],
		},
		slug: {
			type: String,
			lowercase: true,
		},
		image: {
			type: String,
		}
	},
	{
		timestamps: true,
	}
);
const Category = mongoose.model('category', categorySchema);

module.exports = Category;
