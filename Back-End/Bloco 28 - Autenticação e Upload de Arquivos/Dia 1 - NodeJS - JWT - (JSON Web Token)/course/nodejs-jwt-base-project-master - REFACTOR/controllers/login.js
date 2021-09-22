// Tudo o que se refere a autenticação geralmente fica em 'services', mas pela dica do zambeli vou fazer um arquivo externo com apenas essa função
const User = require('../models/user');
const { create } = require('../auth/jwtFunctions');

// const jwt = require('jsonwebtoken');
// const secret = 'seusecretdetoken';
module.exports = async (req, res) => {
  try {
  const username = req.body.username;
  const password = req.body.password;

  if (!username || !password) return res.status(401).json({ message: 'É necessário usuário e senha para fazer login' });

  const user = await User.findUser(username);

  if (!user || user.password !== password) return res.status(401).json({ message: 'Usuário não existe ou senha inválida' });

  // const jwtConfig = {
  //   expiresIn: '7d',
  //   algorithm: 'HS256',
  // };
  // const token = jwt.sign({ data: user }, secret, jwtConfig);
  // O resto dos comentários serão substituidos apenas pelas funções
  // return res.status(200).json({ token });

  const token = create(user);
  res.status(201).json({ token });
  } catch (e) {
    return res.status(500).json({ message: 'Erro interno', error: e });
  }
};
