const express = require('express');
const dotenv = require('dotenv');
const axios = require('axios');
// const router = express.Router();
const connectDB = require('./config/db');

dotenv.config({ path: './config/config.env'});

connectDB();

const app = express();

app.post("/", async (req, res) => {

		const response = await axios({
			url: "https://api.paystack.co/transaction/initialize",
			method: "post",
		});

		res.status(200).json(response.data);

});


const PORT = process.env.PORT || 5000;

const server = app.listen(
    PORT,
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
    );


// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
    console.log(`Error: ${err.message}`);
    // Close server & exit process
    server.close(() => process.exit(1));
})



// axios.post('https://api.paystack.co/transaction/initialize', {
//     "Content-Type" : "application/json",
//     "Authorization" : "Bearer sk_test_262f353f1496c3441f87caeed5019e59121c0727",
//     "email": "josepholusegun3@gmail.com", 
//     "amount": "20000"
// })
//     .then(function (response) {
//     console.log(response);
//     })
//     .catch(function (error) {
//     console.log(error);
//     });

// var data = '';

// var config = {
//     method: 'get',
//     url: 'https://api.paystack.co/transaction',
//     headers: { 
//     'Authorization': 'Bearer sk_test_262f353f1496c3441f87caeed5019e59121c0727'
//     },
//     data : data
// };

// axios(config)
// .then(function (response) {
//     console.log(JSON.stringify(response.data))
//     await Transaction.save()
// })
// .catch(function (error) {
//     console.log(error);
// });



