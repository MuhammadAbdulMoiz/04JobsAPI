const customErrors = require('./custom-api')
const { StatusCode } = require('http-status-codes')

class UnAuthenticated extends customErrors {
    constructor(msg) {
        super(msg);
        this.statusCode = StatusCode.UnAuthenticated;
    }
}

module.exports = UnAuthenticated;