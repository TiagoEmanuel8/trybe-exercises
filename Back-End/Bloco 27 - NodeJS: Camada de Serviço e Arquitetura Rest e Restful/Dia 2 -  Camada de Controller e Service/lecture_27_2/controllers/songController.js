const SongModel = require('../models/songModel')
const SongService = require('../services/songServices')

const findAllSongs = async (_req, res, next) => {
  // Essa maravilha de try/catch 'bane' o rescue
  try{
    const songs = await SongService.listAll();

    return res.status(200).json(songs);}
  catch(err) {
    next(err)
  }
}

const findOneSong = async (req, res, _next) => {
  const {id} = req.params;
  const song = await SongModel.findById(id);
  console.log(song)

  return res.status(200).json(song);
}

const createSong = async (req, res, _next) => {
  // Capturar essas infos do corpo
  const {name, album} = req.body;

  const newSong = await SongService.create(name, album);

  if (!newSong) {
    return res.status(400).json({message: 'A musica ja esta cadastrada'});
  }

  return res.status(201).json(newSong)
  
}

module.exports = {
  findAllSongs,
  findOneSong,
  createSong
}