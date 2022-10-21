
class Paciente {
    constructor (nombre, apellido, fechaNacimiento, dni, genero, email, contrasena,confContras){
        this.nombre = nombre;
        this.apellido = apellido;
        this.fechaNacimiento = fechaNacimiento;
        this.dni = dni;
        this.genero= genero;
        this.email= email;
        this.contrasena= contrasena;
        this.confContras= confContras;
    }
}

const listaPatient= [];


const Registro= ()=> {
    let nombreRegistro = document.querySelector("#nombre").localStorage.setItem("nombreUser",nombreRegistro.value);
    let apellidoRegistro = document.querySelector("#apellido").localStorage.setItem("apellidoUser",apellidoRegistro.value);
    let nacimientoRegistro = document.querySelector ("#nacimiento").localStorage.setItem("fechaNac",nacimientoRegistro.value);
    let dniRegistro = document.querySelector("#dni").localStorage.setItem("user",dniRegistro.value);
    let genero = document.querySelector ("#genero").localStorage.setItem("genero",genero.value);
    let email = document.querySelector ("#email").localStorage.setItem("email",email.value);
    let contrasenaRegistro = document.querySelector("#contrasena").localStorage.setItem("password",contrasenaRegistro.value);
    let confirmarContrasena = document.querySelector ("#confcontrasena").localStorage.setItem("passwordtrue",confirmarContrasena.value);
    localStorage.setItem("paciente",JSON.stringify(Registro));


    let newPacient= new Paciente (nombreRegistro,apellidoRegistro,nacimientoRegistro,dniRegistro,genero,email,contrasenaRegistro,confContras);
    console.log (Paciente);
    alert (`Su nombre de usuario es ${dniRegistro.value} y su contraseña es ${contrasenaRegistro.value}`);
    let idPaciente = 1012;
    for (i=1012; i < 1214; i ++) {alert (`Tu numero de ID asignado es ${idPaciente}`);
    break};

    if (localStorage.getItem("pacient")== null){ listaPatient.push(newPacient);
            localStorage.setItem("pacient", JSON.stringify(listaPatient));
    }
    else {    const datosGuardados= JSON.parse(localStorage.getItem("pacient"));
            datosGuardados.push(newPacient);
            localStorage.setItem("pacient", JSON.stringify(datosGuardados));

    }
}
const formulario= document.getElementById("registrarme");
formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    Registro();
    localStorage.setItem("pacient", JSON.stringify(formulario));}

nombreRegistro.onchange = ()=> {
        if (nombreRegistro.value ==" ") {
            let invalido= document.getElementById("invalid");
            invalido.innerHTML= "Es necesario completar todos los campos";
            invalido.style.color= "red";
        }
        else {console.log (nombreRegistro.value);}
    };

    apellidoRegistro.onchange = ()=> {
        if (apellidoRegistro.value ==" ") {
            let invalido= document.getElementById("invalid");
            invalido.innerHTML= "Es necesario completar todos los campos";
            invalido.style.color= "red";
        }
        else {console.log (apellidoRegistro.value);}
    };

    nacimientoRegistro.onchange = ()=> {
        if (nacimientoRegistro.value ==" ") {
            let invalido= document.getElementById("invalid");
            invalido.innerHTML= "Es necesario completar todos los campos";
            invalido.style.color= "red";
        }
        else {console.log (nacimientoRegistro.value);}
    };

    dniRegistro.onchange = ()=> {
        if (dniRegistro.value ==" ") {
            let invalido= document.getElementById("invalid");
            invalido.innerHTML= "Es necesario completar todos los campos";
            invalido.style.color= "red";
        }
        else {console.log (dniRegistro.value);}
    };