const express = require('express');
const app = express();
const port = 3000;

const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.get('/hello', function (_req, res) {
  res.send('hello world') }
); 

app.listen(port, () => console.log('Porta 3000, Ok!!!'));
