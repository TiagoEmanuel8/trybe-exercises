const mysql = require('mysql2/promise');

const connection = (schema) => {
  console.log(schema);
  return mysql.createPool(schema);
} 

module.exports = connection;