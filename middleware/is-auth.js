// * importing modules
const jwt = require('jsonwebtoken') // token

// middleware used to verify a token/protect routes
module.exports = (req, res, next) => {
    const authHeader = req.get('Authorization'); // Authorization Header
    if(!authHeader) { // if the Auth Header is not declared throw an error
        const error = new Error('Not authenticated');
        error.statusCode = 401;
        throw error;
    }
    const token = authHeader.split(' ')[1]; // get the token from the Auth header
    let decodedToken; // initiate a var where to store the decoded jwt
    try{
        // verify the token retrieved from the Auth header if it exists
        // pass the verified token to the initiated variable 'decodedToken'
        decodedToken = jwt.verify(token, 'secret');
    } catch(err) { 
        err.statusCode = 500; // if no token was found throw an error
        throw err;
    }
    if(!decodedToken) { // if no token was decoded throw an error
        const error = new Error('Not Authenticated');
        error.statusCode = 401;
        throw error;
    }
    req.userId = decodedToken.userId; // set the userId to the decodedToken.userId
    next();
};