const express = require('express');
const bodyParser = require('body-parser');
const rescue = require('express-rescue');

const { getAll, create, findOne, editUser } = require('./models/userModel');
const { checkNewUser } = require('./middlewares');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.get('/', (_req, res) => {
  return res.status(200).json({ message: "Servidor Funcionando"})
});

app.post('/user', checkNewUser, rescue(async(req, res) => {
  const { firstName, lastName, email, password } = req.body;
  const newUser = await create(firstName, lastName, email, password);
  return res.status(201).json(newUser);
}));

app.get('/user', async (_req, res) => {
  const user = await getAll();
  return res.status(200).json(user)
});

app.get('/user/:id', async (req, res) => {
  const { id } = req.params;
  const findUser = await findOne(id);
  return res.status(200).json(findUser);
});

app.put('/user/:id', checkNewUser, async (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, email, password } = req.body;
  const edit = await editUser(id, firstName, lastName, email, password);
  return res.status(200).json(edit);
});


app.listen(PORT, () => console.log(`Aplicação funcionando com sucesso ${PORT}!`));
