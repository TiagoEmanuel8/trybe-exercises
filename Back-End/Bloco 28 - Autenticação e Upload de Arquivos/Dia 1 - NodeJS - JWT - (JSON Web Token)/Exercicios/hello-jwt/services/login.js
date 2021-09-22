const model = require('../models');
const { create } = require('../auth/jwtFunctions');

const loginUser = async (username) => {
  // 1 - user vai retornar username, password + id
  const user = await model.login(username);
  // 2 - a partir disso vai ser gerado um token com a lib JWT
  // obs: a senha já está embaralhada pelo BCRYPT
  const token = create(user);
  return token;
};

module.exports = loginUser;
