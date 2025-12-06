const customErrors = require('./custom-api')
const { StatusCodes } = require('http-status-codes')

class BAD_REQUEST extends customErrors {
    constructor(msg){
        super(msg);
        this.statusCode = StatusCodes.BAD_REQUEST;
    }
}

module.exports = BAD_REQUEST;

