const jwt = require('jsonwebtoken');

// Middleware to Authenticate API calls from the client
const authenticateJWT = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if(!authHeader){
        // res.status(401).json({message: 'Invalid authentication.'})
        res.sendStatus(401)
        return
    }
    try {
        jwt.verify(authHeader, process.env.JWT_SECRET, (err) => {
            if(err){
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
    }
}

module.exports = authenticateJWT