class Paciente {
  constructor(id, nombre, apellido, dni, fechaNacimiento, genero, email, contrasena) {
    this.id = id;
    this.nombre = nombre.trim();
    this.apellido = apellido.trim();
    this.fechaNacimiento = fechaNacimiento.trim();
    this.dni = dni;
    this.genero = genero.trim();
    this.email = email.trim();
    this.contrasena = contrasena.trim();
    this.turnos = [];
  }
}

const formulario = document.querySelector("#registrarme");
const invalidDisplay = document.querySelector("#invalidDisplay");
let formState = false;
let passwordState = false;
let pacientes = [];
if (localStorage.getItem("pacientes")) {
  pacientes = JSON.parse(localStorage.getItem("pacientes"));
}

//funcion de msj de error
const showErrorMessage = (msg) => {
  invalidDisplay.innerText = msg;
};
//funcion para validar registro
const validationsFields = (dataForm) => {
  const result = dataForm.filter((field) => field.value.trim().length === 0);

  if (result.length > 0) {
    console.log("Uno de los campos esta vacio");
    Swal.fire({
      icon: 'warning',
      title: 'Uno o más campos están vacíos',
      text: 'Por favor, revisa todos los campos',
    })
    showErrorMessage("Uno o más campos están vacíos");
    formState = false;
  } else {
    console.log("ningun campo esta vacio");
    formState = true;
  }

  if (dataForm[6].value === dataForm[7].value) {
    console.log("Las contraseñas son iguales");
    passwordState = true;
  } else {
    console.error("Las contraseñas son distintas");
    passwordState = false;
    showErrorMessage("Las contraseñas no coinciden");
  }
};

//evento formulario

formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(e);
  const arrayResponses = [
    e.target[0],
    e.target[1],
    e.target[2],
    e.target[3],
    e.target[4],
    e.target[5],
    e.target[6],
    e.target[7],
  ];

  validationsFields(arrayResponses);


  if (formState === true && passwordState === true) {
    const newId = pacientes.length + 1;

    const newPaciente = new Paciente(
      newId,
      e.target[0].value,
      e.target[1].value,
      e.target[2].value,
      e.target[3].value,
      e.target[4].value,
      e.target[5].value,
      e.target[6].value
    );
    console.log(newPaciente);
    pacientes.push(newPaciente);

    localStorage.setItem("pacientes", JSON.stringify(pacientes));

    Swal.fire({
      icon: 'success',
      title: `Felicidades ${newPaciente.nombre.toUpperCase()}`,
      text: `Tu usuario fue registrado con éxito. Tu ID es:
              ${newId}  
            Se envió la confirmación de tu registro al mail ${newPaciente.email} 
      `,
      showConfirmButton: false,
      footer: '<a href="./ingreso.html">Ir a Login</a>'
    });

  }
});

// api email 
const btn = document.getElementById('button');


formulario.addEventListener('submit', function (e) {
  e.preventDefault();

  btn.value = 'Enviando...';

  const serviceID = 'default_service';
  const templateID = 'template_czbpb7h';

  emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Enviar email';
    }, (err) => {
      btn.value = 'Enviar email';
    });
    
});