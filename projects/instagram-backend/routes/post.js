const express = require('express');
const { createPost, getPost } = require('../controllers/postController');
const router = express.Router();

router.post('/', createPost);
router.get('/', getPost)

module.exports = router;