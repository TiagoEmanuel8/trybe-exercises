// Local ideal para concentrar as requisições
const jwt = require('jsonwebtoken');
require('dotenv').config();

const secret = process.env.SECRET;

const create = (user) => {
  const payload = { ...user };
  const jwtConfig = { algorithm: 'HS256', expiresIn: '10 min'};
  const token = jwt.sign(payload, secret, jwtConfig);
  return token;
};

const verify = (token) => {
  const payload = jwt.verify(token, secret);
  return payload;
};

module.exports = { create, verify };
