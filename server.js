const express = require('express');
const dbConnect = require('./db/db');
const app = express();
require('dotenv').config();
dbConnect();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use((req, res, next) => {
	res.header('Access-Control-Allow-Credentials', true);
	res.header(
		'Access-Control-Allow-Methods',
		'PUT, POST, GET, DELETE, OPTIONS',
	);
	res.header('Access-Control-Allow-Origin', '*');
	res.header(
		'Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content-Type, Accept, x-auth-token, productId',
	);
	next();
});

app.use('/api/addproduct', require('./routes/addproduct'));
app.use('/api/getproduct', require('./routes/getproducts'));
app.use('/api/addcategory', require('./routes/addcategory'));
app.listen(PORT, console.log('Server Connected'));
