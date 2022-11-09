
let viewTurns = JSON.parse(localStorage.getItem("turnos-user")) || [];
const user = JSON.parse(localStorage.getItem("user"));
const messageTurns = document.querySelector('#turnsViews');

 
const deleteTurn = (id) => {

  if (viewTurns.length === 1) {
    localStorage.removeItem('turnos-user');
    messageTurns.innerHTML = '';
  } else {
    const newArrayTurn = viewTurns.filter(turn => turn.id !== Number(id))
    viewUserTurn = newArrayTurn.filter(turns => turns.paciente.dni === user.dni);

    localStorage.setItem('turnos-user', JSON.stringify(newArrayTurn));
    messageTurns.innerHTML = '';
    viewTurns = JSON.parse(localStorage.getItem("turnos-user")) || [];
    printTurns();
    addEventInButtons();
  }

}

let viewUserTurn = viewTurns.filter(turns => turns.paciente.dni === user.dni);

const printTurns = () => {
  viewUserTurn.forEach(turn => {
    const content = `
      <div class="card-turno">
        <p class="card-turno__detail">Tu turno de ${turn.especialidad} ha sido reservado para ${turn.hora}. </br>
        Recorda que tu obra social es ${turn.obraSocial.toUpperCase()} y deberás traer el carnet correspondiente para autorización.</br>
        Tu comentario: ${turn.comentario}. </br></p>
      <div class="button-container">
        <button value="${turn.id}" class="card-turno__delete"> Eliminar </button>
      </div>
  
      </div>
    `
    messageTurns.innerHTML += content;

  });
}

const addEventInButtons = () => {
  const buttonsCancel = document.querySelectorAll(".card-turno__delete");

  buttonsCancel.forEach(button => {

    button.addEventListener('click', (e) => {
      deleteTurn(e.target.value)
    });

  })
}

window.addEventListener('load', () => {
  printTurns();
  addEventInButtons();
});