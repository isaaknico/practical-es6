/**
 * Operador de reposo
 */
const obj = {
    name: 'Isaak',
    age: 25,
    country: 'MX',
};

let { name, ...all } = obj;
console.log(name, all); // Isaak { age: 25, country: 'MX' }
console.log(all); // { age: 25, country: 'MX' }


/**
 * Propiedades de propagación
 */
const obj2 = {
    name: 'Isaak',
    age: 25,
};

const obj3 = {
    ...obj2,
    country: 'MX',
};
console.log(obj3); // { name: 'Isaak', age: 25, country: 'MX' }

/**
 * Promise finally
 */
// Promesa
const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
        ? setTimeout(() => resolve('Hello World'), 3000)
        : reject(new Error('Test Error'))
    });
};

helloWorld()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(() => console.log('Finalizo')) //<- promise .finally


/**
 * Manejo de Regex (Expresiones regulares)
 */
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec('2022-07-02'); 
    // exec( ) —> Ejecuta una búsqueda por una coincidencia en una cadena. 
    // Devuelve un arreglo de información o null en una discrepancia.
// match agrupo bloques de regex y accede a cada uno de ellos
const year = match[1];
const month = match[2];
const day = match[3];

console.log(year, month, day);