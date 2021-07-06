// 1 - Config básica do node
const express = require('express')
const bodyParser = require('body-parser')
const characterModel = require('./model/mongoModel');
const app = express()
const PORT = 3000
app.use(bodyParser.json())

// Read (Crud) - lista todos os personagens => união do model + node
// Função que vai mostrar tudão no BD
app.get('/characters', async (req, res) => {
  const characters = await characterModel.getAll();

  return res.status(200).json(characters)
});

// Read (Crud) - listar um unico personagem 'Node'
// Função que pega um id na rota e retorna aquele dado com o BD
app.get('/characters/:id', async (req, res) => {
  // Pega o Id que foi passado por url
  const {id} = req.params;
  // Retorna só o 1º dado
 const character = await characterModel.findOne(id); 
  
  return res.status(200).json(character)
});

// Create(Crud) mesclada com o Node
// Função que cria um novo dado no BD
app.post('/characters', async (req, res) => {
  // Vai pegar o que foi digitado no json durante a requisição
  const {name, cartoon} = req.body;
  // A partir disso vai passar esses valores pro BD
  const newCharacter = await characterModel.create(name, cartoon)

  return res.status(201).json(newCharacter);
});

// Update(Crud) mesclada com o Node
app.put('/characters/:id', async (req, res) => {
  // Captura fundamental para pegar os parametros pra fazer o update
  const {id} = req.params;
  const {name, cartoon} = req.body;

  const editedCharacter = await characterModel.edit(id, name, cartoon);
  
  return res.status(200).json(editedCharacter)
});

// Delete (Crud) mesclada com o Node
app.delete('/characters/:id', async (req, res) => {
  const {id} = req.params;

  await characterModel.exclude(id)

  return res.status(200).json({message: 'Success delete'})
});

// 1 - Config básica do node
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))