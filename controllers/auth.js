const User = require('../models/User')
const { BadRequest, UnAuthenticated } = require('../errors/index')
const { StatusCodes } = require('http-status-codes')

const register = async (req, res) => {  
    const { email, password, name } = req.body
    if (!email || !password || !name){
        throw new BadRequest('Please provide name, email, and password');
    }
    const user = await User.create({ ...req.body })
    res.status(StatusCodes.CREATED).json({user: {name: user.getName(), token: user.createJWT()}});
}

const login = async (req, res) => {
    const { email, password } = req.body
    if (!email || !password){
        throw new BadRequest('Please provide email/password');
    }
    const user = await User.findOne({ email })
    if (!user){
        throw new UnAuthenticated('Invald Credentials');
    }
    const correctPass = await user.comparePass(password)
    if (!correctPass) {
        throw new UnAuthenticated('Invald Credentials');
    }
    res.json({user: {name: user.getName(), token: user.createJWT()}});
}

module.exports = {
    register,
    login
}