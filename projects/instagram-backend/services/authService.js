const { authInstance } = require('../config/firebaseConfig');

const loginUser = async (user) => {
    const { email, password } = user;
    try {
        const user = await authInstance.getUserByEmail(email);
        // add password validation here
        return user;
    } catch (error) {
        console.error('Error adding document: ', error);
        throw new Error('Whoops! something went wrong!');
    }
}

const signupUser = async (user) => {
    const { email, password } = user;
    try {
        const userFound = await authInstance.getUserByEmail(email);
        if(userFound) {
            throw new Error('User already exists');
        }
        const user = await authInstance.createUser({email, password});
        return user;
    } catch (error) {
        console.error('Error adding document: ', error);
        throw new Error('User already exists');
    }
}

module.exports.loginUser = loginUser ;
module.exports.signupUser = signupUser ;