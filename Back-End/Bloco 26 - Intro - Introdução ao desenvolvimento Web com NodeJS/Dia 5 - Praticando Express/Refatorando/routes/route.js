const express = require('express');
const { test, userLogin, apiBtc, allPosts, post, operations, recipesQuery } = require('../controllers');
const { loginValidate, checkToken, checkPost, checkoperation, checkRecipe } = require('../middlewares');

const route = express.Router();

route.get('/', test);
route.post('/login', loginValidate, userLogin);
route.get('/btc/price', checkToken, apiBtc);
route.get('/posts', allPosts);
route.get('/posts/:id', checkPost, post);
route.get('/:operacao/:numero1/:numero2', checkoperation, operations);
route.delete('/recipe/:id', checkRecipe, recipesQuery);

module.exports = route;
