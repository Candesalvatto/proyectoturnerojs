// obtengo storage
// listo en el hhtml el contenido del storage

const viewTurns = JSON.parse(localStorage.getItem("turnos-user")) || turnosUser; 
const messageTurns = document.querySelector('#turnsViews');


const showMessage = (msg) => {
    messageTurns.innerText = msg;
  };
if (turnosUser === 0) {
    showMessage("No existen turnos registrados");
}
else {
    showMessage(`Tu turno para ${} es para la fecha`);
  }





if (dataForm[6].value === dataForm[7].value) {
    console.log("Las contraseñas son iguales");
    passwordState = true;
  } else {
    console.error("Las contraseñas son distintas");
    passwordState = false;
     if (dataForm[6].value === dataForm[7].value) {
    console.log("Las contraseñas son iguales");
    passwordState = true;
  } else {
    console.error("Las contraseñas son distintas");
    passwordState = false;
    showErrorMessage("Las contraseñas no coinciden");
  }
  }