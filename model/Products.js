const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ProductSchema = Schema({
	productName: {
		type: String,
	},
	productDesc: {
		type: String,
	},
	categoryId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Category',
	},
});

const Product = mongoose.model('Product', ProductSchema);
module.exports = Product;
