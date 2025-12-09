const User = require('../models/User')
const bycrypt = require('bcryptjs')
const bcrypt = require('bcryptjs/dist/bcrypt')
const { StatusCodes } = require('http-status-codes')

const register = async (req, res) => {
    const user = await User.create({ ...req.body })
    res.status(StatusCodes.CREATED).json({ user });
}

const login = async (req, res) => {
    res.send('authenticated user');
}

module.exports = {
    register,
    login
}