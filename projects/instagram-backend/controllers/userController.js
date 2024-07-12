const { addUser } = require('../services/userService');

const greet = (req, res) => {
    res.send('Hello World!');
};

const createUser = async (req, res) => {
    const user = req.body;
    try {
        const message = await addUser(user);
        res.send(message);
    } catch (error) {
        res.send(error.message);
    }
};

module.exports = { greet, createUser };