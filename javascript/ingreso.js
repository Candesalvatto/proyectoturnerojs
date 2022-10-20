const nombreUser= localStorage.getItem("user");
const password= localStorage.getItem("password");


    function ingreso() {
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
    }


