const express = require('express')
const router = express.Router()

const { register, login } = require('../controllers/auth')

router.route('/').post(login);
router.route('/reg').post(register);

module.exports = router

