const { db } = require('../config/firebaseConfig');

const addUser = async (user) => {
    const { email } = user;
    try {
        await db.collection('users').add(user);
        return `El usuario con email ${email} fue agregado correctamente!`;
    } catch (error) {
        console.error('Error adding document: ', error);
        throw new Error('Whoops! something went wrong!');
    }
};

module.exports = { addUser };