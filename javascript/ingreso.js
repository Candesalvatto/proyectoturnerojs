const nombreUser= JSON.parse(localStorage.getItem("user"));
const password= JSON.parse(localStorage.getItem("password"));
const dniRegistro=JSON.parse(localStorage.getItem("dni"));
const contrasenaRegistro=JSON.parse(localStorage.getItem("password"));

    function Ingreso() {
        const nombreUser= localStorage.getItem("nombreUser");
        const password= localStorage.getItem("password");
        while ((nombreUser === dniRegistro) && (password === contrasenaRegistro))
        if (nombreUser != dniRegistro) {
            const spanUser= document.getElementById("spanUser").innerHTML="El usuario es incorrecto";
            spanUser.style.color="red";
        }
        else if (password != contrasenaRegistro) {
            const spanPassword= document.getElementById("spanPassword").innerHTML= "La contraseña es incorrecta";
            spanPassword.style.color= "red";
        }
        else 
        {let ingresar= document.getElementById("ingresar");
        ingresar.addEventListener ("click",Ingreso())
    };
    }


