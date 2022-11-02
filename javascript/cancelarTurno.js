//variables

const userTurns = JSON.parse(localStorage.getItem("turnos-user")) || turnosUser; 
const pacient = JSON.parse(localStorage.getItem("pacientes")) || [] ;
const dniUser = document.querySelector('#dniCancel').value;
const selectTurno = document.querySelector('#opciones').value;
const checklist = document.querySelector('#check').value;
const formulario = document.querySelector("#send");
let cancelState = false; 


pacient.forEach((paciente) => {console.log (paciente)});

userTurns.forEach ((turnos) => {console.log(turnos)});
    //const cancelacion = pacient.filter(dni);     
   //console.log (cancelacion)

    /*const cancelTurn =()=> {
        const cancelacion = pacient.filter(dni);     
        
        if (cancelacion != dniUser) {
            console.log (`El dni ingresado por el usuario es ${dniUser} y no coincide con ${paciente.dni}`);
            Swal.fire({
                icon: 'warning',
                title: 'DNI INCORRECTO',
              })
        else {
            console.log ("los DNI coinciden");
            cancelState = true;
        }
        } 


    formulario.addEventListener("submit", (e) => {
        e.preventDefault();
        console.log(e);
        const fields = [
            selectTurno, dniUser, checklist
        ]
    
        cancelTurn(fields);

        if (selectTurno === paciente.especialidad && checklist === true) {
            Swal.fire({
                icon: 'success',
                title: `Felicidades`,
                text: `Tu turno fue cancelado con éxito.`,
                showConfirmButton: location.reload(),
            });
            localStorage.setItem("turno cancelado", JSON.stringify(cancelTurn));
    });
};

   
  */