const { getByCep } = require('../models/cepModel');
// const rescue = require('express-rescue');

const findCepService = async(cep) => {
  const findCep = await getByCep(cep);
  return findCep;
};

module.exports = { findCepService };
