const express = require('express');
const bodyParser = require('body-parser');
const route = require('./router/router');

const app = express();
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/products', route);

app.listen(3000, () => {
  console.log("App listening on port 3000!");
});