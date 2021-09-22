const { isPasswordsEqual } = require('../encrypt/bcrypt');
const model = require('../models');

const checkPassword = async (req, res, next) => {
  const { username, password } = req.body;
  // essa variável vai trazer todos o usuário do login
  const user = await model.login(username);
  // é necessário comparar a senha informada no login com a senha do BD
  const isPasswordValid = await isPasswordsEqual(password, user.password);
  if (!isPasswordValid) {
    return res.status(401).json({ message: 'usuário e/ou senha inválido(s)' });
  }
  return next();
};

module.exports = checkPassword;
