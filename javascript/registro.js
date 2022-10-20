
/*function Registro (nombre, apellido, fechaNacimiento, dni) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.fechaNacimiento = fechaNacimiento;
    this.dni = dni;
    
}

let nombreRegistro = prompt ("Ingrese su nombre");
let apellidoRegistro = prompt ("Ingrese su apellido");
let nacimientoRegistro = parseInt(prompt ("Ingrese su fecha de nacimiento"));
let dniRegistro = prompt ("Ingrese su DNI");
let contrasenaRegistro = parseInt (prompt ("Cree una contraseña numerica"));


const registrar = new Registro (nombreRegistro,apellidoRegistro,nacimientoRegistro,dniRegistro,contrasenaRegistro);
console.log (registrar);
alert (`Su nombre de usuario es ${dniRegistro} y su contraseña es ${contrasenaRegistro}`);
console.log (`Usuario: ${dniRegistro}, Contraseña: ${contrasenaRegistro}`)
let idPaciente = 1012;
for (i=1012; i < 1214; i ++) {alert (`Tu numero de ID asignado es ${idPaciente}`);
break};
ingreso();
*/
let nombreRegistro = document.querySelector("#nombre").value;
nombreRegistro= localStorage.setItem("nombreUser",nombreRegistro);
let apellidoRegistro = document.querySelector("#apellido").value;
apellidoRegistro= localStorage.setItem("apellidoUser",apellidoRegistro);
let nacimientoRegistro = document.querySelector ("#nacimiento").value;
let dniRegistro = document.querySelector("#dni").value;
dniRegistro= localStorage.setItem("user",dniRegistro);
let genero = document.querySelector ("#genero").value;
let email = document.querySelector ("#email").value;
email= localStorage.setItem("mail",email);
let contrasenaRegistro = document.querySelector("#contrasena").value;
contrasenaRegistro= localStorage.setItem("password",contrasenaRegistro);
let confirmarContrasena = document.querySelector ("#confcontrasena").value;

const registrarse = document.getElementById ("registrarme");
registrarse.addEventListener("click", (e)=>{
        e.preventDefault()
});


console.log(nombreRegistro,apellidoRegistro,nacimientoRegistro,dniRegistro,genero,email,contrasenaRegistro,confirmarContrasena);


function Registro  
 (nombre, apellido, fechaNacimiento, dni, genero, email, contrasena) {
                        this.nombre = nombre;
                        this.apellido = apellido;
                        this.fechaNacimiento = fechaNacimiento;
                        this.dni = dni;
                        this.genero= genero;
                        this.email= email;
                        this.contrasena= contrasena;
                    }

    let registrar = new Registro (nombreRegistro,apellidoRegistro,nacimientoRegistro,dniRegistro,genero,email,contrasenaRegistro);
    console.log (registrar);
    alert (`Su nombre de usuario es ${dniRegistro} y su contraseña es ${contrasenaRegistro}`);
    let idPaciente = 1012;
    for (i=1012; i < 1214; i ++) {alert (`Tu numero de ID asignado es ${idPaciente}`);
    break};



nombreRegistro.onchange = ()=> {
    if (nombreRegistro.value ==" ") {
        let invalido= document.getElementById("invalid");
        invalido.innerHTML= "Es necesario completar todos los campos";
        invalido.style.color= "red";
    }
    else {console.log (nombreRegistro.value);}
}