// * importing modules
const { validationResult } = require('express-validator/check'); // express validator
const bcrypt = require('bcryptjs'); // encryption
const jwt = require('jsonwebtoken') // token

// * importing Models
const User = require('../Models/user'); // user Model

// route PUT /signup
exports.signup = (req, res, next) => { // methods: creates a new user
    // express validation results
    const errors = validationResult(req); // checks for any validation errors
    if(!errors.isEmpty()) {
        const error = new Error('Validation failed, data entered is incorrect');
        error.statusCode = 422;
        throw error;
    }

    const email = req.body.email; // get email via the client
    const password = req.body.password; // get password via the client
    const name = req.body.name; // get name via the client
    bcrypt.hash(password, 12) // hash the password before storing the user
        .then((hashedPassword) => { // pass the hashed password down to the User instance being created
            const user = new User({
                email: email, // user_email
                password: hashedPassword, // user_password
                name: name // user_name
            });
            return user.save(); // saves 
        })
        .then((result) => {
            res.status(201).json({ message: 'User created!', userId: result._id }); // return data to the user
        })
        .catch((err) => { // catch any errors
            if(!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
};

// route POST /login
exports.login = (req, res, next) => { // methods: authenticates an existing user
    const email = req.body.email; // get email via the client
    const password = req.body.password; // get password via the client
    let loadedUser; // initialize the loadedUser var

    User.findOne({email: email}) // find a user based on the email via the client
        .then((user) => {
            if(!user) { // if no user exist with the email input 
                const error = new Error('A user with this email could not be found'); // throw an error
                error.statusCode = (401);
                throw error;
            }
            loadedUser = user; // if a user is found, set the loadedUser to the user found
            // here we compare user's password and the password passed in via the client
            return bcrypt.compare(password, user.password); // using bcrypt we compare the passwords and return its result
        })
        .then((isEqual) => {
            if(!isEqual) { // if the passwords do not match..
                const error = new Error('Wrong password!'); // throw an error
                error.statusCode = (401);
                throw error;
            }
            // here we create a json web token based on the authenticated user
            // this token will allow our user to be persistent on the client side
            const token = jwt.sign( // the token will be signed by the user's email, id, and jwt secret
            {
                email: loadedUser.email, // user's email
                userId: loadedUser._id.toString() // user's id
            }, 
                'secret', // token secret
                {expiresIn: '1h'}, // token default experation date

            );
            res.status(200).json({ token: token, userId: loadedUser._id.toString() }); // return the token to the user & the user id
        })
        .catch((err) => { // catch any errors
            if(!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
};
