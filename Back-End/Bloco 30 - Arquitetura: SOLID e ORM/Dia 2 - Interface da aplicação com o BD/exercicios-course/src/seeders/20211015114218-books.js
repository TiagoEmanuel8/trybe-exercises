'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    await queryInterface.bulkInsert('Books', [
      {
        title: 'O senhor dos aneis',
        author: 'J. R. R. Tolkien',
        pageQuantity: 1500
      },
      {
        title: 'Titanic',
        author: 'historiadores',
        pageQuantity: 2000,
      },
      {
        title: 'A história do mundo para quem tem pressa',
        author: 'Emma Marriott',
        pageQuantity: 500,
      } 
    ], {});
    
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.bulkDelete('Books', null, {});
  }

};
