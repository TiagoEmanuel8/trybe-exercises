// Aqui configuro o endpoint
const express = require('express');

const app = express();

const PORT = 3000;

const usersController = require('./controllers/UsersController');

const productsController = require('./controllers/ProductsController');

app.use(express.json());

// Informar o verbo + rota faz parte do REST

app.get("/usuarios", usersController.listAll)

app.get("/produtos", productsController.listAll)

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))