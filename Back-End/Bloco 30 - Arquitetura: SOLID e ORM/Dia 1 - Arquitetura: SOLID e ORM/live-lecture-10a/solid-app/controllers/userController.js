const userModel = require('../models/userModel');

const validateEmail = (password) => {
  const emailRegex = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
  return emailRegex.test(email);
}

const validatePassword = (password) => {
  const passwordRegex = /^\d+$/; /* Senha pode ter apenas números */
  
  return passwordRegex.test(password);
}

const validateRole = (role, validRoles) => {
  return validRoles.includes(role);
}

const validateParams = ({ email, password, role }, validRoles) => {
  return validateEmail(email) && validatePassword(password) && validateRole(role, validRoles);
}

exports.createUser = async (req, res) => {
  const { username, email, password, role } = req.body;

  if (validateParams({ email, password, role })) {
    await userModel.create({ username, email, password, role }, ['admin', 'user']);
    await userModel.createInDatabaseBackup({ username, email, password, role });
    res.status(200).json({
      message: 'Usuário criado com sucesso!',
    });
  } else {
    res.status(400).json({
      message: 'Dados inválidos.',
    });
  }
};
