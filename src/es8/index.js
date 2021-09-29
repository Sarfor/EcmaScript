//Objec.entries que me va permitir devolver la clave y los valores de una matriz, con este objec tambien podemos saber la cantidad de elementos que tiene el arreglo ya que tenemos incorparado el .length
const data ={
    frontend: 'oscar',
    backend: 'Isabel',
    design: 'Ana',
}

const entries = Object.entries(data);
console.log(entries);
console.log(entries.length);

//Object values me devuelve los valores de un objeto a  un arreglo

const data= {
    frontend: 'oscar',
    backend: 'Isabel',
    design: 'Ana',
}

const values = Object.values(data);
console.log(values);
console.log(values.length)

//padding me permite añadir caracteres a un String
const String = 'hello';
console.log(String.padStart(7,'hi'))
console.log(String.padEnd(12, '----'))
console.log('food'.padEnd(12, '----'))

// trailing-comas  me permite establecer una forma en la cual es mas amigables para los desarrolladores añadir más elementos sin caer en un error

const obj ={
    name: 'oscar', //Esta como me indica que puede haber un valor como no 
}

const helloWorld = () => {
    return new Promise((resolve, reject) => {
      (false)
        ? setTimeout(() => resolve('Hello World'), 3000)
        : reject(new Error('Test Error'))
    })
  };
  
  const helloAsync = async () => {
    const hello = await helloWorld();
    console.log(hello);
  };
  
  helloAsync();

const anothorFunction = async ()=>{
    try{
        const hello = await helloWorld();
        console.log(hello);
    }catch (error){
        console.log(error);
    }
};
anothorFunction();



