const Sequelize = require('sequelize')
const models = require('./models')
const Op = Sequelize.Op

async function select(){

  //Regra 1 : Listar apenas eventos que tenham Nodejs no nome
  //Regra 2 : Dentro desse(s) evento(s), listar apenas pessoas que NÃO tenham a letra "o" no nome

  const eventosComParticipantes = await models.evento.findAll({
    where: {
      nome: {
        [Op.like]: '%Nodejs%'
      }
    },
    include: [
      {
        model: models.participante,
        where: {
          nome: {
              [Op.notLike]: '%o%'
          },
        }
      }
    ]
  })
  eventosComParticipantes.forEach((eventos) => {
    console.log("Evento: ", eventos.nome)
    eventos.participantes.forEach((participantes) => {
      console.log("----------> Participante: ", participantes.nome)
    })
  })
  console.log("\n");

  await models.sequelize.close()
}
select()
