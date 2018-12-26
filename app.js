// * importing node modules
const path = require('path'); // absolute path

// * importing modules
const express = require('express'); // express framework
const bodyParser = require('body-parser'); // data parser
const mongoose = require('mongoose'); // mongoDB extension

// * express app initialized 
const app = express();

// * importing app routes
const cryptoRoutes = require('./Routes/crypto');
const authRoutes = require('./Routes/auth');

// * app middleware
app.use(bodyParser.json()); // application/json

// ! CORS middleware
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); // ! domains allowed
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE'); // ! methods allowed
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization'); // ! headers allowed
    next();
});

// * routes 
app.use(cryptoRoutes);
app.use(authRoutes);

// ! express error checking middleware (statusCode: 500)
app.use((error, req, res, next) => {
    console.log(error);
    const status = error.statusCode || 500;
    const message = error.message;
    const data = error.data;
    res.status(status).json({ message: message, data: data });
});

// * server initialized
mongoose
    // .connect(`mongodb+srv://root:Kief323812!@cluster0-4ucqx.mongodb.net/cryptolio?retryWrites=true`) // mongoDB instance
    .connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0-4ucqx.mongodb.net/${process.env.MONGO_DEFAULT_DATABASE}`) // mongoDB instance
    .then((result) => {
        app.listen(process.env.PORT || 3000);
    })
    .catch((err) => {
        console.log(err);
    })