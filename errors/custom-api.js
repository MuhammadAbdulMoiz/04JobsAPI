class customErrors extends Error {
    constructor(msg) {
        super(msg)
    }
}

module.exports = customErrors;