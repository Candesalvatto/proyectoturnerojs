
let nombreRegistro = document.querySelector("#nombre").value;
localStorage.setItem("nombreUser",nombreRegistro);
let apellidoRegistro = document.querySelector("#apellido").value;
localStorage.setItem("apellidoUser",apellidoRegistro);
let nacimientoRegistro = document.querySelector ("#nacimiento").value;
localStorage.setItem("edadUser",nacimientoRegistro);
let dniRegistro = document.querySelector("#dni").value;
localStorage.setItem("user",dniRegistro);
let genero = document.querySelector ("#genero").value;
let email = document.querySelector ("#email").value;
localStorage.setItem("mail",email);
let contrasenaRegistro = document.querySelector("#contrasena").value;
localStorage.setItem("password",contrasenaRegistro);
let confirmarContrasena = document.querySelector ("#confcontrasena").value;

let registrarse = document.getElementById ("registrarme");
registrarse.addEventListener("click", (e)=>{
        e.preventDefault();
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
    console.log (Registro);
    alert (`Su nombre de usuario es ${dniRegistro} y su contraseña es ${contrasenaRegistro}`);
    let idPaciente = 1012;
    for (i=1012; i < 1214; i ++) {alert (`Tu numero de ID asignado es ${idPaciente}`);
    break};
});






nombreRegistro.onchange = ()=> {
    if (nombreRegistro.value ==" ") {
        let invalido= document.getElementById("invalid");
        invalido.innerHTML= "Es necesario completar todos los campos";
        invalido.style.color= "red";
    }
    else {console.log (nombreRegistro.value);}
}