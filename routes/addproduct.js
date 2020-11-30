const express = require('express');
const Product = require('../model/Products');
const router = express.Router();

router.post('/', async (req, res) => {
	const { productName, productDesc, categoryId } = req.body;

	try {
		const newProduct = new Product({
			productName,
			productDesc,
			categoryId,
		});

		const product = await newProduct.save();
		res.status(200).json(product);
	} catch (error) {
		console.log(error);
	}
});

module.exports = router;
