const express = require('express');
const bodyParser = require('body-parser');
const { book } = require('./src/models');

const app = express();
app.use(bodyParser.json());

const PORT = 3000;

app.get('/ping', (_req, res) => res.status(200).json('pong'));

app.get('/books', async (_req, res) => {
  try {
    const books = await book.findAll();
    return res.status(200).json(books);
  } catch(e) {
    res.status(500).json({ message: 'Algo deu errado' });
  }
});

app.get('/book/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const getBook = await book.findByPk(id);
    return res.status(200).json(getBook);
  } catch(e) {
    res.status(500).json({ message: 'Algo deu errado' });
  }
});

app.post('/book', async (req, res) => {
  try {
    const { title, author, pageQuantity } = req.body;
    const createBook = await book.create({ title, author, pageQuantity });
    return res.status(200).json(createBook)
  } catch(e) {
    res.status(500).json({ message: 'Algo deu errado' });
  }
});

app.put('/book/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { title, author, pageQuantity } = req.body;
    const updatedBook = await book.update( { title,author,pageQuantity }, { where: {id} } );
    return res.status(200).json(updatedBook);
  } catch(e) {
    res.status(500).json({ message: 'Algo deu errado' });
  }
});

app.delete('/book/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deleteBook = await book.findByPk(id);
    await deleteBook.destroy();
    return res.status(200).json(deleteBook);
  } catch(e) {
    res.status(500).json({ message: 'Algo deu errado' });
  }
})

app.listen(PORT, () => console.log(`Aplicação rodando na porta ${PORT}`));
