const bcrypt = require('bcrypt');

const saltRounds = 10;

const createHashPassword = async (password) => {
  const result = await bcrypt.hash(password, saltRounds);
  return result;
};

const isPasswordsEqual = async (password, hashPassword) => {
  const result = await bcrypt.compare(password, hashPassword);
  return result;
};

module.exports = { createHashPassword, isPasswordsEqual };
