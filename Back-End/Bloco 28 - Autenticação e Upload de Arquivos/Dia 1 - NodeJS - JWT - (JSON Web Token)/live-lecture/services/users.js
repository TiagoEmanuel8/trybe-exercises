// 1 => é necessário importar a lib do jwt
const jwt = require('jsonwebtoken');
const { findUser, insertUser } = require('../models/users');
// 2 => armazenar uma senha
const SECRET = process.env.JWT_SECRET
// 3 => config do jwt
const jwtConfig = {
  expiresIn: '15m', // tempo para expirar o token,
  algorithm: 'HS256' // tipo de encriptação 
}

const findUserService = async (username, password) => {
  if (!username || !password) return (
    { status: 401, message: 'É necessário usuário e senha para fazer login' }
  );

  const userSearch = await findUser(username);

  if (!userSearch || userSearch.password !== password) return (
    { status: 401, message: 'Usuário não existe ou senha inválida' } // boa prática de sec. 
  );
    // 4.1 => objeto para retirar a senha do token do user - dica de datasec
  const { password: _, ...userWithoutPassword } = userSearch;
    // 4 => gerando o jwt, completão
  const token = jwt.sign(userWithoutPassword, SECRET, jwtConfig);
    // 5 => retornando o token
  return { token };
};

const createUserService = async (username, password) => {
  if (!username || !password) return (
    { status: 500, message: 'Erro ao salvar o usuário no banco' }
  );

  await insertUser(username, password);

  return ({ status: 201, message: 'Novo usuário cadastrado com sucesso!' });
};

module.exports = { findUserService, createUserService };
