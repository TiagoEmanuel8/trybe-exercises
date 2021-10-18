// models/Employee.js
module.exports = (sequelize, DataTypes) => {
  const Employee = sequelize.define('Employee', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    age: DataTypes.INTEGER,
  },
  {
    timestamps: false, // remove a obrigatoriedade de utilizar os campos `createdAt` e `updatedAt`
    tableName: 'Employees',
    underscored: true,
  });

  // 3 - Essa chave employee_id é uma PK, dessa forma tenho que informar ao model, por essas sintaxe
  Employee.associate = (models) => {
    // hasOne é dizer para o model que só há uma PK, e o relacionamento fica 1:1
    // se tivesse mais de uma ia usar o hasMany e o relacionamento ia ser 1:N
    Employee.hasOne(models.Address,
      { foreignKey: 'employee_id', as: 'addresses' });
  };

  return Employee;
};
