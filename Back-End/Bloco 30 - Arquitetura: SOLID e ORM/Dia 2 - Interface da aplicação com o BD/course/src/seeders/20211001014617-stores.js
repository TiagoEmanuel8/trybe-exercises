//3 - seeders é útil para popular de fato o BD
//cheguei aqui com o comando npx sequelize seed:generate --name stores
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    // 3.1 - esse método bulkInterface(1ºp, 2ºp) é para inserir vários dados
    // 1ºp é sempre o nome da tabela e o 2ºp são os dados a serem inseridos
   queryInterface.bulkInsert("Stores", [ 
    {
      name: "Magazine",
      description: "Loja que tem eletros."
    },
    {
      name: "Tem de tudo",
      description: "Pode vir que aqui tem tudo"
    }
   ])
  },

  down: async (queryInterface, Sequelize) => {

    // 3.2 - Query para deletar algo do BD
    queryInterface.bulkDelete("Stores", null, {});
  }
};

// 3.3 - para popular de fato o BD vou usar o comando npx sequelize db:seed:all
// 3.4 - para apagar os dados uso npx sequelize db:seed:undo:all