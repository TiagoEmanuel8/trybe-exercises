const model = require('../models/joke');

const getAll = async (_req, res) => {
  const categories = await model.getJoke();
  // return res.status(200).json(jokes); /* chamada para o backend */
  return res.render('index', { categories });
};

module.exports = {
  getAll
};
