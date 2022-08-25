'use strict';
 
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('evento', {
      data: {
        type: Sequelize.DATE,
        allowNull: false
      }
    })
  },
 
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('clientes');
  }
}