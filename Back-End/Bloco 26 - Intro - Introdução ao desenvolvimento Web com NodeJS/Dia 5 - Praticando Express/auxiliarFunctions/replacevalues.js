const replaceValues = (array, index , newName, newIngredients) => {
  array[index].name = newName;
  array[index].ingredients = newIngredients;
};

module.exports = replaceValues;