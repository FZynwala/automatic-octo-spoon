const jwt = require('jsonwebtoken');
const config = require('config');

function auth(req, res, next) {
    const token = req.header('x-auth-token');
    if(!token) return res.status(401).send('Access denied. No token provided.');

    try {
        const decodedPayload = jwt.verify(token, 'jwtPrivateKey');
        req.user = decodedPayload;
    } catch (ex) {
        res.status(400).send('Invalid token.');
    }
    
    next();
}

module.exports = auth;