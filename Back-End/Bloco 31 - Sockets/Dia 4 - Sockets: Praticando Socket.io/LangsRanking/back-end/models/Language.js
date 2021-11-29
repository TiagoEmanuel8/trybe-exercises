const connection = require('./connection');
const { ObjectID } = require("mongodb");

const getAll = async () => {
  const db = await connection();
  const languages = await db.collection('languages').find({}).toArray();
  return languages;
};

const getById = async (id) => {
  const db =  await connection();
  const language = db.collection('languages').findOne({ _id: ObjectID(id) });
  return language;
};

const increaseVotes = async (id) => {
  const db =  await connection();
  db.collection('languages').updateOne(
    { _id : ObjectID(id) },
    { $inc: { votes: 1 } }
  );
}

module.exports = {
  getAll,
  getById,
  increaseVotes,
}
