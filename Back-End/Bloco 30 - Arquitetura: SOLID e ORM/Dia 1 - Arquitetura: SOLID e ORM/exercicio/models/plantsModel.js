const defaultPlants = require('./database');

const getAll = () => {
  return defaultPlants;
};

const getById = (id) => {
  const findPlant = defaultPlants.find((el) => el.id === id);
  return findPlant;
};

const removePlantById = (id) => {
  defaultPlants = defaultPlants.filter((plant) => plant.id !== id);
};

const editPlant = (plantId, newPlant) => {
  return defaultPlants.map((plant) => {
    if (plant.id == plantId) { return newPlant };
    return plant;
  });
}

const createNewPlant = (plant) => {
  createdPlants++;
  const mappedPlant = initPlant(createdPlants, { ...plant });
  defaultPlants.push(mappedPlant);
  return mappedPlant;
};

module.exports = {
  getAll,
  getById,
  removePlantById,
  editPlant,
  createNewPlant
};
