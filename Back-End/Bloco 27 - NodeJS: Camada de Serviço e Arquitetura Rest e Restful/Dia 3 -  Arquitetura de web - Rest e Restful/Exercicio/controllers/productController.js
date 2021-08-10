const ProductModel = require('../models/productModel');

const getAllProducts = async(_req, res, _next) => {
  const products = await ProductModel.getAll();
  res.send(products);
};

const getByIdProducts = async (_req, res, _next) => {
  const product = await ProductModel.getById(req.params.id);
  res.send(product);
};

const addUser = async (req, res) => {
  const { name, brand } = req.body;
  const newProduct = await ProductModel.add(name, brand);
  res.send(newProduct);
};

const deleteUser = async(req, res) => {
    const products = await ProductModel.exclude(req.params.id);
    res.send(products);
  };

const updateUser = async (req, res) => {
    const { name, brand } = req.body;
    const products = await ProductModel.update(req.params.id, name, brand);
    res.send(products);
  };

module.exports = {
  getAllProducts,
  getByIdProducts,
  addUser,
  deleteUser,
  updateUser
};