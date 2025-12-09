const customErrors = require('./custom-api')
const { StatusCodes } = require('http-status-codes')

class UnAuthenticated extends customErrors {
    constructor(msg) {
        super(msg);
        this.statusCode = StatusCodes.UNAUTHORIZED;
    }
}

module.exports = UnAuthenticated;