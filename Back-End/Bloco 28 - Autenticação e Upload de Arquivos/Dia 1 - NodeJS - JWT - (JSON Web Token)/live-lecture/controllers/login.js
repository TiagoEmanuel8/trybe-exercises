const { findUserService } = require('../services/users');

const login = async (req, res) => {
  try {
    const { username = '', password = '' } = req.body;
    const result = await findUserService(username, password); // é um objeto com o token
    
    return res.status(200).json(result);
  } catch (e) {
    return res.status(500).json({ message: 'Erro interno', error: e });
  }
}

module.exports = { login };
