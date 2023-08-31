const prompt = require ("prompt-sync")({sigint:true});

// ACTIVIDAD.
let dataPersona = []; //array

//funcion que nos permite insertar elementos al array
const addDataPersona = (firstName,lastName,birthday,status,address,action)=>{
    let person = {
        firstName,
        lastName,
        birthday,
        status,
        address,
        action,
    }
    if(action==true){ //bandera que puede ser V o F.
        dataPersona.push(person);
    }
    else{
        dataPersona.unshift(person);
    }
}

addDataPersona("JUAN","PEREZ","20","1","CABA",true);
addDataPersona("MARIA","PEREZ","18","3","CABA",false);
addDataPersona("JOSE","PEREZ","15","2","CABA",true);
addDataPersona("ANTONIO","PEREZ","14","3","CABA",true);
addDataPersona("LUCIA","PEREZ","20","2","CABA",true);
addDataPersona("FELIPE","PEREZ","30","2","CABA",false);
addDataPersona("RAMIRO","PEREZ","16","2","CABA",true);
addDataPersona("LAURA","PEREZ","15","2","CABA",true);
addDataPersona("CARLOS","PEREZ","15","2","CABA",true);
addDataPersona("JUANA","PEREZ","30","2","CABA",true);

console.table(dataPersona);

/**for(let i = 1; i <=3; i++){
    let firstName = prompt("Ingrese el nombre: "); 
    let lastName = prompt("Ingrese el apellido: ");
    let birthday = parseInt(prompt("Ingrese la edad: "));
    let status = parseInt(prompt("Ingrese el status: "));
    let address = prompt("Ingrese la direccion: ");
    addDataPersona(firstName,lastName,birthday,status,address);
}
console.table(dataPersona);**/

//LA MAYORIA DE LA FUNCIONES DEVUELVE UN NUEVO ARRAY.
//FOREACH RECORRE EL ARRAY. 
const dataResult = (person, position)=>{
    console.log(`${position} => ${person.firstName} ${person.lastName}`)
}
dataPersona.forEach(dataResult); //aca se asigno a una variable, esa es la diferencia

//o

dataPersona.forEach((element,index)=>{
console.log(element.firstName); //RECORRE SOLO LOS NOMBRES. 
})

dataPersona.forEach(dataResult);

//FILTER 
//SI QUEREMOS SABER QUE PERSONAS TIENEN 18 O MAS Y ESTATUS 2:
let dataFilterPerson = dataPersona.filter((person)=>{
    return (person.birthday >= 18 && person.status == 2);
});
console.table(dataFilterPerson);
console.table(dataPersona);
// EL VECTOR ORIGINAL NUNCA SE MODIFICA, SINO QUE PUESTO MOSTRAR FILTROS. 

//FIND: BUSCA UN ELEMENTO DE ARRIBA HACIA ABAJO BUSCANDO EL PRIMERO QUE SE ENCUENTRA
//SINO SERA UNDEFINED. 
//FINDLAST: BUSCA LA PRIMERA COINCIDENCIA DE ABAJO - ARRIBA
// FINDINDEX DEVOLVER LA POSICION DEL ELEMENTO SI NO LO ENCUENTRA DEVUELVE -1

let dataFindPerson = dataPersona.find((person)=>{
    return person.status == 1;
})
console.table(dataFindPerson);

//SOME: DEVUELVE UN VALOR V O F SI LA CONDICION SE CUMPLE. 
dataFindPerson = dataPersona.some((element)=>{
    return element.birthday <=2;
})
console.log(dataFindPerson);

//MAP NOS PERMITE REALIZAR UNA INTERACCION CON LOS ELEMENTOS
let dataNewPerson = dataPersona.map((person)=>{
    //return {fullName:person.firstName+ '' + person.lastName};
    let newPerson = {
        fullName: person.firstName+ '' + person.lastName,
        edad: '',
        status: ''
    }
    if(person.birthday >= 18){
        newPerson.edad = "MAYOR DE EDAD";
    }
    else{
        newPerson.edad = "MENOR DE EDAD";
    }
    switch(person.status){
        case 1: newPerson.status = "Activo"; break;
        case 2: newPerson.status = "EN PROCESO"; break;
        case 3: newPerson.status = "BIEN"; break;
        default: newPerson.status = "Inactivo"; break;
    }
    return newPerson;
})
console.table(dataNewPerson);

// METODO DE ORDENADO
// SORT(); SE UTILIZA CUANDO LOS ELEMENTOS DEL ARRAY NO SON OBJETOS.
dataPersona.sorte( (a,b)=>{
    return a.birthday - b.birthday;
})
console.table(dataPersona);

let arrayData = [2,5,6,7,8,9,100,2,3,4]
arrayData.sort((a,b)=>{
    return a - b;
});
console.table(arrayData);