'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('evento', 'data', {
      type: Sequelize.DATE,
      allowNull: true
    });
  },
 
  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('evento', 'data');
  }
};