// install dependencies
const express = require('express');
const server = express()
const compression = require('compression')
const YAML = require('yamljs');
const path = require('path')
const swagger_path = path.resolve(__dirname, '../swagger.yaml');

// set up and require cross-origin policy ath
// start of the api
const cors = require('cors')
const corsOptions = {
    origin: 'http://localhost:3000'
}

server.use(cors(corsOptions))
server.use(compression())

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = YAML.load(swagger_path);

// implement dependencies for the server
server.use(express.json())

// base route api endpoint
server.get('/api', (req, res) => {
    res.status(200).json({message: `The API is running and the test env var is ${process.env.JWT_SECRET2}`})
    // res.sendStatus(200)
})

// import Router Modules
const authRouter = require('./Router/auth/authRouter');
const runsRouter = require('./Router/appointments/appointmentRouter');
const userRouter = require('./Router/users/userRouter');

// endpoints
server.use('/api', authRouter);
server.use('/api/runs', runsRouter);
server.use('/api/users', userRouter);
server.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))



// export the server to index.js
module.exports = server;