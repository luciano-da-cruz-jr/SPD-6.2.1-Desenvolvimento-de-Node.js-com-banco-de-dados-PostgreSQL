const models = require('./models')

async function insert(){

  //Eventos
  const eventoJS = await models.evento.create({
    nome: 'Encontro de JS', 
    data: new Date(2023, 1, 19)
  })

  const eventoMySQL = await models.evento.create({
    nome: 'Encontro de MySQL', 
    data: new Date(2023, 2, 20)
  })

  const eventoJava = await models.evento.create({
    nome: 'Encontro de Java', 
    data: new Date(2023, 3, 21)
  }) 

  const eventoPython = await models.evento.create({
    nome: 'Encontro de Python', 
    data: new Date(2023, 4, 22)
  })

  const eventoMetaverso = await models.evento.create({
    nome: 'Encontro de Metaverso', 
    data: new Date(2023, 5, 23)
  })

  await models.sequelize.close()

  console.log("Dados Inseridos");
}
insert()
