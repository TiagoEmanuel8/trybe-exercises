// 3 => A camada M ocorre aqui

const express = require('express');
const app = express();
const port = 3001;

// 3.1 => Chamo a query do mysql
const Author = require('./models/Author');

// 3.2 => Criando a rota, lembrando que como usar o Mysql, sempre será assíncrona
// chamada => http://localhost:3000/authors
app.get('/authors', async(_req, res) => {
  const authors = await Author.getAll();

  res.status(200).json(authors);
});

app.get('/authors/:id', async (req, res) => {
  const { id } = req.params;

  const author = await Author.findById(id);

  if(!author) return res.status(404).json({ message: 'Not found'});

  res.status(200).json(author);
});

// 5 => Junção da rota + dados
app.post('/authors', async (req, res) => {
  const { first_name, middle_name, last_name } = req.body;

  if(!Author.isValid(first_name, middle_name, last_name)) return res.status(400).json({ message: "Dados Inválidos" });

  await Author.create(first_name, middle_name, last_name);

  res.status(201).json({ message: 'Autor criado com sucesso!' });
});

// chamada => http://localhost:3000/authors => no próprio Json

app.listen(port, () => console.log('Porta 3001 Ok!'));
