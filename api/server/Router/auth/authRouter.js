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
        // res.status(400).json({message: 'Incomplete credentials, please try again.'})
        res.sendStatus(400)
    }
    try {
        Auth.getUser(email).then(user => {
            Auth.authUser(email, password, user.email, user.password)
            token = Auth.generateToken(user)
            // console.log('token: ', token);
            res.status(200).json({message: 'Login successful', token: token});
        });
    } catch (err) {
        // res.status(500).json({message: 'Server Error, could not authenticate user. Please try again'})
        res.sendStatus(500)
    }
})

// middleware to handle Authentication Headers
const authenticateJWT = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if(!authHeader){
        // res.status(401).json({message: 'Invalid authentication.'})
        res.sendStatus(401)
        return
    }
    try {
        jwt.verify(authHeader, process.env.JWT_SECRET, (err) => {
            if(err){
                // res.status(401).json({message: 'Invalid authorization token.'})
                res.sendStatus(401)
                return;
            }
            // console.log('Valid token');
            next();
        })
    } catch(err) {
        // console.log('Could not authenticate the token')
        console.error(err)
    }
}

Router.get('/validate', authenticateJWT,(req, res) => {
    
    // console.log('Request Headers: ', req.headers)

    res.sendStatus(200)
})


// export router module
module.exports = Router