const not_found = (req, res) => { return res.status(400).send('Route does not exist') }

module.exports = not_found;