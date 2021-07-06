const connection = require('./mongoConnection');
const { ObjectId } = require('mongodb');

const getAll = () => {
  const characters = connection().then((db) => 
    db.collection('characters').find().toArray())

  return characters
}

const findOne = (id) => {
  if(!ObjectId(id)) return null;

  const characters = connection().then((db) => 
    db.collection('characters').findOne({_id: ObjectId(id)}));

  return characters;
}

const create = (name, cartoon) => {
  const createdCharacter = connection()
  .then((db) => db.collection('characters').insertOne({ name, cartoon }))
  .then((result) => result.ops[0]);

  return createdCharacter
}

const edit = async (id, name, cartoon) => {
  if (!ObjectId.isValid(id)) return null;
  const edited = connection().then((db) =>
    db
      .collection('characters')
      .updateOne({ _id: ObjectId(id) }, { $set: { name, cartoon } })
      .then(() => ({ _id: id, name, cartoon }))
  );

  return edited;
};

const exclude = async (id) => {
  if (!ObjectId.isValid(id)) return null;

  return connection().then((db) =>
    ObjectId.isValid(id)
      ? db.collection('characters').deleteOne({ _id: ObjectId(id) })
      : null
  );
};

module.exports = {
    getAll, 
    findOne,
    create,
    exclude,
    edit

}