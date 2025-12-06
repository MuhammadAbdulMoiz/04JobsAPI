const customErrors = require("./custom-api")
const { StatusCodes } = require('http-status-codes')

class NotFound extends Error {
    constructor(msg) {
        super(msg);
        this.statusCodes = StatusCodes.NOT_FOUND;
    }
}

module.exports = NotFound;