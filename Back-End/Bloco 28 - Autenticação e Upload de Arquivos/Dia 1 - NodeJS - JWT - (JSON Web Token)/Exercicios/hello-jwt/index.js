// fiz anotações do fluxo de cadastro, login e autenticação no arquivo ANOTAÇÕES.md

require('dotenv').config();
const rescue = require('express-rescue');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { authBasic } = require('./auth/authMiddlewares');

const { PORT } = process.env;

const controllers = require('./controllers');
const middlewares = require('./middlewares');

const app = express();

app.use(
  cors({
    origin: `http://localhost:${PORT}`,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Authorization'],
  }),
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/ping', rescue(controllers.ping));
app.post('/register', rescue(controllers.register));
app.post('/login', middlewares.checkPassword, rescue(controllers.login));

// a partir dessas 2 etapas eu poderia com o token JWT permitir o usuario criar, deletar, editar algo na minha api ... era só criar outras rotas a partir daqui
// app.put('/register', authBasic, middleware_de_auth);

app.use(middlewares.error);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
