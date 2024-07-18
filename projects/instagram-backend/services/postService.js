const { db }  = require('../config/firebaseConfig');

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

const getPosts = async () => {
    try {
        const posts = [];
        const querySnapshot = await db.collection(collectionName).get();
        console.log(querySnapshot);
        querySnapshot.forEach((doc) => {
            posts.push(doc.data());
        });
        return posts;
    } catch (error) {
        console.error('Error getting documents: ', error);
        throw new Error('Whoops! something went wrong!');
    }
}


module.exports = { addPost, getPosts };