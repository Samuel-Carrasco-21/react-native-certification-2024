const express = require('express');
const { greet, createUser } = require('../controllers/userController');
const router = express.Router();

router.get('/', greet);
router.post('/', createUser);

module.exports = router;