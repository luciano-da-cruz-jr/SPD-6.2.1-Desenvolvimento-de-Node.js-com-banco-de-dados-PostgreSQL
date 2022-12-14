const Sequelize = require('sequelize')
const sequelize = require('../_database')


const Evento = sequelize.define('evento', {
  nome: {
    type: Sequelize.STRING
  },
  data: {
    type: Sequelize.DATE,
    allowNull: false
  }
})
module.exports = Evento

const Participante = require('./participante')
Evento.belongsToMany(Participante, {through: 'evento_participante'});
