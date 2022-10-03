let registroNombre = prompt("Ingrese su nombre completo"); console.log (registroNombre);
let registroApellido = prompt("Ingrese su apellido"); console.log (registroApellido);
let dni = parseInt(prompt("Ingrese su DNI"));console.log (dni);



function opcionesPrincipales() {
    let opcionTurnos= parseInt ( 
    prompt ("Bienvenido! ¿Que necesita realizar? \n 1 Solicitar turno \n 2 Cancelar turno \n 3 Salir" ));
    switch (opcionTurnos) {
        case 1:
            solicitarTurno();
            break;
        case 2: cancelarTurno();
            break;
        default:
            alert("Dato invalido");
            break;
        case 3: salir();
            break;
            
    }

}
opcionesPrincipales();

function solicitarTurno () {
    let opcionDiagnostico= parseInt (prompt("Elige metodo diagnostico: \n 1 Mamografia \n 2 Ecografia Mamaria \n 3 Ecografia ginecologica \n 4 Punciones mamarias \n 5 Densitometria osea" ));
    switch (opcionDiagnostico) {
        case 1:
            mamografia();
            break;
        case 2:
            ecoMamaria();
            break;
            case 3:
            ecoGinecologica();
            break;
            case 4:
            punciones();
            break;
            case 5:
            densitometria();
            break;
    }
}

function cancelarTurno () {
    let cancelacion= parseInt ( prompt ("Por favor ingrese su DNI para cancelar su turno"));
    if (cancelacion === dni) {
        alert ("Su turno ha sido cancelado con exito");
    }
    else {
        alert ("Por favor ingrese de nuevo su DNI");
       cancelarTurno();

    }
            opcionesPrincipales();  

}


function mamografia () {
    alert ("Indicaciones: Traer mamografia anterior (imagenes e informe)");
    let elegirDia= prompt ("Escribe que dia de la semana quieres");
    switch (elegirDia) {
            case "lunes": 
        horario=  Number (prompt ("Los dias lunes podemos de 8 a 20 hs, escribe una hora"));
        break;
            case "martes": 
        horario= Number (prompt ("Los dias martes podemos de 8 a 20 hs, escribe una hora"));
        break;
            case "miercoles": 
        horario= Number (prompt ("Los dias miercoles podemos de 8 a 20 hs, escribe una hora"));
        break;
            case "jueves": 
        horario= Number (prompt ("Los dias jueves podemos de 8 a 20 hs, escribe una hora"));
        break;
            case "viernes": 
        horario= Number (prompt ("Los dias viernes podemos de 8 a 20 hs, escribe una hora"));
        break;
            
        default:
            elegirDia= alert("Ese dia no atendemos");
            mamografia();


            }
            
            if (horario > 20) {
                alert("Ese horario esta fuera de nuestro rango de atencion");
                horario();}
            else if (horario <8) {alert("Ese horario esta fuera de nuestro rango de atencion");
                mamografia();}
    
alert (`Tu turno es el dia ${elegirDia} a las ${horario} hs.`);
        opcionesPrincipales();                     
    }
    





function ecoMamaria () {
    alert ("Indicaciones: Traer ecografia anterior (imagenes e informe)");
    let elegirDia= prompt ("Escribe que dia de la semana quieres");
    switch (elegirDia) {
            case "lunes": 
        horario=  Number (prompt ("Los dias lunes podemos de 8 a 20 hs, escribe una hora"));
        break;
            case "martes": 
        horario= Number (prompt ("Los dias martes podemos de 8 a 20 hs, escribe una hora"));
        break;
            case "miercoles": 
        horario= Number (prompt ("Los dias miercoles podemos de 8 a 20 hs, escribe una hora"));
        break;
            case "jueves": 
        horario= Number (prompt ("Los dias jueves podemos de 8 a 20 hs, escribe una hora"));
        break;
            case "viernes": 
        horario= Number (prompt ("Los dias viernes podemos de 8 a 20 hs, escribe una hora"));
        break;
            
        default:
            elegirDia= prompt("Ese dia no atendemos");
            break;

            }
    
                if (horario > 20) {
                alert("Ese horario esta fuera de nuestro rango de atencion");
                horario();}
            else if (horario <8) {alert("Ese horario esta fuera de nuestro rango de atencion");
                horario();}
    
    
alert (`Tu turno es el dia ${elegirDia} a las ${horario} hs.`);
    opcionesPrincipales(); 
    }
    

