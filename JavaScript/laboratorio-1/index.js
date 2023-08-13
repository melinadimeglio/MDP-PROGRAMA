const prompt = require ("prompt-sync")({sigint:true});
// Paqueteria para leer PROMPR desde Consola.


let numeroUno = prompt ("Ingrese el valor uno: ");
let numeroDos = prompt ("Ingrese el valor dos: ")

//Condicional IF - ELSE saber el mayor de dos numeros ingresados por el usuario
if(numeroDos > numeroUno){
    console.log("Mayor es el numero: ",numeroDos);
}
    else if(numeroUno == numeroDos){
        console.log("Son iguales");
    }
    else{
        console.log("El numero: " + numeroUno + "es mayor");
    }
    // FECHA
    //let date = new Date();
    //console.log(date);
    // PARA SABER EL MES:
    // console.log(date.getMonth()+1) empieza del 0
    // PARA SABER EL YEAR:
    // console.log(date.getFullYear())
    // PARA SABER EL DIA:
    // console.log(date.getDate());

    //MOMENT JS PARA TRABAJAR CON FECHA Y HORA.
    let date = new Date();
    let month = date.getMonth();
    console.log(month);
    let mes = "";
    switch(month){
        default: mes = "ENERO"; break;
        case 0: mes = "Enero"; break;
        case 1: mes = "Febrero"; break;
        case 2: mes = "Marzo"; break;
        case 3: mes = "Abril"; break;
        case 4: mes = "Mayo"; break;
        case 5: mes = "Junio"; break;
        case 6: mes = "Julio"; break;
        case 7: mes = "Agosto"; break;
        case 8: mes = "Septiembre"; break;
        case 9: mes = "Octubre"; break;
        case 10: mes = "Noviembre"; break;
        case 11: mes = "Diciembre"; break;
    }
    console.log("El mes es: " +mes);

    // WHILE - REPETIR LOS NUMEROS DEL 1 HASTA EL 10
    let y = 1;
    while(y <= 10){
        console.log("numero ", y);
        y++;
    }

    //repetir los numeros hasta donde el usuario indique.
    let xy = prompt("Ingrese un valor: ");
    for(let i = 1; i <= xy; i++){
        console.log("El numero es: ", i);
    }

    //DADO TRES VALORES INGRESADOS POR EL USUARIO SABER CUAL ES EL MAYOR DE ELLOS
    let primerNumero = prompt("Ingrese el primer numero: ");
    let segundoNumero = prompt("Ingrese el segundo numero: ");
    let tercerNumero = prompt("Ingrese el tercer numero: ");
    let mensaje="";
    if((primerNumero == segundoNumero) || (segundoNumero == tercerNumero) || (primerNumero == tercerNumero)){
        mensaje = "Son iguales";
    }

    else if((primerNumero > segundoNumero) && (numeroTwo > numeroThree)){
        mensaje = ("El numero mayor es: " + primerNumero);
    }else if ((segundoNumero > tercerNumero) && (segundoNumero > tercerNumero)){
        mensaje = ("El numero mayor es: " + segundoNumero);
    }
    else if((tercerNumero > primerNumero) && (tercerNumero > segundoNumero)){
        mensaje = ("El numero mayor es: " + tercerNumero);
    }
    else{
        mensaje = ("Los numeros son iguales: ");
    }

    console.log(mensaje);


    //Realizar la tabla de multiplicar dado un valor por el usuario.
    //Realizar la tabla de dividir dado un valor por el usuario.