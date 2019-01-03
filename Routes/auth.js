// * importing modules
const express = require('express'); // express framework
const { body } = require('express-validator/check'); // express validator

// * express router middleware
const router = express.Router();

// * model
const User = require('../Models/user');

// * controller
const authController = require('../Controller/auth');

// route: PUT /signup
router.put(
    '/signup', // api endpoint

    [   // express validation
        body('email') // user_email validation
            .isEmail()
            .withMessage('Please enter a valid email.')
            .custom((value, {req}) => { // custom validation
                return User.findOne({ email: value }) // checking if the email already exists
                    .then((userDoc) => {
                        if(userDoc) {
                            return Promise.reject('Email address already exists');
                        }
                    });
            })
            .normalizeEmail(),
        body('password') // user_password validation
            .trim()
            .isLength({ min: 5 }),
        body('name') // user_name validation
            .trim()
            .not()
    ],

    authController.signup // controller logic
);

// route: POST /login
router.post('/login',
    [   // express validation
        body('email') // user_email validation
            .isEmail()
            .withMessage('Please enter a valid email.')
            .normalizeEmail(),
        body('password') // user_password validation
            .trim()
            .isLength({ min: 5 }),
        body('name') // user_name validation
            .trim()
            .not()
    ],
    authController.login);

// ! exporting the router
module.exports = router;