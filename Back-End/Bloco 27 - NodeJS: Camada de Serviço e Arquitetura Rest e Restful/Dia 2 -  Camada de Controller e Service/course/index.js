// // Caminho com o node

// const express = require('express');
// const bodyParser = require('body-parser');

// // // 4 => A comunicação do index.js ocorre com o services
// const Author = require('./services/Author');

// const app = express();

// app.use(bodyParser.json());

// app.get('/authors', async (_req, res) => {
//   const authors = await Author.getAll();

//   res.status(200).json(authors);
// });

// app.get('/authors/:id', async (req, res) => {
//   const { id } = req.params;

//   const author = await Author.findById(id);

//   if (!author) return res.status(404).json({ message: 'Not found' });

//   res.status(200).json(author);
// });

// app.post('/authors', async (req, res) => {
//   const { first_name, middle_name, last_name } = req.body;
//   // 4.4 => Aqui como tinha validação é só chamar a função da services e ser feliz
//   const author = await Author.create(first_name, middle_name, last_name);

//   if (!author) { return res.status(400).json({ message: 'Dados inválidos' }) }

//   app.listen(PORT, () => {
//     console.log(`Ouvindo a porta ${PORT}`);
//   });
// app.listen(PORT, () => {
//   console.log(`Ouvindo a porta ${PORT}`);
// });

// ---------------- Refatoradinha para usar o controller -------------------------

// Caminho com o node

const express = require('express');
const bodyParser = require('body-parser');

// 6 => A comunicação do index com o controler
const Author = require('./controllers/Author');

const app = express();

app.use(bodyParser.json());
// 6.1 => Que belezinha de refatorada
app.get('/authors', Author.getAll);

app.get('/authors/:id', Author.findById);

app.post('/authors', Author.create);

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
});

// o caminho da comunicação é Index => Controler => Service => Model