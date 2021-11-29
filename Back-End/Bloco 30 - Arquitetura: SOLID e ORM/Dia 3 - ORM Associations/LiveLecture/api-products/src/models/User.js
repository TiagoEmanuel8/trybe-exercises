module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  });

  User.associate = (models) => {
    User.hasMany(models.Product, { as: 'products', foreignKey: 'userId' });
    // as - referencia a tabela estrangeira
    // FK - referencia o nome da FK na tabela estrangeira
  }

  return User;
}