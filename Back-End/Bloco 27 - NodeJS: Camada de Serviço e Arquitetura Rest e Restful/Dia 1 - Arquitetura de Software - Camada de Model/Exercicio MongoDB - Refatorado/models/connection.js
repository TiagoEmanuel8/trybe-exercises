// Configurando a conexão com o mongodb
const { MongoClient } = require('mongodb');

const OPTIONS = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const MONGO_DB_URL = 'mongodb://localhost:27017/Exercicio-Fixacao-MONGODB';
let db = null;

const connection = async () => {
  return db
    ? Promise.resolve(db)
    : MongoClient.connect(MONGO_DB_URL, OPTIONS)
      .then((conn) => {
        db = conn.db('model_example');
        return db;
      });
};

module.exports = connection;