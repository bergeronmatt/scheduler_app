const express = require('express');
const cors = require('cors')

const app = express();

app.use(cors())
app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).json({message: 'This is the api'});
})

const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log(`The app is running on http://localhost:${port}`)
})