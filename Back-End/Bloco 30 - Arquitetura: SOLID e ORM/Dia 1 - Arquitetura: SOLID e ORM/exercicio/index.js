const express = require('express');
const bodyParser = require('body-parser');
const plantsController = require('./controllers/plantsControllers');

const PORT = 3000;
const app = express();
app.use(bodyParser.json());

app.get('/', plantsController);

app.listen(PORT, () => console.log(`app rodando na porta ${PORT}`));
