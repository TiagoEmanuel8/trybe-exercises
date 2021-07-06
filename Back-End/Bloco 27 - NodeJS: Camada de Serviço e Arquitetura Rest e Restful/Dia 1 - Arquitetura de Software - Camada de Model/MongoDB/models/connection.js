const { mongoClient } = require('mongodb');

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
