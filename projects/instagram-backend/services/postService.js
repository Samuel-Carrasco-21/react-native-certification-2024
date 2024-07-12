const db = require('../config/firebaseConfig');

const collectionName = 'posts';
const addPost = async (post) => {
    try {
        await db.collection(collectionName).add({...post});
        return `El post fue agregado correctamente!`;
    } catch (error) {
        console.error('Error adding document: ', error);
        throw new Error('Whoops! something went wrong!');
    }
};

module.exports = { addPost };