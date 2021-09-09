const User = require('../models/User');
const { getUserService } = require('../services/User');

const createUser = (userService) => async (req, res) => {
  const { username, email, password, role } = req.body;

  const user = await userService.createUser({
    username,
    email,
    password,
    role,
  });

  if (!user.ok) {
    return next(user.error);
  }

  res.status(200).json({
    message: 'Usuário criado com sucesso!',
    user: user.result,
  });
};

module.exports = {
  createUser,
};
