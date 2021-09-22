const connection = require('./connection');

const login = async (username) => {
  const db = await connection();
  const result = db.collection('user').findOne({ username });
  return result;
};

module.exports = login;
