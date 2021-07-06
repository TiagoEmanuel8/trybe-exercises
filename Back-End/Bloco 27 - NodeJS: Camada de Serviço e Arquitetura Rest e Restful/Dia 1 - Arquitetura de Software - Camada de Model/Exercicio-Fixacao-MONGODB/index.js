const express = require('express');
const app = express();
const port = 3000;
const Books = require('./models/Book');
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.get('/books', async(_req, res) => {
  const books = await Books.getAll();
  res.status(200).json(books);
});

app.get('/books/:id', async(req, res) => {
  const { id } = req.params;
  const findBook = await Book.getByAuthorId(id);
  if(!findBook) return res.status(404).json({ message: 'Not found'});
  res.status(200).json(findBook);
});

app.listen(port, () => console.log('Porta 3000, Ok!!!'));
