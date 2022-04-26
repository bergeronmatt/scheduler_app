const db = require('../../../data/config')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

function authUser(email, password, userEmail, userPass) {
    try {
        if(email !== userEmail) {
            console.log('Error, emails do not match records.')
            return;
        } else if (!bcrypt.compareSync(password, userPass)) {
            console.log('Error, incorrect password')
            return;
        }
    } catch (err) {
        console.log('Error authenticating user')
    }
    console.log('User Authenticated');
}

function getUser(email) {
    let user = db('user').where('email', email).first()
    return user
} 

function validateUser(req, res, next) {
    if(req.headers.authorization === undefined) {
        res.status(401).json({message: "Unauthorized"})
    } else {
        try {
            if(!jwt.verify(req.headers.authorization, process.env.JWT_SECRET)) {
                res.status(401).json({message: 'Unauthorized Authentication Token'})
                return
            }
        } catch (err) {
            console.log('Error authenticating token: ', err)
        }
    }
    next()
}

// create unique id
const generateId = () => {
    let id = Math.random().toString(36).substring(2,9)
    return id
}

// create auth token
function generateToken(user) {

    let id = generateId();
    let userId = user.id;

    // generate randomized id for the auth token
    const payload = {
        subject: id,
        userId: userId
    };

    // set expiration options to expire within a week
    const options = {
        expiresIn: 7 * 24 * 60 * 60 * 1000,
        issuer: "ComResource"
    }

    // return the token
    return jwt.sign(payload, process.env.JWT_SECRET, options)
}

module.exports = {
    authUser,
    validateUser,
    generateToken,
    getUser
}