// 3 - criando a tabela patients
"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const PatientsTable = queryInterface.createTable("Patients", {
      patient_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      fullname: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      // como esse campo é uma FK vou fazer a devida referencia
      plan_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Plans', // nome da tabela que veio
          key: 'plan_id', // chave de onde veio
        },
        onDelete: 'CASCADE',
      },
    });

    return PatientsTable;
  },

  down: async (queryInterface) => queryInterface.dropTable("Patients"),
};
