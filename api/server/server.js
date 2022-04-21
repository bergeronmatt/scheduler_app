// install dependencies
const express = require('express');
const server = express()

// implement dependencies for the server
server.use(express.json())

// base route api endpoint
server.get('/api', (req, res) => {
    res.status(200).json({message: 'The api is up and running'})
})

// export the server to index.js
module.exports = server;