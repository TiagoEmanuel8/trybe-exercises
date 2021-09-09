const connection = require('./connection');

const create = async (username, email, password, role) =>
  connection.execute(
    'INSERT INTO solid_example.users (username, email, password, role) VALUES (?,?,?,?)',
    [username, email, password, role]
  );

module.exports = {
  create,
};