function ecoGinecologica () {
    alert ("Indicaciones: Traer ecografia anterior (imagenes e informe)");
    let elegirDia= prompt ("Escribe que dia de la semana quieres");
    switch (elegirDia) {
            case "lunes": 
        horario=  Number (prompt ("Los dias lunes podemos de 8 a 20 hs, escribe una hora"));
        break;
            case "martes": 
        horario= Number (prompt ("Los dias martes podemos de 8 a 20 hs, escribe una hora"));
        break;
            case "miercoles": 
        horario= Number (prompt ("Los dias miercoles podemos de 8 a 20 hs, escribe una hora"));
        break;
            case "jueves": 
        horario= Number (prompt ("Los dias jueves podemos de 8 a 20 hs, escribe una hora"));
        break;
            case "viernes": 
        horario= Number (prompt ("Los dias viernes podemos de 8 a 20 hs, escribe una hora"));
        break;
            
        default:
            elegirDia= prompt("Ese dia no atendemos");
            break;

            }
    
                if (horario > 20) {
                alert("Ese horario esta fuera de nuestro rango de atencion");
                horario();}
            else if (horario <8) {alert("Ese horario esta fuera de nuestro rango de atencion");
                horario();}
    
    
alert (`Tu turno es el dia ${elegirDia} a las ${horario} hs.`);
            opcionesPrincipales();  
    }
    
function punciones () {
    alert ("Indicaciones: Traer todos los ultimos estudios mamarios realizados");
    let elegirDia= prompt ("Escribe que dia de la semana quieres");
    switch (elegirDia) {
            case "lunes": 
        horario=  Number (prompt ("Los dias lunes podemos de 8 a 20 hs, escribe una hora"));
        break;
            case "martes": 
        horario= Number (prompt ("Los dias martes podemos de 8 a 20 hs, escribe una hora"));
        break;
            case "miercoles": 
        horario= Number (prompt ("Los dias miercoles podemos de 8 a 20 hs, escribe una hora"));
        break;
            case "jueves": 
        horario= Number (prompt ("Los dias jueves podemos de 8 a 20 hs, escribe una hora"));
        break;
            case "viernes": 
        horario= Number (prompt ("Los dias viernes podemos de 8 a 20 hs, escribe una hora"));
        break;
            
        default:
            elegirDia= prompt("Ese dia no atendemos");
            break;

    
            }
    
            if (horario > 20) {
                alert("Ese horario esta fuera de nuestro rango de atencion");
                horario();}
            else if (horario <8) {alert("Ese horario esta fuera de nuestro rango de atencion");
                horario();}
            
alert (`Tu turno es el dia ${elegirDia} a las ${horario} hs.`);
            opcionesPrincipales();  
    }
    


function densitometria () {
    alert ("Indicaciones: Traer densitometria anterior (imagenes e informe)");
    let elegirDia= prompt ("Escribe que dia de la semana quieres");
    switch (elegirDia) {
            case "lunes": 
        horario=  Number (prompt ("Los dias lunes podemos de 8 a 20 hs, escribe una hora"));
        break;
            case "martes": 
        horario= Number (prompt ("Los dias martes podemos de 8 a 20 hs, escribe una hora"));
        break;
            case "miercoles": 
        horario= Number (prompt ("Los dias miercoles podemos de 8 a 20 hs, escribe una hora"));
        break;
            case "jueves": 
        horario= Number (prompt ("Los dias jueves podemos de 8 a 20 hs, escribe una hora"));
        break;
            case "viernes": 
        horario= Number (prompt ("Los dias viernes podemos de 8 a 20 hs, escribe una hora"));
        break;
            
        default:
            elegirDia= prompt("Ese dia no atendemos");
            break;
    }
    
            if (horario > 20) {
                alert("Ese horario esta fuera de nuestro rango de atencion");
                horario();}
            else if (horario <8) {alert("Ese horario esta fuera de nuestro rango de atencion");
                horario();}

       
alert (`Tu turno es el dia ${elegirDia} a las ${horario} hs.`);
            opcionesPrincipales();  
}