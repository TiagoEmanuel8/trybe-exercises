const productModel = require('../models/Products');

const listAll = (req, res) => {
  // Esse try/catch é uma forma de tratar o erro
  // Junto com o try/catch os status são uma forma da aplicação ter o padrão REST
  try {
    const data = productModel.getAll()

    res.status(200).json(data)
  } catch(error) {

    res.status(500).json({ message: "Algo deu ruim ..."})
  }

};

module.exports = { listAll };