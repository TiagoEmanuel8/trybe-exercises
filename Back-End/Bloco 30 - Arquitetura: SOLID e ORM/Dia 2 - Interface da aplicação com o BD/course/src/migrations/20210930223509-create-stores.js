// Migrations é útil para criar tabelas dentro do BD relacional
// 2 - cheguei aqui com o comando => npx sequelize migration:generate --name create-stores
// nesse caso eu criei uma migration com o nome create-stores

'use strict';

module.exports = {
  // 2.1 - método para criar campo de tabelas
  up: async (queryInterface, Sequelize) => { // queryInterface é para interagir com o BD e o sequelize é para tipagem dos dados
    
    // 2.2 - sintaxe para criar dados numa tabela - com queryInterface
    const StoresTable = queryInterface.createTable('Stores', {

      // 2.3 - criando 3 campos para a tabela id / name / description
      id: {
        allowNull: false, //o campo tem preenchimento obrigatório - não pode ser nulo
        autoIncrement: true, // é do tipo auto-incremento
        primaryKey: true, // é chave primária
        type: Sequelize.INTEGER, // diz o tipo de dados do campo, no caso é nº
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      description: {
        allowNull: false,
        type: Sequelize.STRING,
      }
    });

    return StoresTable; // 2.3 - retornar a tabela criada
  },

  // 2.1 - método para excluir campo de tabelas
  down: async (queryInterface, Sequelize) => {
    queryInterface.dropTable('Stores'); // 2.4 - método para deletar a tabela
  }
};

// 2.5 - para efetivar e povoar o BD, executar o comando npx sequelize db:migrate
// 2.6 - para excluir os dados do BD executo o comando npx sequelize db:migrate:undo
