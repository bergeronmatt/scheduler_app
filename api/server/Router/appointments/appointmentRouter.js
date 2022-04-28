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

Router.post('/add_run', authenticateJWT, (req, res) => {
    const runData = req.body;
    try {
        Runs.addAppointment(runData)
        res.sendStatus(200);
    } catch (err) {
        res.status(500).json({message: 'Error inserting data into database'});
    }
})

Router.delete('/:id', authenticateJWT, (req, res) => {
    const {id} = req.params;

    Runs.deleteRun(id)
        .then(deleted => {
            res.status(200).json({message: `Post id ${id} successfully deleted.`})
        })

})

// Export Router
module.exports = Router