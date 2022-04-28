// import modules and packages
const express = require('express');
const Runs = require('./appointmentModel');
const jwt = require('jsonwebtoken');

// set up Router object
const Router = express.Router();

// authentication middelware
const authenticateJWT = (req, res, next) => {
    const authHeader = req.headers.authorization;
    console.log('token: ', authHeader)
    if(!authHeader){
        res.status(401).json({message: 'Invalid authentication.'})
        return
    }
    try {
        jwt.verify(authHeader, process.env.JWT_SECRET, (err) => {
            if(err){
                res.status(401).json({message: 'Invalid authorization token.'})
                return;
            }
            console.log('Valid token');
            next();
        })
    } catch(err) {
        console.log('Could not authenticate the token')
    }
}

Router.get('/list', authenticateJWT, (req, res) => {
    Runs.getAppointments()
        .then(runs => {
            res.status(200).json({message: 'Rendering scheduled runs...', Runs: runs})
        })
})

// Export Router
module.exports = Router