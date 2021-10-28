const express = require('express');
const bodyParser = require('body-parser');
const controller = require('./controllers/joke');
const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/jokes', controller.getAll);

app.listen(PORT, () => console.log(`Aplicação rodando na porta ${PORT}`));
