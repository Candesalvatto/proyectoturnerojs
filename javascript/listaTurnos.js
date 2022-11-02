// varibles
let viewTurns = JSON.parse(localStorage.getItem("turnos-user")) || []; 
const user = JSON.parse(localStorage.getItem("user"));
let viewUserTurn = viewTurns.filter( turns => turns.paciente.dni === user.dni);
const messageTurns = document.querySelector('#turnsViews');


//funciones 
const deleteTurn = (id) => {

  const newArrayTurn = viewTurns.filter( turn => turn.id !== Number(id) ) 
  viewUserTurn = newArrayTurn.filter( turns => turns.paciente.dni === user.dni);
  localStorage.setItem('turnos-user', JSON.stringify(newArrayTurn));
  messageTurns.innerHTML ='';
  printTurns();
  addEventInButtons();

}

const printTurns = () => {
  viewUserTurn.forEach(turn => {
    const content = `
      <div class="card-turno">
        <p class="card-turno__detail">Tu turno de ${turn.especialidad} ha sido reservado para ${turn.hora}. </br>
        Recorda que tu obra social es ${turn.obraSocial.toUpperCase()} y deberás traer el carnet correspondiente para autorización.</br>
        Tu comentario: ${turn.comentario}. </br></p>
      <div class="button-container">
        <button value="${turn.id}" class="card-turno__delete"> Cancelar </button>
      </div>
  
      </div>
    `
    messageTurns.innerHTML += content;
  
  });
}

addEventInButtons = () => {
  const buttonsCancel = document.querySelectorAll(".card-turno__delete");

  buttonsCancel.forEach( button => {
    console.log(button);

    button.addEventListener('click', (e)=>{
      console.log(e.target.value);
      deleteTurn(e.target.value)
    });

  })
}

printTurns();
addEventInButtons();


