

const viewTurns = JSON.parse(localStorage.getItem("turnos-user")) || turnosUser; 
const messageTurns = document.querySelector('#turnsViews');



turnosUser.forEach(turn => {
  const listado = turn.nuevoTurno;
  
 
});





const showMessage = (msg) => {
    messageTurns.innerText = msg;
  };
if (turnosUser === 0) {
    showMessage("No existen turnos registrados");
}
else {
    showMessage(`Tu turno para ${nuevoTurno.especialidad} es para la fecha ${nuevoTurno.hora}. </br>
    Recorda que tu obra social es ${} y deberás traer el carnet correspondiente para autorización.`);
  }




