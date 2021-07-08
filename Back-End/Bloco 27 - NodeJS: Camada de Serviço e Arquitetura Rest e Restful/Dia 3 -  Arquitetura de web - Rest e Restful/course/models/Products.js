// simulando um BD local que NÃO existe
const products = require('../data/products.json');
// Função que retorna tudos os produtos
const getAll = () => {
  return products
}

module.exports = { getAll };