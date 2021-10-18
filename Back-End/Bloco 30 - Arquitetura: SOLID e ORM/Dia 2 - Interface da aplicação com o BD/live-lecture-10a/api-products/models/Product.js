// por padrão o sequelize:model generate não cria esse padrão
// mas o renatão refatorou

module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    name: DataTypes.STRING,
    description: DataTypes.STRING
  }, { 
    timestamps: false, 
    tableName: 'products' 
  });

  return Product;
}
