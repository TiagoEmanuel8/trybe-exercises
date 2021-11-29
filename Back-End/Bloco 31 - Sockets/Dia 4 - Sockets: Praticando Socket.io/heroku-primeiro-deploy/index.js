const express = require('express');

const app = express();

const port = process.env.PORT || 3000;
const server_env = process.env.SERVER_ENV || 'Não foi :/';


app.get('/', (req, res) => {
  res.send(`Você está no ambiente de ${server_env}`)
});

app.get('/ping', (req, res) => {
  res.send(`pong`)
});

app.listen(port,  () => console.log(`vamos fazer nosso primeiro deploy na porta ${port}`));

