const connection = require('./connection');

// raciocínio legal do plantão descompressão do zambeli
const register = async ({ username, password }) => connection()
  .then((db) => db.collection('user').insertOne({ username, password }))
  .then((result) => ({ id: result.insertedId, username, password }));

module.exports = register;
