const express = require('express');
const Category = require('../model/Category');
const router = express.Router();

router.post('/', async (req, res) => {
	const { categoryName, categoryDesc } = req.body;

	try {
		const newCategory = new Category({
			categoryName,
			categoryDesc,
		});

		const category = await newCategory.save();
		res.status(200).json(category);
	} catch (error) {
		console.log(error);
	}
});

module.exports = router;
