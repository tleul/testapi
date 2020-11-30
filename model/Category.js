const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CategorySchema = Schema({
	categoryName: {
		type: String,
	},
	categoryDesc: {
		type: String,
	},
});

const Category = mongoose.model('Category', CategorySchema);
module.exports = Category;
