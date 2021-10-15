'use strict';

module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Book', {
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    pageQuantity: DataTypes.INTEGER
  }, { 
    timestamps: false,
    tableName: 'Books'
  });

  return Product;
};
