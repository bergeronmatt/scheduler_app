// install dependencies
const express = require('express');
const server = express()

// set up and require cross-origin policy ath
// start of the api
const cors = require('cors')
const corsOptions = {
    origin: 'http://localhost:3000'
}

server.use(cors(corsOptions))

// implement dependencies for the server
server.use(express.json())

// base route api endpoint
server.get('/api', (req, res) => {
    res.status(200).json({message: 'The api is up and running'})
})

// import Router Modules
const authRouter = require('./Router/auth/authRouter');
const runsRouter = require('./Router/appointments/appointmentRouter');

// endpoints
server.use('/api', authRouter);
server.use('/api/runs', runsRouter);


// export the server to index.js
module.exports = server;