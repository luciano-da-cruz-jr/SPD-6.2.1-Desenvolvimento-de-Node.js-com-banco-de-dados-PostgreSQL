const Sequelize = require('sequelize')
const models = require('./models')
const Op = Sequelize.Op

async function select(){

  //Regra 1 : Listar apenas eventos que irá acontecer em Abril

  const eventosComParticipantes = await models.evento.findAll({
    where: {
      data: {
        [Op.between]: [new Date("04 01 2023"), new Date("04 31 2023")],
      }
    },
  })
  eventosComParticipantes.forEach((eventos) => {
    console.log("Evento: ", eventos.nome)
  })
  console.log("\n");

  await models.sequelize.close()
}
select()
