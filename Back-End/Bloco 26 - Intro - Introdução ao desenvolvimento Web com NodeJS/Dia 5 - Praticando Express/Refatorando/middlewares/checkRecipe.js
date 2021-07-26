const { recipes } = require('../models/recipes')

const checkRecipe = (req, res, next) => {
  const myId = parseInt(req.params.id);
  const findId = recipes.find(({ id }) => id !== myId)
  if(!findId) {
    return res.status(404).json({ message: "id not found" });
  };
  next();
};

module.exports = checkRecipe;
