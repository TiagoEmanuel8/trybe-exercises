// Conexão com o mongoDB => sempre irá ser copiar e colar
const mongodb = require('mongodb').MongoClient;

const MONGO_DB_URL = 'mongodb://localhost:27017/lecture_27_1';
const DB_NAME = 'cartoons';

module.exports = () =>
  mongodb.connect(MONGO_DB_URL,  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
    .then((connection) => connection.db(DB_NAME))
    .catch((err) => {
      console.error(err);
      process.exit(1);
    });