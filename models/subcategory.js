const mongoose = require('mongoose');

const SubCategorySchema = new mongoose.Schema(
	{
		name: {
			type: String,
			trim: true,
			required: [true, 'Please provide subcategory name'],
			unique: [true, 'subcategory name already exists'],
			minlength: [2, 'Too short subcategory name'],
			maxlength: [32, 'Too long subcategory name'],
		},
		category: {
			type: mongoose.Schema.ObjectId,
			ref: 'category',
			required: [true, 'Please provide category']
		}
	},  
	{
		timestamps: true,
	}
);
const SubCategory = mongoose.model('subcategory', SubCategorySchema);

module.exports = SubCategory;
