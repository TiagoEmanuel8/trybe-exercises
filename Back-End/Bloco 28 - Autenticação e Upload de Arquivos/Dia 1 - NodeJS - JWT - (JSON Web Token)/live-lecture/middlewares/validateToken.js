// 6.1 => simula um tratamento
const jwt = require('jsonwebtoken');
const { findUser } = require('../models/users');

const SECRET = process.env.JWT_SECRET;

const validateToken = async (req, res, next) => {
  const token = req.headers.authorization; // captura o token da url

  if (!token) { // verificação pra ver se o token existe
    return res.status(401).json({ message: 'missing auth token' });
  }
  // caso o token venha
  try {
    const payload = jwt.verify(token, SECRET); // armazena para ver se o jwt é válido

    const user = await findUser(payload.username); // por sec vou jogar a pessoa no BD

    if (!user) { // E se não achar a pessoa vai jogar um erro
      return res.status(401).json({ message: 'invalid user' });
    }
    // se deu certo
    const { password, ...userWithoutPassword } = user; // removo a senha, questao de infosec (pra que deixar a senha trafegando pela aplicação se ela existe chance dela vazar)

    req.user = userWithoutPassword; // só tem o user, mas sem a senha,

    next();
  } catch (err) { // no erro vai vir uma mensagem de erro
    return res.status(401).json({ message: err.message });
  }
};

module.exports = { validateToken };
