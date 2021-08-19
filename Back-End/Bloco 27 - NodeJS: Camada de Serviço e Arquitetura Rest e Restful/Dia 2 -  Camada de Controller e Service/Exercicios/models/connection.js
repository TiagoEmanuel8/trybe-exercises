const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  user: 'tiago',
  password: 'BreakingBad123.',
  host: 'localhost',
  database: 'cep_lookup'
});

module.exports = connection;
