// Funções do MYSQL refatoradas para MONGODB

const connection = require('./mongoConnection');
const { ObjectId } = require('mongodb'); //Função que valida se um valor é válido ou não, pois o mongo iria quebrar a aplicação, em vez disso é só retornar um erro

const getAll = () => {
  // Seguir essa sintaxe para query MONGODB => connection().query.toArray()
  const characters = connection().then((db) => 
    db.collection('characters').find().toArray())

  return characters
}

const findOne = (id) => {

  if(!ObjectId(id)) return null; // Já fez verificação do id, sem quebrar a aplicação - no caso aqui é o caso de erro

  const characters = connection().then((db) => 
    db.collection('characters').findOne({ _id: ObjectId(id) }));

  return characters;
}

const create = (name, cartoon) => {
  const createdCharacter = connection()
  .then((db) => db.collection('characters').insertOne({ name, cartoon })) // Query do mongo
  .then((result) => result.ops[0]); // Só quero exibir o 1º resultado, de uma query gigantesca do mongo

  return createdCharacter
}

const edit = async (id, name, cartoon) => {
  if (!ObjectId.isValid(id)) return null;
  const edited = connection().then((db) =>
    db
      .collection('characters')
      .updateOne(
        { _id: ObjectId(id) }, // forma de chamar o id e verificar se está ok
        { $set: { name, cartoon } } // Aqui estou atualizando os dados no BD
      )
      .then(() => ({ _id: id, name, cartoon }))
  );

  return edited;
};

const exclude = async (id) => {
  const deleteData = connection().then((db) =>
  ObjectId.isValid(id)
    ? db.collection('characters').deleteOne({ _id: ObjectId(id) })
    : null
);
  return deleteData;
};

module.exports = {
    getAll, 
    findOne,
    create,
    exclude,
    edit
};
