const express = require('express');
const bodyParse = require('body-parser');
const { pingController, findCepController } = require('./controllers/cepController');
const { checkCep } = require('./middlewares');

const app = express();
const PORT = 3000;
app.use(bodyParse.json());

app.get('/ping', pingController);
app.get('/cep/:cep', checkCep, findCepController);

app.listen(PORT, () => console.log(`Aplicação rodando na porta ${PORT}!`));
