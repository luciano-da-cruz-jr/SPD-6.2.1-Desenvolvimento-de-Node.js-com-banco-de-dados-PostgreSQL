const models = require('./models')

async function select(){
  console.log("\n");
  
  //Eventos
  const eventos = await models.evento.findAll()
  eventos.forEach((eventos) => {
    console.log("Evento: ", eventos.nome)
  })
  
  
  console.log("\n");

  //Participantes
  const participantes  = await models.participante.findAll()
  participantes.forEach((participantes) => {
    console.log("Participante: ", participantes.nome)
  })
  console.log("\n");

  

  //Participantes em eventos
  const eventosComParticipantes = await models.evento.findAll({
    include: [
      {
        model: models.participante
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
