const { getByCep } = require('../models/cepModel');
// const rescue = require('express-rescue');

const checkCep = async(req, res, next) => {
  const { cep } = req.params;
  console.log(cep);
  if(cep.length !== 5) return res.status(404).json({ message: "O cep deve conter 5 números"});

  const modelCep = await getByCep(cep);
  if(!modelCep) return res.status(404).json({ message: 'CEP não encontrado' });
  next();
};

module.exports = { checkCep };
