const express = require('express');
const app = express();
const PORT = 3000;
const bodyParser = require('body-parser');
const authorController = require('./Controller/authorController');

// 4 - config para o server enxergar a camada de view
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set('views', './views');

// exemplos no crud

app.get('/authors', authorController.listAuthors); // 1 - rota para listar autores

app.get('/authors/:id', authorController.showAuthor); // 5 - rota para listar autor

// 6 - chamo um form de cadastro e com os dados faço registro no BD
app.get('/authors/new', authorController.newAuthor); // 6.1 - rota do cadastro
app.post('/authors', authorController.createAuthor); // 6.3 - disparada pelo botão 'submit' do front

app.listen(PORT, () => console.log(`Aplicação rodando na porta ${PORT}`));
