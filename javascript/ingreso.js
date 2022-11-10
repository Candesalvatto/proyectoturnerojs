let pacientes = [];
const form = document.querySelector('.ingreso');
let formState = false;
console.log(form)

//validacion del loguin

const validateField = (arrayField) => {

    const result = arrayField.filter(field => field.value.trim().length === 0);
    if (result.length > 0) {
        formState = false;
        Swal.fire({
            icon: 'warning',
            title: 'Uno o más campos están vacíos',
            text: 'Por favor, revisa todos los campos antes de ingresar',
        })
    } else {
        formState = true;
    }

}


function ingreso(dni, password) {
const result = pacientes.find(paciente => paciente.dni === dni);

    if (result === undefined) {
        Swal.fire({
            icon: 'warning',
            title: 'Usuario Incorrecto',
            text: 'El DNI ingresado no corresponde a un usuario.',
        })
    }



    if ((result !== undefined) && (result.contrasena === password)) {

        localStorage.setItem('user', JSON.stringify(result));

        Swal.fire({
            icon: 'success',
            title: `Bienvenido ${result.nombre.toUpperCase()}`,
            showConfirmButton: false,
            footer: '<a href="./turnos.html">Ir a Turnos</a>'
        })
    } else if ((result !== undefined)) {
        Swal.fire({
            icon: 'error',
            title: 'Contraseña incorrecta',
        })
    }
}


form.addEventListener('submit', (e) => {
    e.preventDefault();
    validateField([e.target[0], e.target[1]]);

    if (formState === true) {
        ingreso(e.target[0].value.trim(), e.target[1].value.trim())
    }

});



if (localStorage.getItem('pacientes')) {
    pacientes = JSON.parse(localStorage.getItem('pacientes'));
    console.log(pacientes);
}