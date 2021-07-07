const songModel = require('../models/songModel');

const listAll = async () => {
  const songs = await songModel.findAll();

  return songs;
}

const create = async (name, album) => {

  const findedSong = await songModel.findByNameAlbum(name, album);
  // Verificação para ver se já existe no BD
  if(findedSong) return false;

  const newSong = songModel.createSong(name, album);
  
  return newSong;
}

module.exports = {
  create,
  listAll
}