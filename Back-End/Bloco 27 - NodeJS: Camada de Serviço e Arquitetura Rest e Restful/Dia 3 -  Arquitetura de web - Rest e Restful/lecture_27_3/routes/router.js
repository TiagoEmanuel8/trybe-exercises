const express = require('express');
const UserController = require('../controllers/UserController');

const router = express.Router();
// 2 - imaginar o index que liga com o controller
router.use('/users', UserController);

module.exports = router;
