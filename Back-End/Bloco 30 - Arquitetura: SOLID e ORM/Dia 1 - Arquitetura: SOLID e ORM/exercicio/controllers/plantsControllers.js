const express = require('express');
const plantsModel = require('../models/plantsModel');
const route = express.Router();

route.get('/plants', async (_req, res) => {
  const getAllPlants = await plantsModel.getAll();
  return res.status(200).json({ getAllPlants })
});

route.get('/plants/:id', async (req, res) => {
  const { id } = req.params;
  const plant = await plantsModel.getById(id);
  return res.json({ plant })
});

route.delete("/plant/:id", (req, res) => {
  const { id } = req.params;
  const plant = plantsModule.removePlantById(id);
  return res.send(plant);
});

route.post("/plant/:id", (req, res) => {
  const { id } = req.params;
  const newPlant = req.body.plant;
  const plant = plantsModule.editPlant(id, newPlant);
  return res.send(plant);
});

route.post("/plant", (req, res) => {
  const newPlant = req.body.plant;
  const plant = plantsModule.createNewPlant(newPlant);
  res.send(plant);
});

module.exports = route;
