// set up express
const express = require('express');
const jwt = require('jsonwebtoken');

// import helper functions
const Auth = require('./authModels')

// set up router object
const Router = express.Router();

// authentication endpoint
// set up initial endpoint to test, fill in later
Router.post('/auth', (req, res) => {
    const {email, password} = req.body;

    // console.log('email: ', email);
    // console.log('password: ', password);

    // console.log('data: ', req.body)

    if(!email || !password) {
        res.status(400).json({message: 'Incomplete credentials, please try again.'})
    }
    try {
        Auth.getUser(email).then(user => {
            Auth.authUser(email, password, user.email, user.password)
            token = Auth.generateToken(user)
            // console.log('token: ', token);
            res.status(200).json({message: 'Login successful', token: token});
        });
    } catch (err) {
        res.status(500).json({message: 'Server Error, could not authenticate user. Please try again'})
    }
})

// export router module
module.exports = Router