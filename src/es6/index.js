function newFunction(name, age, country) {
    var name = name || 'oscar';
    var age = age || 32;
    var country = country || 'MX';
    console.log(name, age, coutry);
}


//es6

function newFunction2(name = 'oscar', age = 32, country = 'MX') {
    console.log(name, age, country);
};

nuewFuntion2();
newFunction2('Ricardo', '23', 'CO')


let hello = "HEllO";
let world = "World";
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);
let epicPhrase2 = `${hello} ${world}` //Concatenación de elementos
console.log(epicPhrase2);

//multi Linea en es6
let lorem = "Qui conseguatur. Commodi. Ipsum vel duis yet minima \n"// Era necesario agregar el salto de lini
    + "otra frase epica que necesitamos."

let lorem2 = `otra frase epica que necesitamos
ahora es otra frase epica`; // -ya no es necesario agregar \n para el salta de línea

console.log(lorem);
console.log(lorem2)

let person = {
    'name': 'oscar',
    'age': 32,
    'country': 'MX'
}

console.log(person.name, person.age, person.country); //Es necesario mencionar la varible por cada elemento es decir objeto.key

let { name, age, country } = person; //En este caso solo es mencionar los elemntos y de que variable pertenecen una sola vez
console.log(name, age, country);

//operador de propagación 
let team1 = ['Oscar', 'Julian', 'Ricardo'];
let team2 = ['Valeria', 'Angelica', 'Camila'];

let education = ['David', ...team1, ...team2]; // los tres puntos lo que nos permite es agrupar todos los elementos del arreglo y traerlo sin necesidad de copiar uno por uno
console.log(education)

//var hola= 'hola' Esta disponible de forma global
//let hola='hola' Esta disponible en el scope es decir en el bloque de codigo en el cual va a hacer llamdo

{
    var globalVar = 'Global Var';
}
{
    let globalLet = 'Global Let';
    console.log(globalLet);
}

console.log(globalVar);
console.log(globalLet);

//const nos permite establecer una variable
const a = 'b';
a = 'a'; //No me la va permitir ya que no es posible reaccinar un valor con este tipo de variable(Constante)


let name = 'sara';
let age = 23;
//es5
obj = { name: name, age: age };
//es6
obj2 = { name, age };
console.log(obj2)

//Arrow funtions o funciones tipo flecha (Funciones anonimas), solbentan un problema particular, trabaja con dos elementos una sintasis más reducida y un dis no vinculable
const names = [
    { name: 'Sara', age: 23 },
    { name: 'Oscar', age: 32 }
]

let listOfName = names.map(function (item) {
    console.log(item.name);
});

let listOfName2 = names.map(item => console.log(item.name));

const listOfNames3 = (name, age, country) => {
    ... //Bloque de codigo
}

const listOfNames4 = name => {
    ... //Bloque de codigo
}

const square = num => num * num;

//Promesas se utilizan para manejar el asincronismo de java. significa algo va a pasar
const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if (false) {
            resolve('Hey!');
        } else {
            reject('Ups!!');
        }
    })
}
helloPromise()
    .then(response => console.log(response))
    .then(() => console.log('hola'))
    .catch(error => console.log(error))

class calculator {
    constructor() {
      this.valueA = 0;
      this.valueB = 0;
    }
    sum(valueA, valueB) {
      this.valueA = valueA;
      this.valueB = valueB;
      return this.valueA + this.valueB;
    }
}

const calc = new calculator();
console.log(calc.sum(2, 2));

import {hello} from './module'

hello();

function*helloWorld(){
if (true){
    yield 'Hello, '
}
if(true){
    yield 'World'
}
};
const generatorHello = helloWorld();
console.log (generatorHello.next().value);
console.log (generatorHello.next().value);
console.log (generatorHello.next().value);















