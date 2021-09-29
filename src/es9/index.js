// Operador de reposo este me permite extraer las proiedades de un objeto que aun no se hay construido
const obj ={
    name: 'oscar',
    age: 32,
    country: 'MX'
};

let {country, ...all}= obj;
console.log(all);

//Propiedades de propagación vamos a poder unir uno o dos o cuantos elementos queramos de objetos a un nuevo objeto
const obj ={
    name:'oscar',
    age: 32
} 

const obj1= {
    ...obj,
    country:'MX',
}
console.log(obj1)


//promise finally podemos saber cuando a terminado el llmado y poder ejecutar un función

const helloWorld =()=>{
    return new Promise ((resolve, reject)=>{
        (true)
        ? setTimeout (() =>resolve('Hello World'),3000 )  //resolve('Hello World')
        : reject (new Error ('Test Error'))
    });
};

helloWorld()
.then (response => console.log(response))
.catch(error => console.log(error))
.finally (()=> console.log('Finalizo'))

//regex Como podemos agrupar bloques y poder acceder a cada uno de ellos
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
const match = regexData.exec('2018-04-28');
const year = match[1];
const month = match[2];
const day = match[3];
console.log(year, month, day);