window.addEventListener("load", async () => {
    try {
      const user = JSON.parse(localStorage.getItem("user")) || verifiedLogin();

  
      // carga de datos desde un JSON 
      const response = await fetch('../json/data.json');
      const turnos = await response.json();
  
      const dataTurnos = JSON.parse(localStorage.getItem("turnos")) || turnos; // array de  fechas de turnos
      const dates = document.querySelector("#dates");
      const selectEspecialidad = document.querySelector("#opciones");
      const buttonSave = document.querySelector("#save");
      const obraSocial = document.querySelector("#obraSocial");
      const coment = document.querySelector("#coment");
      const closeSesion = document.querySelector("#btn");
  
      function verifiedLogin() {
        Swal.fire({
          icon: "warning",
          title: "No estas logueado",
          text: "Para reservar un turno es necesario que inicies sesion",
          showConfirmButton: false,
          footer: '<a href="./ingreso.html">Ir a Login</a>',
        });
      }
  
      //opciones de fechas
      const loadSelect = () => {
        dates.innerHTML = "";
        dataTurnos.forEach((especialidad) => {
          const disponibles = especialidad.disponibilidad;
          if (selectEspecialidad.value === especialidad.especialidad) {
            disponibles.forEach((turno) => {
              if (turno.disponible) {
                const opcion = document.createElement("option");
                opcion.value = turno.fecha + " - " + turno.hora + "hs";
                opcion.text = turno.fecha + " - " + turno.hora + "hs";
                dates.add(opcion);
              }
            });
          }
        });
      };
  
      loadSelect();
  
      selectEspecialidad.addEventListener("change", loadSelect);
  
      buttonSave.addEventListener("click", () => {
        const especialidad = selectEspecialidad.value;
        const dateHour = dates.value;
  
        // actualizar data
        dataTurnos.forEach((esp) => {
          const disponibles = esp.disponibilidad;
          if (especialidad === esp.especialidad) {
            disponibles.forEach((turno) => {
              if (turno.hora == dateHour) {
                turno.disponible = false;
              }
            });
          }
        });
  
        localStorage.setItem("turnos", JSON.stringify(dataTurnos));
  
        // guardar turno
        const turnosUser = JSON.parse(localStorage.getItem("turnos-user")) || [];
        const nuevoTurno = {
          id:
            turnosUser.length === 0
              ? 1
              : turnosUser[turnosUser.length - 1].id + 1,
          paciente: {
            nombre: user.nombre,
            apellido: user.apellido,
            dni: user.dni,
          },
          obraSocial: obraSocial.value,
          especialidad: especialidad,
          hora: dateHour,
          comentario: coment.value,
        };
  
        turnosUser.push(nuevoTurno);
        localStorage.setItem("turnos-user", JSON.stringify(turnosUser));
  
        obraSocial.value = "";
        selectEspecialidad.value = "";
        dates.value = "";
        coment.value = "";
  
        Swal.fire({
          icon: "success",
          title: "Turno Reservado",
          showConfirmButton: false,
        });
  
        console.log("turno reservado");
      });
  
      // cerrar sesion
      const cerrarSesion = () => {
        if (localStorage.getItem("user")) {
          localStorage.removeItem("user");
          console.log("sesion cerrada");
          Swal.fire({
            icon: "success",
            title: "Sesion cerrada",
            showConfirmButton: false,
            footer: '<a href="./index.html">Inicio</a>',
          });
        }
      };
  
      closeSesion.addEventListener("click", (e) => {
        console.log("sesion cerrada");
        cerrarSesion();
      });
  
      // cuando la promesa no se cumple
    } catch (error) {
      console.error({
        msg: "no se pudieron cargar los turnos disponibles",
        error,
      });
    }
  
  
  });