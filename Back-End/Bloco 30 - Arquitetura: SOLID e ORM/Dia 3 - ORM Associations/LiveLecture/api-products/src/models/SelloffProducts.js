const SelloffProducts = (sequelize, DataTypes) => {
  const SelloffProducts = sequelize.define(
    'SelloffProducts',
    {},
    { timestamps: false }
  );

  SelloffProducts.associate = (models) => {

    models.Product.belongsToMany(models.Selloff, { //Selloff é a tabela com que produtos se relaciona indiretamente
      as: 'selloffs', // nome da coluna para fazer a exibição
      through: SelloffProducts, // aponta para a const da linha1
      foreignKey: 'productId', // FK aponta para a model de fora
      otherKey: 'selloffId', // OK aponta para a model de dentro
    });

    models.Selloff.belongsToMany(models.Product, {
      as: 'products',
      through: SelloffProducts,
      foreignKey: 'selloffId',
      otherKey: 'productId',
    });
  };

  return SelloffProducts;
};

module.exports = SelloffProducts;
