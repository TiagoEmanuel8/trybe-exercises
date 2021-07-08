const express = require('express');
const bodyParser = require('body-parser');
const router = require('./routes/router');

const app = express();
// Essa maluquice vai ser explicada melhor no B29
const port = process.env.PORT || 3001;

app.use(bodyParser.json());

app.get('/', (req, res) => res.send('Hello World!'));
// 1 - Conecta com a pasta routes
app.use(router);

app.listen(port);
