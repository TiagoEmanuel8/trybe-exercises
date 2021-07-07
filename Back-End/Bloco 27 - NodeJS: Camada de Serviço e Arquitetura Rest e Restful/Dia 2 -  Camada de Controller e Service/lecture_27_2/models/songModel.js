const connection = require('./connection');
const { ObjectId } = require('mongodb');

const findAll = () => {
  return connection().then((db) => db.collection('songs').find().toArray());
}

const findById = (id) => {
  // Sintaxe padrão para validar um Id
  if(!ObjectId.isValid(id)) return null

  return connection().then((db) => db.collection('songs').findOne({_id: ObjectId(id)}))
}

const findByNameAlbum = (name, album) => {
  return connection().then((db) => db.collection('songs').findOne({name, album}))
}

// Muita atenção para essa sintaxe de mistura de async com then
const createSong = async (name, album) => {
  const newSong = await connection().then((db) => 
    db.collection('songs').insertOne({name, album}));
  // Sintaxe necessária para retornar APENAS o que digitei
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