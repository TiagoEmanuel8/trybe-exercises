require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');

const { getPosts } = require('./controllers/posts');
const { createUser } = require('./controllers/users');
const { login } = require('./controllers/login');
// 6 conexão para criar um produto
const { createProduct } = require('./controllers/products');
// 6.2 é só importar a validação 
const { validateToken } = require('./middlewares/validateToken')

const app = express();

app.use(bodyParser.json());

app.get('/api/posts', getPosts);
app.post('/api/users', createUser);
app.post('/api/login', login);
// 6 conexão para criar um produto
// 6.2 => para criar o produto, deve passar pelo token válido
app.post('/api/products', validateToken, createProduct);

const PORT = 3000;

app.listen(PORT, () => console.log(`Conectado na porta ${PORT}`));
