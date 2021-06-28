const findIndexById = (array, id) => {
  const myIndex = array.findIndex((element) => element.id === id);

  return myIndex;
}

module.exports = findIndexById;
