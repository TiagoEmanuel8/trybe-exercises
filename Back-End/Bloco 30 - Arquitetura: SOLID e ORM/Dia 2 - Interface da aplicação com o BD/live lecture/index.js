require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

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

app.get('/ping', controllers.ping);

app.post('/products', controllers.products.createProduct);
app.get('/products', controllers.products.getAllProducts);
app.get('/products/:id', controllers.products.getProductById);
app.put('/products/:id', controllers.products.updateProduct);
app.delete('/products/:id', controllers.products.destroyProduct);

app.use(middlewares.error);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});


app.get('/recipes/search', rescue(function (req, res) {
  const { name, maxPrice } = req.body;
  const filteredRecipes = recipes.filter((r) => r.name.includes(name) && r.price < parseInt(maxPrice));
  res.status(200).json(filteredRecipes);
}));

