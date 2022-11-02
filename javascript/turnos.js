//valriables

const dataTurnos = JSON.parse(localStorage.getItem("turnos")) || turnos; // array de  fechas de turnos 
const dates = document.querySelector("#dates");
const selectEspecialidad = document.querySelector("#opciones");
const buttonSave = document.querySelector('#save');



//opciones de fechas
const loadSelect = () =>
{   
    dates.innerHTML = '';
    dataTurnos.forEach(especialidad => {
        const disponibles = especialidad.disponibilidad;
        if(selectEspecialidad.value === especialidad.especialidad)
        {
            disponibles.forEach(turno =>{
                if(turno.disponible)
                {
                    const opcion = document.createElement('option')
                    opcion.value = turno.fecha + " - " + turno.hora + "hs"
                    opcion.text = turno.fecha + " - " + turno.hora + "hs"
                    dates.add(opcion);
                }
            });
        }
    });
}

loadSelect();

selectEspecialidad.addEventListener("change", loadSelect);

buttonSave.addEventListener("click", ()=>{
    const especialidad = selectEspecialidad.value;
    const dateHour = dates.value;
    const obraSocial = document.querySelector("#obraSocial").value;
    const coment= document.querySelector ("#coment").value;

    // actualizar data 
    dataTurnos.forEach(esp => {
        const disponibles = esp.disponibilidad;
        if(especialidad === esp.especialidad)
        {
            disponibles.forEach(turno =>{
                if(turno.hora == dateHour)
                {
                    turno.disponible = false;
                }
            });
        }
    });

    localStorage.setItem("turnos", JSON.stringify(dataTurnos));

    // guardar turno
    const turnosUser = JSON.parse(localStorage.getItem("turnos-user")) || [];
    const nuevoTurno = {
        obraSocial: obraSocial,
        especialidad:especialidad,
        hora: dateHour,
        comentario:coment
    }

    turnosUser.push(nuevoTurno);
    localStorage.setItem("turnos-user", JSON.stringify(turnosUser));

    Swal.fire({
        icon: 'success',
        title: "Turno Reservado",
        showConfirmButton: false,
        footer: location.reload()
      })
    
    console.log("turno reservado");

})