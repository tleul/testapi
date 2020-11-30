const mongoose = require('mongoose');

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
