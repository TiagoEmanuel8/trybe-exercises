const connection = require('./connection');

const schemas = require('./schemas');

const create = async ({ username, email, password, role }) => { 
  connection(schemas.main).execute(
      `INSERT INTO users (username, email, password, role) VALUES (?,?,?,?)`,
      [username, email, password, role]
    );
};


const createInDatabaseBackup = async ({ username, email, password, role }) => { 
  connection(schemas.backup).execute(
      `INSERT INTO users (username, email, password, role) VALUES (?,?,?,?)`,
      [username, email, password, role]
    );
};

module.exports = {
  create,
  createInDatabaseBackup
}
