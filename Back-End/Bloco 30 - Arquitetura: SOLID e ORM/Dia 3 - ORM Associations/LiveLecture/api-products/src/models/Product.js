module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    name: DataTypes.STRING,
    description: DataTypes.STRING
  });
  // 2 - Aqui faço a referência a FK
 Product.associate = (models) => {
   Product.belongsTo(models.User, { as: 'user', foreignKey: 'userId' })
 }

  return Product;
}
