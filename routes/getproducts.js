const express = require('express');
const Product = require('../model/Products');
const router = express.Router();

router.get('/', async (req, res) => {
	try {
		const product = await Product.find().populate('categoryId');

		filterproduct = product.filter(
			(data) =>
				data.categoryId && data.categoryId.categoryName === 'Sneakers',
		);
		res.json(filterproduct);
	} catch (error) {
		console.log(error);
	}
});

router.get('/:id', async (req, res) => {
	try {
		const product = await Product.findById(req.params.id);
		res.json(product);
	} catch (error) {
		console.log(error);
	}
});
router.get('/:name', async (req, res) => {
	try {
		const product = await Product.find({ productName: req.params.name });
		res.json(product);
	} catch (error) {
		console.log(error);
	}
});
//update
router.post('/:id', async (req, res) => {
	const { newdesc } = req.body;
	try {
		const product = await Product.findByIdAndUpdate(
			req.params.id,
			{
				$set: { productDesc: newdesc },
			},
			{ new: true },
		);
		res.json(product);
	} catch (error) {
		console.log(error);
	}
});

module.exports = router;
