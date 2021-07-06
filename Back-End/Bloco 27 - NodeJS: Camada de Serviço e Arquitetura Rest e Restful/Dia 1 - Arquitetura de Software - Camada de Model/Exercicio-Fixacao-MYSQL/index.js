const bodyParser = require('body-parser');
const Book = require('./models/author');
const express = require('express');
const app = express();
const port = 3000;

app.use(bodyParser.json());

const author = require('./models/author');
// chamada => http://localhost:3000/books
app.get('/books', async(_req, res)  => {
  const books = await author.getAll();
  res.status(200).json(books)
});

app.get('/books/:id', async (req, res) => {
  const { id } = req.params;
  const findBook = await Book.getByAuthorId(id);
  if(!findBook) return res.status(404).json({ "message": 'Not found' });
  res.status(200).json(findBook);
});

app.post('/books', async (req, res) => {
  const { title, author_id } = req.body;
  if(!Book.isValid(title, author_id)) return res.status(400).json({ message: "Dados Inválidos" });
  await Book.create(title, author_id);
  res.status(201).json({message: 'Autor criado com sucesso!'});
});

app.listen(port, () => console.log('Porta 3000, Ok!!!'));
