// import modules and packages
const express = require('express');
const Runs = require('./appointmentModel');
const jwt = require('jsonwebtoken');

// set up Router object
const Router = express.Router();

// authentication middelware
const authenticateJWT = (req, res, next) => {
    const authHeader = req.headers.authorization;
<<<<<<< HEAD
    // console.log('token: ', authHeader)
    if(!authHeader){
        // res.status(401).json({message: 'Invalid authentication.'})
        res.sendStatus(401)
=======
    console.log('token: ', authHeader)
    if(!authHeader){
        res.status(401).json({message: 'Invalid authentication.'})
>>>>>>> 626ccf7a38847a1b05024cb13c1d7b7a42d0ca12
        return
    }
    try {
        jwt.verify(authHeader, process.env.JWT_SECRET, (err) => {
            if(err){
<<<<<<< HEAD
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
        return
=======
                res.status(401).json({message: 'Invalid authorization token.'})
                return;
            }
            console.log('Valid token');
            next();
        })
    } catch(err) {
        console.log('Could not authenticate the token')
>>>>>>> 626ccf7a38847a1b05024cb13c1d7b7a42d0ca12
    }
}

// Get the entire list of currently Scheduled Runs
Router.get('/list', authenticateJWT, (req, res) => {
    Runs.getAppointments()
        .then(runs => {
            res.status(200).json({message: 'Rendering scheduled runs...', Runs: runs})
        })
})

// Add new Run to the database
Router.post('/add_run', authenticateJWT, (req, res) => {
    const runData = req.body;
    try {
        Runs.addAppointment(runData)
        res.sendStatus(200);
    } catch (err) {
<<<<<<< HEAD
        // res.status(500).json({message: 'Error inserting data into database'});
        res.sendStatus(500)
=======
        res.status(500).json({message: 'Error inserting data into database'});
>>>>>>> 626ccf7a38847a1b05024cb13c1d7b7a42d0ca12
    }
})

// Update/Edit a Scheduled Run
Router.put('/update/:id', authenticateJWT, (req, res) => {

    const {id} = req.params;
    const runData = req.body;

    try {
        Runs.updateAppointment(id, runData)
        res.sendStatus(200)
    } catch(err) {
<<<<<<< HEAD
        // res.status(400).json({message: `Could not update: ${err}`})
        res.sendStatus(400)
=======
        res.status(400).json({message: `Could not update: ${err}`})
>>>>>>> 626ccf7a38847a1b05024cb13c1d7b7a42d0ca12
    }
    
})

// Delete a Scheduled Run
Router.delete('/:id', authenticateJWT, (req, res) => {
    const {id} = req.params;

    Runs.deleteRun(id)
        .then(deleted => {
<<<<<<< HEAD
            // res.status(200).json({message: `Post id ${id} successfully deleted.`})
            res.sendStatus(200)
=======
            res.status(200).json({message: `Post id ${id} successfully deleted.`})
>>>>>>> 626ccf7a38847a1b05024cb13c1d7b7a42d0ca12
        })

})

// Export Router
module.exports = Router