/*const horario= [8,9,10,11,12,13,14,15,16,17,18,19,20];
const diasSemana= [
    {nro:1, dia: "lunes", hora: [horario]},
    {nro:2, dia: "martes",hora: [horario]},
    {nro:3, dia: "miercoles",hora: [horario]},
    {nro:4, dia: "jueves",hora: [horario]},
    {nro:5, dia: "viernes",hora: [horario]},
];




function opcionesEntrada() {
    let opcionResgistro= (
    prompt ("\n 1 REGISTRARME \n 2 INGRESAR " ));
    switch (opcionResgistro) {
        case "1":
            Registro();
            break;
        case "2": ingreso();
            break;
        default:
            alert("Dato invalido");
            break;
}
}
opcionesEntrada();


function Registro (nombre, apellido, fechaNacimiento, dni) {
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






function ingreso() {
    let nombreUsuario = prompt ("Ingrese su usuario");
    let contrasenaUsuario = prompt ("Ingrese su contraseña"); 
    while ((nombreUsuario === dniRegistro) && ( contrasenaUsuario === contrasenaRegistro)) 
    if (nombreUsuario != dniRegistro) {
        alert ("Su usuario o contraseña con incorrectos. Ingrese de nuevo");
            return ingreso();
    } else if (contrasenaUsuario != contrasenaRegistro){
            alert ("Su usuario o contraseña con incorrectos. Ingrese de nuevo");
            return ingreso();
        } 
        else{ opcionesPrincipales();
            
        }
    }



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
    if (cancelacion === dniRegistro) {
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
    let listaDias= "\n";
    for (const element of diasSemana) { listaDias += element.dia + "\n";}
    const elegirDia= prompt (`Escribe el dia de la semana que quieres ${listaDias}`);

    switch (elegirDia) {
            case "lunes": 
            elegirHorario= parseInt (
        prompt (`Los dias lunes tenemos estos turnos ${horario.join ("-")} hs. Escribe un horario`));
        break;
            case "martes": 
            elegirHorario= parseInt (
            prompt (`Los dias martes tenemos estos turnos ${horario.join ("-")} hs. Escribe un horario`));
        break;
            case "miercoles": 
            elegirHorario= parseInt (
            prompt (`Los dias miercoles tenemos estos turnos ${horario.join ("-")} hs. Escribe un horario`));
        break;
            case "jueves": 
            elegirHorario= parseInt (
            prompt (`Los dias jueves tenemos estos turnos ${horario.join ("-")} hs. Escribe un horario`));
        break;
            case "viernes": 
            elegirHorario= parseInt (
            prompt (`Los dias viernes tenemos estos turnos ${horario.join ("-")} hs. Escribe un horario`));
        break;
            
        default:
            elegirDia= alert("Ese dia no atendemos");
            mamografia();


            }
            
            if (elegirHorario > 20) {
                alert("Ese horario esta fuera de nuestro rango de atencion");
                horario();}
            else if (elegirHorario <8) {alert("Ese horario esta fuera de nuestro rango de atencion");
                mamografia();}
    
alert (`Tu turno es el dia ${elegirDia} a las ${elegirHorario} hs.`);
        opcionesPrincipales();                     
    }
    





function ecoMamaria () {
    alert ("Indicaciones: Traer ecografia anterior (imagenes e informe)");
    let listaDias= "\n";
    for (const element of diasSemana) { listaDias += element.dia + "\n";}
    const elegirDia= prompt (`Escribe el dia de la semana que quieres ${listaDias}`);
    switch (elegirDia) {
        case "lunes": 
        elegirHorario= parseInt (
    prompt (`Los dias lunes tenemos estos turnos ${horario.join ("-")} hs. Escribe un horario`));
    break;
        case "martes": 
        elegirHorario= parseInt (
        prompt (`Los dias martes tenemos estos turnos ${horario.join ("-")} hs. Escribe un horario`));
    break;
        case "miercoles": 
        elegirHorario= parseInt (
        prompt (`Los dias miercoles tenemos estos turnos ${horario.join ("-")} hs. Escribe un horario`));
    break;
        case "jueves": 
        elegirHorario= parseInt (
        prompt (`Los dias jueves tenemos estos turnos ${horario.join ("-")} hs. Escribe un horario`));
    break;
        case "viernes": 
        elegirHorario= parseInt (
        prompt (`Los dias viernes tenemos estos turnos ${horario.join ("-")} hs. Escribe un horario`));
    break;
            
        default:
            elegirDia= prompt("Ese dia no atendemos");
            break;

            }
    
                if (elegirHorario > 20) {
                alert("Ese horario esta fuera de nuestro rango de atencion");
                horario();}
            else if (elegirHorario <8) {alert("Ese horario esta fuera de nuestro rango de atencion");
                horario();}
    
    
alert (`Tu turno es el dia ${elegirDia} a las ${elegirHorario} hs.`);
    opcionesPrincipales(); 
    }
    

function ecoGinecologica () {
    alert ("Indicaciones: Traer ecografia anterior (imagenes e informe)");
    let listaDias= "\n";
    for (const element of diasSemana) { listaDias += element.dia + "\n";}
    const elegirDia= prompt (`Escribe el dia de la semana que quieres ${listaDias}`);
    switch (elegirDia) {
        case "lunes": 
        elegirHorario= parseInt (
    prompt (`Los dias lunes tenemos estos turnos ${horario.join ("-")} hs. Escribe un horario`));
    break;
        case "martes": 
        elegirHorario= parseInt (
        prompt (`Los dias martes tenemos estos turnos ${horario.join ("-")} hs. Escribe un horario`));
    break;
        case "miercoles": 
        elegirHorario= parseInt (
        prompt (`Los dias miercoles tenemos estos turnos ${horario.join ("-")} hs. Escribe un horario`));
    break;
        case "jueves": 
        elegirHorario= parseInt (
        prompt (`Los dias jueves tenemos estos turnos ${horario.join ("-")} hs. Escribe un horario`));
    break;
        case "viernes": 
        elegirHorario= parseInt (
        prompt (`Los dias viernes tenemos estos turnos ${horario.join ("-")} hs. Escribe un horario`));
    break;
            
        default:
            elegirDia= prompt("Ese dia no atendemos");
            break;

            }
    
                if (elegirHorario > 20) {
                alert("Ese horario esta fuera de nuestro rango de atencion");
                horario();}
            else if (elegirHorario <8) {alert("Ese horario esta fuera de nuestro rango de atencion");
                horario();}
    
    
alert (`Tu turno es el dia ${elegirDia} a las ${elegirHorario} hs.`);
            opcionesPrincipales();  
    }
    
function punciones () {
    alert ("Indicaciones: Traer todos los ultimos estudios mamarios realizados");
    let listaDias= "\n";
    for (const element of diasSemana) { listaDias += element.dia + "\n";}
    const elegirDia= prompt (`Escribe el dia de la semana que quieres ${listaDias}`);
    switch (elegirDia) {
        case "lunes": 
        elegirHorario= parseInt (
    prompt (`Los dias lunes tenemos estos turnos ${horario.join ("-")} hs. Escribe un horario`));
    break;
        case "martes": 
        elegirHorario= parseInt (
        prompt (`Los dias martes tenemos estos turnos ${horario.join ("-")} hs. Escribe un horario`));
    break;
        case "miercoles": 
        elegirHorario= parseInt (
        prompt (`Los dias miercoles tenemos estos turnos ${horario.join ("-")} hs. Escribe un horario`));
    break;
        case "jueves": 
        elegirHorario= parseInt (
        prompt (`Los dias jueves tenemos estos turnos ${horario.join ("-")} hs. Escribe un horario`));
    break;
        case "viernes": 
        elegirHorario= parseInt (
        prompt (`Los dias viernes tenemos estos turnos ${horario.join ("-")} hs. Escribe un horario`));
    break;
            
        default:
            elegirDia= prompt("Ese dia no atendemos");
            break;

    
            }
    
            if (elegirHorario > 20) {
                alert("Ese horario esta fuera de nuestro rango de atencion");
                horario();}
            else if (elegirHorario <8) {alert("Ese horario esta fuera de nuestro rango de atencion");
                horario();}
            
alert (`Tu turno es el dia ${elegirDia} a las ${elegirHorario} hs.`);
            opcionesPrincipales();  
    }
    


function densitometria () {
    alert ("Indicaciones: Traer densitometria anterior (imagenes e informe)");
    let listaDias= "\n";
    for (const element of diasSemana) { listaDias += element.dia + "\n";}
    const elegirDia= prompt (`Escribe el dia de la semana que quieres ${listaDias}`);
    switch (elegirDia) {
        case "lunes": 
        elegirHorario= parseInt (
    prompt (`Los dias lunes tenemos estos turnos ${horario.join ("-")} hs. Escribe un horario`));
    break;
        case "martes": 
        elegirHorario= parseInt (
        prompt (`Los dias martes tenemos estos turnos ${horario.join ("-")} hs. Escribe un horario`));
    break;
        case "miercoles": 
        elegirHorario= parseInt (
        prompt (`Los dias miercoles tenemos estos turnos ${horario.join ("-")} hs. Escribe un horario`));
    break;
        case "jueves": 
        elegirHorario= parseInt (
        prompt (`Los dias jueves tenemos estos turnos ${horario.join ("-")} hs. Escribe un horario`));
    break;
        case "viernes": 
        elegirHorario= parseInt (
        prompt (`Los dias viernes tenemos estos turnos ${horario.join ("-")} hs. Escribe un horario`));
    break;
            
        default:
            elegirDia= prompt("Ese dia no atendemos");
            break;
    }
    
            if (elegirHorario > 20) {
                alert("Ese horario esta fuera de nuestro rango de atencion");
                horario();}
            else if (elegirHorario <8) {alert("Ese horario esta fuera de nuestro rango de atencion");
                horario();}

       
alert (`Tu turno es el dia ${elegirDia} a las ${elegirHorario} hs.`);
            opcionesPrincipales();  
}*/