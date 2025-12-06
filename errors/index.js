const customErrors = require('./custom-api')
const NotFound = require('./not-found')
const BadRequest = require('./bad-request')
const UnAuthenticated = require('./unauthenticated')

module.exports = {
    customErrors,
    NotFound,
    BadRequest,
    UnAuthenticated
}
