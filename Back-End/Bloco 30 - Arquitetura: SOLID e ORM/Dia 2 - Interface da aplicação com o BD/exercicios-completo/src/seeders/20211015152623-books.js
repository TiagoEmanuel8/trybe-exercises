'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    await queryInterface.bulkInsert('books', [
      {
        title: 'Senhor dos Aneis',
        author: 'J. R. R. Tolkien',
        pageQuantity: 1500,
      },
      {
        title: 'Código limpo ',
        author: 'Robert Cecil Martin',
        pageQuantity: 600,
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('books', null, {});
  }
};
