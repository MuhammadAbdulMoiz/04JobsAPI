const register = async (req, res) => {
    res.send('register user');
}

const login = async (req, res) => {
    res.send('authenticated user');
}

module.exports = {
    register,
    login
}