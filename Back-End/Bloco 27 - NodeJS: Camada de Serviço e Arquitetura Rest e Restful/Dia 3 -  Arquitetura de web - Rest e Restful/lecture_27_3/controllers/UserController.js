const express = require('express');
const UserService = require('../services/UserService');

const UserRouter = express.Router();

UserRouter.get('/users', async (req, res) => {
  const users = await UserService.listAll();

  return res.status(200).json(users);
});

UserRouter.post('/', async (req, res) => {
  try {
    const { name, age } = req.body;

    const newUser = await UserService.create(name, age);

    return res.status(201).json(newUser);
  } catch (err) {
    return res.status(400).json(err);
  }
});

UserRouter.get('/', () => {

});

module.exports = UserRouter;
