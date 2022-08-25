const db = require('./_database')

async function UpdateData(){
    await db.connect() 

    const queryParticipante = "UPDATE participante SET nome=$1 WHERE id=1"

    await db.query(queryParticipante, ['Carlos Augusto'])
    
    await db.query("DELETE FROM evento_participante WHERE evento_id=1 AND participante_id=1")

    await db.end()

    console.log("Dados Atualizados!");
  }
  
  UpdateData()