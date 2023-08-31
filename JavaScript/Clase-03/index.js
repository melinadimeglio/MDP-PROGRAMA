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
let dividir = prompt("Ingrese un numero para dividir: ");
for (let i = 1 ; i <= 10; i++){
    let resultado = `${dividir} / ${i} = ${dividir/i}`;
    console.log(resultado);
}

//FUNCIONES SIN PARAMETROS
function nombreFunction(){
    console.log("hola");
}
// EJECUTAR LA FUNCION:
nombreFunction();

//FUNCION CON PARAMETROS
function suma (x, y){
    console.log(x+y);
}
// EJECUTAR LA FUNCION:
suma(3,6);

//FUNCIONES POR EXPRESION
const fuctExpre = function ejemplo(){
    console.log()
} 
fuctExpre() 
//ES CUANDO QUEREMOS ASIGNARLE A UNA VARIABLE UNA FUNCION

//FUNCION ANONIMA (NO LLEVA NOMBRE)
const functAno = function(){
    console.log("hola");
}

// FUNCION AUTOEJECUTABLES (NO HACE FALTA LLAMARLA)
function(){
    console.log("ejemplo");
}("de prueba");

// FUNCION FLECHA
const ejemplo = ()=>{
    console.log("prueba");
}
ejemplo();

//EJEMPLO

let numeroOne = prompt("Ingrese el numero uno: ");
let numeroTwo = prompt("Ingrese el numero dos:");
let op = prompt("Ingrese si quiere suma(1), resta(2) o multiplicacion(3)");
const opeFunction = (a,b,c) =>{
    let result = "";
    if(c==1){
        result = a+b;
    }else if(c==2){
        result= a-b;
    }else{
        result = a*b;
    }
    console.log(result);
    return result;
}
let suma = opeFunction(numeroOne,numeroTwo,op);
console.log(suma*100);

