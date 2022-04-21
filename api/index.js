// set up environmental variable control
require('dotenv').config()

// import the server module
const app = require('./server/server.js')


// set up port object
const port = process.env.PORT || 8080;

// listen to the app
app.listen(port, () => {
    console.log(`The app is running on http://localhost:${port}`)
})