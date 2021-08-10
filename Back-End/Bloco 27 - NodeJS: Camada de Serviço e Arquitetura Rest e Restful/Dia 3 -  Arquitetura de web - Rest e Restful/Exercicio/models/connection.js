const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  user: 'tiago',
  password: 'BreakingBad123.',
  host: 'localhost',
  database: 'rest_exercicios'
});

module.exports = connection;