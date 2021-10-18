const express = require('express')
const bodyParser = require('body-parser');

const app = express()
app.use(bodyParser.json());

const port = 3000

const { Category, Product } = require('./models'); // FORMA PADRÃO DE IMPORTAR DADOS

app.get('/categories', async (req, res) => {
  const categories = await Category.findAll();
  res.status(200).json(categories);
});

app.get('/products', async (req, res) => {
  const products = await Product.findAll();
  res.status(200).json(products);
});

// app.get('/categories/:id', async (req, res) => {
//   const category = await Category.findByPk(req.params.id);
//   res.status(200).json(category);
// });

// app.post('/categories', async (req, res) => {
//   const { name } = req.body;
//   const category = await Category.create({ name });
//   res.status(200).json(category);
// });


app.listen(port, () => console.log(`Example app listening on port port!`))