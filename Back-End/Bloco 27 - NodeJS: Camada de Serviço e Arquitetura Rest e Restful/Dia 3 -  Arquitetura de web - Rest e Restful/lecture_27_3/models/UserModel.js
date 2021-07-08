const connection = require('./connection');

const create = async (name, age) => {
  const newUser = await connection().then((db) => db.collection('dbUsers').insertOne({ name, age }));
  return newUser.ops[0];
};

const listAll = async () => {
  const users = await connection().then((db) => db.collection('dbUsers').find());
  return users;
};

module.exports = {
  create,
  listAll,
};
