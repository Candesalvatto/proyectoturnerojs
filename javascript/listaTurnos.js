

const viewTurns = JSON.parse(localStorage.getItem("turnos-user")) || []; 
const messageTurns = document.querySelector('#turnsViews');



viewTurns.forEach(turn => {
  const content = `<p>Tu turno de ${turn.especialidad} ha sido reservado para ${turn.hora}. </br>
  Recorda que tu obra social es ${turn.obraSocial.toUpperCase()} y deberás traer el carnet correspondiente para autorización.</br>
  Tu comentario: ${turn.comentario}. </br></p>`
  messageTurns.innerHTML += content;
  
});





