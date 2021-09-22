const services = require('../services');

const register = async (req, res) => {
  const { username, password } = req.body;
  const registerUser = await services.register({ username, password });
  return res.status(200).json(registerUser);
};

module.exports = register;
