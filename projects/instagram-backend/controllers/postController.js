const { addPost, getPosts } = require('../services/postService');

const createPost = async (req, res) => {
    const post = req.body;
    try {
        const message = await addPost(post);
        res.send(message);
    } catch (error) {
        res.send(error.message);
    }
};

const getPost = async (req, res) => {
    try {
        const message = await getPosts();
        res.send(message);
    } catch (error) {
        res.send(error.message);
    }
}

module.exports = { createPost, getPost};