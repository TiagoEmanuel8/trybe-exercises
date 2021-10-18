'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    await queryInterface.bulkInsert('categories', [
      {name: 'Eletrodoméstico'}, 
      {name: 'Móvel'},
      {name: 'Celular'}
    ], {});
    
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.bulkDelete('categories', null, {});
  }
};
