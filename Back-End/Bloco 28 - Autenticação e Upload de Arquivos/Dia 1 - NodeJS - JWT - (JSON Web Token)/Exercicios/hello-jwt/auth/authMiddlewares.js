const { verify } = require('./jwtFunctions');

const authBasic = (req, _res, next) => {
  const { authorization } = req.headers;
  const payload = verify(authorization);
  req.payload = payload; // essa forma aqui é pra capturar o nome de usuário e jogar em quem for usar esse middleware ... pq req é comum em ambos os ambientes
  return next();
};

module.exports = { authBasic };