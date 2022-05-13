// import modules and packages
const express = require('express');
const Runs = require('./appointmentModel');

// middelware to authenticate requests
// const authenticateJWT = require('../auth/authenticateJWT')

// set up Router object
const Router = express.Router();

// Get the entire list of currently Scheduled Runs
Router.get('/list', (req, res) => {
    Runs.getAppointments()
        .then(runs => {
            res.status(200).json({message: 'Rendering scheduled runs...', Runs: runs})
        })
})

// Add new Run to the database
Router.post('/add_run', (req, res) => {
    const runData = req.body;
    try {
        Runs.addAppointment(runData)
        res.sendStatus(200);
    } catch (err) {
        // res.status(500).json({message: 'Error inserting data into database'});
        res.sendStatus(500)
    }
})

// Update/Edit a Scheduled Run
Router.put('/update/:id', (req, res) => {

    const {id} = req.params;
    const runData = req.body;

    try {
        Runs.updateAppointment(id, runData)
        res.sendStatus(200)
    } catch(err) {
        // res.status(400).json({message: `Could not update: ${err}`})
        res.sendStatus(400)
    }
    
})

// Delete a Scheduled Run
Router.delete('/:id', (req, res) => {
    const {id} = req.params;

    Runs.deleteRun(id)
        .then(deleted => {
            // res.status(200).json({message: `Post id ${id} successfully deleted.`})
            res.sendStatus(200)
        })

})

// Export Router
module.exports = Router