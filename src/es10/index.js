//array.flat aplanar matrices
let array = [1,2,3,[1,2,3,[1,2,3]]];
console.log(array.flat(2))

//flatMap me permite mapear cada elemento despues pasarle una función y aplanarlo segun el resultado
let array=[1,2,3,4,5];
console.log(array.flatMap(value=>[value,value*2]));


//TrimStar/trimEnd me permite elimar espacios en blaco de un String

let  hello ='          hello world'
console.log(hello)
console.log(hello.trimStart());

let hello = 'hello world        '
console.log(hello)
console.log(hello.trimEnd());

//try/catch
//antes 
//try{

//}catch(error){
    //error
//}

//ahora
try{

}catch{
    error
}

//formEnties  trasforma clave/valor en un objeto
let entries =[["name","oscar"], ["age",32]];
console.log(Object.fromEntries(entries))

//Objeto de tipo simbolo que nos va permitir acceder auna descripción

let mySymbl = `My Symbol`;
let symbol = Symbol(mySymbl);
console.log(symbol.descripcion);