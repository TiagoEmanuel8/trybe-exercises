const connection = require('./connection');

const registerUserDb = async (username, password) => {
  const db = await connection();
  const result = db.collection('users').insertOne({ username, password });
  return result;
};

module.exports = { registerUserDb };
