const { findCepService } = require('../services/cepService');
const rescue = require('express-rescue');

const pingController = (_req, res) => {
  return res.status(200).json({ message: "pong!"});
};

const findCepController = rescue(async (req, res) => {
  const { cep } = req.params;
  const searchCep = await findCepService(cep);
  return res.status(200).json(searchCep);
});

module.exports = { pingController, findCepController };
