require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const { PORT } = process.env;

const controllers = require('./controllers');
const middlewares = require('./middlewares');

const app = express();

// 0 - Esse middleware CORS vai dar direito de fazer requisições em locais 'locaishost' diferentes, tanto no front quanto no back

// 0 - O cors será usado dessa forma quando eu quiser editar as origin/methods ou allowerdHeaders
// app.use(cors({
//   origin: '*',
//   methods: ['GET', 'POST', 'PUT', 'DELETE'],
//   allowedHeaders: ['Authorization'],
// }));

// 0 - Usar essa forma para não se preocupar
app.use(cors()); // essa forma é para aceitar tudo

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/ping', controllers.ping);
// 2.3 - Exportando a rota
app.post('/pictures', controllers.pictures.uploadPicture);

app.use(middlewares.error);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
