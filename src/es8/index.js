/**
 * Metodos transf objs:
 */
const data = {
    frontend: 'Isaak',
    backend: 'Isabel',
    design: 'Ana'
}

/** Object entries() **/
const entries = Object.entries(data);
console.log(entries); // [ ['frontend', 'Isaak'], ['backend', 'Isabel'], ['design', 'Ana'] ]
console.log(entries.length); // 3

/** Object values() **/
 const values = Object.values(data)
 console.log(values) // [ 'Isaak', 'Isabel', 'Ana' ]
 console.log(values.length) // 3


/**
 * padStart & padEnd
 */
const myString = 'hello'
console.log(myString.padStart(8, 'hi ')) // hi hello
console.log(myString.padEnd(12, ' _____')) // hello _____ 
console.log('food'.padEnd(12, ' ______')) // food ______ 


/**
 * Trailing commas
 */
const usuario = {
    name: 'Isaak',
    email: "isaak@correo.com",
    age: 25, //, <-- Trailing comma
}


/**
 * Async await
 */
// Promesa
const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)  // if ternario
            ? setTimeout(() => resolve('Hello World'), 3000)
            : reject(new Error('Test error'))
            //setTimeout(): Recibe 2 param, una funcion y el tiempo en ms.
    })
};
    
// Funcion que implementa async
const helloAsync = async () => {
    const hello = await helloWorld();
    // const hello2 = await helloWorld2(); Podemos añadir mas constantes
    console.log(hello);
}
helloAsync(); // Hello World

// Propuesta forma correcta
const anotherFunction = async () => {
    try { // Encapsula lo que vamos a ejecutar
        const hello = await helloWorld();
        console.log(hello);
    } catch (error) { // Captura el error
        console.log(error);
    }
};
anotherFunction(); // Hello World