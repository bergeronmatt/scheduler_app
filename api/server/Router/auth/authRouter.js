// set up express
const express = require('express');

// set up router object
const Router = express.Router();

// authentication endpoint
// set up initial endpoint to test, fill in later
Router.post('/auth', (req, res) => {
    const {email, password} = req.body.values;

    // if(!email || password) {
    //     res.status(401).json({message: 'Invalid Credentials'})
    // }

    res.status(200).json({message: 'Credentials Accepted.', email: email, password: password})
})

// export router module
module.exports = Router