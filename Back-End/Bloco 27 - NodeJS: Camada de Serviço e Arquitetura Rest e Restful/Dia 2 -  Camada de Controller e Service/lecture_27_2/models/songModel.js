const connection = require('./connection');
const { ObjectId } = require('mongodb');

const findAll = () => {
  return connection().then((db) => db.collection('songs').find().toArray());
}

const findById = (id) => {
  if(!ObjectId.isValid(id)) return null

  return connection().then((db) => db.collection('songs').findOne({_id: ObjectId(id)}))
}

const findByNameAlbum = (name, album) => {
  return connection().then((db) => db.collection('songs').findOne({name, album}))
}

const createSong = async (name, album) => {
  const newSong = await connection().then((db) => 
    db.collection('songs').insertOne({name, album}));

  return {
    id: newSong.insertedId,
    name,
    album
  }
}

module.exports = { 
  findAll,
  findById,
  findByNameAlbum,
  createSong
}