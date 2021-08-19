/* eslint-disable no-unused-vars */
const jwt = require('jsonwebtoken');
const model = require('../models/user');

const SECRET = 'senhamuitolonga';

const jwtConfig = {
  expiresIn: '60m',
  algorithm: 'HS256',
};

module.exports = async (username, password) => {
  const register = await model.registerUserDb(username, password);

  const { password: _, userWithoutPassword } = register;

  const token = jwt.sign(userWithoutPassword, SECRET, jwtConfig);

  return { username, token };
};
