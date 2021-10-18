// 2 - criando a tabela de endereços baseado na imagem
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('Addresses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      city: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      street: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      number: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      employeeId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        //---------- aqui vou começar a referenciar -----
        onUpdate: 'CASCADE', // diz o q vai ocorrer ao atualizar
        onDelete: 'CASCADE', // diz o q vai ocorrer ao deletar
        field: 'employee_id', // diz o nome do campo
        references: { // aqui se referencia a FK
          model: 'Employees', // diz a tabela da PK
          key: 'id', // digo qual o campo PK
        },
      },
    });
  },

  down: async (queryInterface, _Sequelize) => {
    return queryInterface.dropTable('Addresses');
  },
};
