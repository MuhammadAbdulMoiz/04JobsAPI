const User = require('../models/User')
const jwt = require('jsonwebtoken')
const { StatusCodes } = require('http-status-codes')

const register = async (req, res) => {  
    const user = await User.create({ ...req.body })
    const claims = {
        sub: user._id, 
        uname: user.name,
        mail: user.email,
        role: 'user'
    }
    const key = process.env.SECRET;
    const life = process.env.JWT_LIFE
    const options = {
        expiresIn: life,
        issuer: 'api-v1'
    }
    const token = jwt.sign(claims, key, options);
    res.status(StatusCodes.CREATED).json({ user: { name: user.getName() }, token });
}

const login = async (req, res) => {
    const { name, email } = req.body
    const claims = {
        name: name,
        email: email
    }
    res.send('authenticated user');
}

module.exports = {
    register,
    login
}