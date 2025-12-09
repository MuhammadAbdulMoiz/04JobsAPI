const User = require('../models/User')
const bycrypt = require('bcryptjs')
const bcrypt = require('bcryptjs/dist/bcrypt')
const { StatusCodes } = require('http-status-codes')

const register = async (req, res) => {
    const { name, email, password } = req.body

    const salt = await bcrypt.genSalt(10);
    const hashPass = await bcrypt.hash(password, salt);
    const tempUser = { name, email, password: hashPass}
    
    const user = await User.create({ ...tempUser })
    res.status(StatusCodes.CREATED).json({ user });
}

const login = async (req, res) => {
    res.send('authenticated user');
}

module.exports = {
    register,
    login
}