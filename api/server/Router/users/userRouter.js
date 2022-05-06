const express = require('express');
const User = require('./userModels');
const authenticateJWT = require('../auth/authenticateJWT');

const Router = express.Router();

// Get All Users
Router.get('/', authenticateJWT, (req, res) => {
    User.getUsers()
        .then(() => {
            res.sendStatus(200)
        })
})

// Add New User
Router.post('/')

module.exports = Router;