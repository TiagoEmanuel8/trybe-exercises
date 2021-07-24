const express = require('express');
const { test, userLogin, apiBtc, allPosts, post } = require('../controllers');
const { loginValidate, checkToken, checkPost} = require('../middlewares');

const route = express.Router();

route.get('/', test);
route.post('/login', loginValidate, userLogin);
route.get('/btc/price', checkToken, apiBtc);
route.get('/posts', allPosts);
route.get('/posts/:id', checkPost, post)

module.exports = route;
