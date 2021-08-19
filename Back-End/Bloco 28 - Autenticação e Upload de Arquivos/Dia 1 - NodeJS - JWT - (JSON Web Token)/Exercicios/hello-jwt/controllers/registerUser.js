const rescue = require('express-rescue');
const services = require('../services');

module.exports = rescue(async (req, res) => {
  const { username, password } = req.body;
  const register = await services.registerService(username, password);
  return res.status(200).json(register);
});
