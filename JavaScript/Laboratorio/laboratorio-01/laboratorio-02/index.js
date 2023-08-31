const ejemplo = (a,x,y,z) =>{
    let suma = a+x+y+z;
}

let z=5;
let y=8;
let a=8;
let x=6;

ejemplo(x,z,a,y);

//OBJETO
let firstName = "Juan";
const persona = {
    firstName,
    lastName: "Pedro",
    birthday: 20,
    status: true,
    fullName: function(){
        return `${this.firstName} ${this.lastName}`;
    }
}
//para agregarle atributos
persona.address="CABA";

//para acceder a los datos:
console.log(persona);
console.log(persona.firstName); //o con corchetes y comillas pero eso es mas para ARRAY
console.log(persona["firstName"]);
console.log(persona.fullName());

const {status,birthday}=persona; //no es un objeto. 
//Las llaves nos indican lo que estan dentro de las llaves.
//DESESUTRUCTURACION DE UN OBJETO
console.log(status);
console.log(birthday);
console.log(Object.keys(persona)); //Mostrara lo que esta antes de los dos puntos
console.log(Object.values(persona)); //mostrata los atributos en forma de array.
console.log(Object.entries(persona)); //devolvera en ARRAY todos los elementos con atributos
console.log(persona?.ejemplo); // para que pueda aparecer aunque no este declarado. 

// REPASO DE ARRAY
const arrayEjemplo = new Array("hola",2,3,4,true);
//longitus de un array:
console.log(arrayEjemplo.length);
console.log(arrayEjemplo);
//const arrayDos=[]; //array vacio
//o hacer un objeto:
const arrayDos = [3,"hola","buenas",3,4,5]
console.log(arrayDos.length);
console.log(arrayDos);
console.log(arrayDos[2]); // para acceder a la POSICION
//push: agregar uno o mas elementos al final
//unshift: agregar uno o mas elementos al principio
arrayDos.push(4,5,6,"hola");
console.log(arrayDos.length);
arrayDos.unshift("****");
console.log(arrayDos);
//POP elimina el ultimo elemento del vector
//SHIFT elimina el primer elemento del vector
arrayDos.pop() 
arrayDos.shift() 
console.log(arrayDos.length);
console.log(arrayDos);
//SPLICE (posicion, cantidad) para eliminar.
arrayDos.splice(2,1);
console.log(arrayDos);
//SPLICE tambien nos permite agregar
arrayDos.splice(1,0,"holas");
console.log(arrayDos);
//metodo forEach. En este ejemplo nos dice el recorrido y que posicion ocupa cada elemento.
arrayDos.forEach((elements,pos)=>{
console.log(`${elements} => POS ${pos}`)
});
console.log(arrayDos);

//MAP() se utiiza para interactuar con los elementos pero es lo mismo que forEach
arrayDos.map((elements,pos)=>{
    console.log(`${elements} => POS ${pos}`)
})

//filters find
let filterArray = arrayDos.filter((element)=>{
    return element <= 4;
});
console.log(filterArray);

filterArray = arrayDos.find((element)=>{
    return element <= 4;
})