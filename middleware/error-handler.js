const { customErrors } = require('../errors/index')
const { StatusCodes } = require('http-status-codes')

const errorHandling = (err, req, res, next) => {
    if (err instanceof customErrors){
        return res.status(err.statusCodes).json({ msg: err.message });
    }
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ err });
}

module.exports = errorHandling;