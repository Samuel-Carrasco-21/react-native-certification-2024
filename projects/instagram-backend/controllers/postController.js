const { addPost } = require('../services/postService');

const createPost = async (req, res) => {
    const post = req.body;
    try {
        const message = await addPost(post);
        res.send(message);
    } catch (error) {
        res.send(error.message);
    }
};

module.exports = { createPost };