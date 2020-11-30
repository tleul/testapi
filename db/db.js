const mongoose = require('mongoose');
require('dotenv').config();
const dbConnect = () => {
	mongoose
		.connect(process.env.MONGODB, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		})
		.then(() => {
			console.log('Database Connected');
		})
		.catch((error) => {
			console.log(error);
		});
};
module.exports = dbConnect;
