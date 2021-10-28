const express = require('express');
const bodyParser = require('body-parser');
const controller = require('./controllers/joke');
const PORT = 3000;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/ping', controller.ping);
app.get('/', controller.getAll);

app.listen(PORT, () => console.log(`Aplicação rodando na porta ${PORT}`));
