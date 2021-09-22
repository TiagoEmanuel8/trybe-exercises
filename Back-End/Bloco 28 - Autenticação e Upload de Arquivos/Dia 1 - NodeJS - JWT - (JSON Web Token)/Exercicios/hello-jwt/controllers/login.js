const services = require('../services');

const login = async (req, res) => {
  const { username, password } = req.body;
  const user = await services.login(username, password);
  return res.status(201).json({ user });
};

module.exports = login;