'use strict';
/** Ref: https://sequelize.org/master/manual/model-basics.html */
// You can specify a custom column name via the 'field' attribute:
// fieldWithUnderscores: { type: DataTypes.STRING, field: 'field_with_underscores' },
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('matchs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      homeTeam: {
        type: Sequelize.INTEGER,
        field: 'home_team',
      },
      homeTeamGoals: {
        type: Sequelize.INTEGER,
        field: 'home_team_goals',
      },
      awayTeam: {
        type: Sequelize.INTEGER,
        field: 'away_team',
      },
      awayTeamGoals: {
        type: Sequelize.INTEGER,
        field: 'away_team_goals',
      },
      inProgress: {
        type: Sequelize.BOOLEAN, // transformando pra boolean, dica do Elithon para facilitar 
        field: 'in_progress',
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Matchs');
  }
};