const { loginUser, signupUser}  = require('../services/authService');

const login = async (req, res) => {
    const user = req.body;
    try {
        const message = await loginUser(user);
        res.send(message);
    } catch (error) {
        res.send(error.message);
    }
}

const signup = async (req, res) => {
    const user = req.body;
    try {
        const message = await signupUser(user);
        res.send(message);
    } catch (error) {
        res.send(error.message);
    }
}

module.exports = { login, signup};