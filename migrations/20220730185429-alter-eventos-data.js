'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('eventos', 'data', {
      type: Sequelize.DATE,
      allowNull: true
    });
  },
 
  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('eventos', 'data');
  }
};