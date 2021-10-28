const model = require('../models/joke');

const ping = (_req, res) => {
  return res.status(200).json('pong');
};

const getAll = async (_req, res) => {
  try {
  const jokes = await model.getJoke();
  // console.log(jokes);
  // return res.status(200).json(jokes); // chamada para o backend
  return res.render('getAll', { jokes });
  } catch (e) {
    console.log(err);
    res.status(500).render('geralError');
  }
};

module.exports = {
  ping,
  getAll
};
