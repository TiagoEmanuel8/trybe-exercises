const connection = require('./connection');
const { ObjectId } = require('mongodb');

const create = (firstName, lastName, email, password) => {
  const createdUser = connection()
  .then((db) => db.collection('model_example').insertOne({ firstName, lastName, email, password }))
  .then(() => ({ firstName, lastName, email, password }));
  return createdUser
};

const getAll = () => {
  const readUsers = connection().then((db) =>
   db.collection('model_example').find().toArray());
   return readUsers;
};

const findOne = (id) => {
  if(!Object(id)) return null;
  const user = connection().then((db) =>
    db.collection('model_example').findOne({ _id: ObjectId(id) })
  );
  return user;
};

const editUser = async (id, firstName, lastName, email, password) => {
  if(!ObjectId.isValid(id)) return null;
  const edited = connection().then((db) =>
  db
    .collection('model_example')
    .updateOne(
      { _id: ObjectId(id) },
      { $set: { firstName, lastName, email, password } }
    )
    .then(() => ({ _id: id, firstName, lastName, email, password }))
  );
  return edited;
}

module.exports = { getAll, create, findOne, editUser };