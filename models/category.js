const mongoose = require("mongoose");
categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide cate gory name"],
      unique: [true, "Category name already exists"],
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
Category = mongoose.model("category", categorySchema);

module.exports = Category;
