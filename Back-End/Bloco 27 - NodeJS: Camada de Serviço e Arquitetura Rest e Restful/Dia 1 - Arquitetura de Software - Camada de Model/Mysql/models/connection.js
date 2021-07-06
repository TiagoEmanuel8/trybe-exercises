//---------------Padrão MYSQL ----------------------
// 1 => Tudo começa pela config do MySql

// // 1.1 - destaco que a conexão com o mysql é assíncrona, por isso a promisse
// const mysql = require('mysql2/promise');

// // 1.2 => Config o BD => de acordo com meu user + senha
// const connection = mysql.createPool({
//   user: 'tiago',
//   password: 'BreakingBad123.',
//   host: 'localhost',
//   database: 'model_example'
// });

// // 1.3 => Exporto a função
// module.exports = connection;

//---------------------Padrão MONGODB---------------------- => npm i mongodb

// Sintaxe padrão com o MongoDb
const { MongoClient } = require('mongodb');

const MONGODB_URL = 'mongodb://127.0.0.27017';

const connection = () => {
  return MongoClient.connect(MONGODB_URL, {
    urlNewParser: true,
    useUnifiedTopology: true
  })
  .then((conn) => conn.db('model_example'))
  .catch((err) => {
    console.error(err);
    process.exit();
  });
}

module.exports = connection;
