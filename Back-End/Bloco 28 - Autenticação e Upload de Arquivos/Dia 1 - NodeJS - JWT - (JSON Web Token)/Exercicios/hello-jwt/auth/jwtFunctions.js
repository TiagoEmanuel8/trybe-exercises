const jwt = require('jsonwebtoken');
require('dotenv').config();

const secret = process.env.SECRET;

const create = (user) => {
  const payload = { ...user };
  const jwtConfig = { algorithm: 'HS256', expiresIn: '1 min' };
  const token = jwt.sign(payload, secret, jwtConfig);
  return token; 
};

// trecho do código antigo que fiz ... baseado na aula ao vivo da T9
// module.exports = async (username, password) => {
//   const register = await model.registerUserDb(username, password);
//   const { password: _, userWithoutPassword } = register;
//   const token = jwt.sign(userWithoutPassword, SECRET, jwtConfig);
//   return { username, token };
// };

const verify = (token) => {
  const payload = jwt.verify(token, secret);
  return payload;
};

module.exports = { create, verify };
