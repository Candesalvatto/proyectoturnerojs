const indexButton = document.querySelector('#login');
const buttonContainer = document.querySelector('.contenedor_boton');
let user = JSON.parse(localStorage.getItem("user"));

//cerrar sesion
const closeSesion = () => {
    localStorage.removeItem('user');
    user = null;
    verifiedLogin();
}

document.addEventListener('DOMContentLoaded', function() {
    var navbar = document.querySelector('.navbar-container');
    var logo = document.getElementById('logo');

    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 0) {
            navbar.classList.add('scrolled');
            logo.src = '../img/logorosaCM.png';
        } else {
            navbar.classList.remove('scrolled');
            logo.src = '../img/logoblancoCM.png';
        }
    });
});




//funcion de botones loguin 
const verifiedLogin = () => {

    if (user) {
        indexButton.innerHTML = 'TURNOS';
        indexButton.href = 'turnos.html';
        const logout = document.createElement('button');
        logout.classList.add('boton_turnos');
        logout.innerHTML = 'CERRAR SESION';
        buttonContainer.appendChild(logout);

        logout.addEventListener('click', () => {
            closeSesion();
        })

    } else {
        indexButton.innerHTML = 'INICIAR SESION';
        indexButton.href = './ingreso.html';
        buttonContainer.removeChild(buttonContainer.lastChild);
    }
}

window.addEventListener('load', () => {
    verifiedLogin();
});