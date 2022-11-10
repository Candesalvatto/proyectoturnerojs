const indexButton = document.querySelector('#login');
const buttonContainer = document.querySelector('.contenedor_boton');
let user = JSON.parse(localStorage.getItem("user"));

//cerrar sesion
const closeSesion = () => {
    localStorage.removeItem('user');
    user = null;
    verifiedLogin();
}

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