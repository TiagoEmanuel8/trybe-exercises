// gravar os dados no BD, por questão de segurança vou embaralhar a senha
const model = require('../models');
const encrypt = require('../encrypt/bcrypt');

const register = async ({ username, password }) => { 
  // 1 - encriptando a senha
  const passwordHash = await encrypt.createHashPassword(password);
  // 2 - passo a senha totalmente embaralhada pro BD
  const registerUser = await model.register({ username, password: passwordHash });
  
  return registerUser;
};

module.exports = register;
