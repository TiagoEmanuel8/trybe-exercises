const UserModel = require('../models/UserModel');

const listAll = () => UserModel.listAll();

const create = async (name, age) => {
  if (age < 18) return { message: 'Age must be 18' };
  if (!name) return { message: 'name is required' };

  const newUser = await UserModel.create(name, age);

  return newUser;
};

module.exports = {
  create,
  listAll,
};
