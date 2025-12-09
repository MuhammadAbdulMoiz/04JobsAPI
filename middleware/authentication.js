const User = require('../models/User')
require('dotenv').config()
const jwt = require('jsonwebtoken')

const { UnAuthenticated } = require('../errors')

const auth = (req, res, next) => {
    const authHeader = req.headers.authorization
    if(!authHeader || !authHeader.startsWith('Bearer')){
        throw new UnAuthenticated('Authentication Invalid')
    }
    const key = process.env.SECRET
    const token = authHeader.split(' ')[1]
    try{
        const payload = jwt.verify(token, key)
        req.user = {userId:payload.sub, name:payload.uname}
        next()
    }
    catch (error) { 
        throw new UnAuthenticated('Not authorized to access this route');
    }
}

module.exports = auth