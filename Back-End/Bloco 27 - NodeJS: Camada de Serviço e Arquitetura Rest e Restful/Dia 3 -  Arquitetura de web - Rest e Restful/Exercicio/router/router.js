const express = require('express');
const productController = require('../controllers/productController');

const route = express.Router();

route.use('/list-products', productController.getAllProducts);
route.use('/get-by-id/:id', productController.getByIdProducts);
route.post('/add-user', productController.addUser);
route.delete('/delete-user/:id', productController.deleteUser);
route.put('/update-user/:id', productController.updateUser);

module.exports = route;
