const prompt = require ("prompt-sync")({sigint:true});

// Realizar la tabla de multiplicar dado un valor por el usuario.
let tabla = prompt("Ingrese el numero de la tabla a mostrar: ");
for (let i = 1; i <=10; i++){
    let result = `${tabla} X ${i} = ${i*tabla}`;
    console.log(result);
}

//template literal o string
//let result = `${tabla} X ${i} = {i*tabla}`;

//CON WHILE
let i = 1;
while (i <=10){
    let result = `${tabla} X ${i} = ${i*tabla}`;
    console.log(result);
    i++;
}

// Realizar la tabla de dividir dado un valor por el usuario.
let dividir = prompt("Ingrese un numero para dividir");
for (let i = 1 ; i <= 10; i++){
    let resultado = `${dividir} / ${i} = ${dividir/i}`;
    console.log(resultado);
}