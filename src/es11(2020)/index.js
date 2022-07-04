/**
 * Dynamic import
 * Permite realizar la importacion de algun elem de forma dinámica.
 * Llama piezas de codigo solo cuando las necesitemos para no tenerlas siempre cargadas
 * y que nuestro proyecto no se vuelva muy grande.
 */
// index.html -> enlaza javascript (index.js) como type modulo
// file.js -> contendrá la logica del modulo importado.
const button = document.getElementById("btn");

button.addEventListener("click", async function () {
    const module = await import("./file.js");
    module.hello();
});


/**
 * Big int
 * Permite trabajar con numeros enteros muy grande(mayores 2^53) 
 * Hay 2 formas de usarlo:
 */
// 9007199254740991 era el valor numerico mas grande permitido hasta entonces
// 1- Añadiendo una "n" al final
const aBigNumber = 9007199254740991n; 
// 2- Con el metodo BigInt
const anotherBigNumber = BigInt(9007199254740991); 

console.log(aBigNumber); // 9007199254740991n
console.log(anotherBigNumber); // 9007199254740991n


/**
 * Promise All Settled
 * Devuelve una promesa que se resuelve despues de que todas las promesas dadas
 *  se hayan cumplido o rechazado, 
 *  en una array de objetos con el estado y el valor de cada promesa.
 */
// Promesas a utilizar
const promise1 = new Promise((resolve, reject) => reject("Reject"));
const promise2 = new Promise((resolve, reject) => resolve("Resolve"));
const promise3 = new Promise((resolve, reject) => resolve("Resolve 1"));

Promise.allSettled([promise1, promise2, promise3])
    .then(response => console.log(response)) 
    // [
    //  { status: 'rejected', reason: 'Reject' },
    //  { status: 'fulfilled', value: 'Resolve' },
    //  { status: 'fulfilled', value: 'Resolve 1' }
    // ]
// No confundir con PromiseAll que es rechazada al momento en que se rechaza una de las promesas.
// AllSettled, no importa el estado de las promesas, solo espera a que todas sean resueltas.


/**
 * Global this
 * Proporciona una forma estandar de acceder al valor global,
 * es un objeto compatible para cualquier plataforma(navegador, nodejs).
 */
console.log(window); // ReferenceError: window is not defined
console.log(globalThis); 
/**
<ref *1> Object [global] {
  global: [Circular *1],
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  queueMicrotask: [Function: queueMicrotask],
  performance: Performance {
    nodeTiming: PerformanceNodeTiming {
      name: 'node',
      entryType: 'node',
      startTime: 0,
      duration: 29.996336999931373,
      nodeStart: 0.1071139998966828,
      v8Start: 1.1811099998885766,
      bootstrapComplete: 22.6734099999303,
      environment: 12.412903999909759,
      loopStart: -1,
      loopExit: -1,
      idleTime: 0
    },
    timeOrigin: 1656948998748.042
  },
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  }
} */


/**
 * Operador Nullish coalescing (??)
 * Consiste en evaluar una variable si es undefined o null para asignarle un valor.
 * Devuelve su operando del lado derecho cuando el operando del lado izq es nulo o indefinido,
 * En caso contrario devuelve el operando del lado izquierdo.
 */
const foo = null ?? 'default string';
console.log(foo); // default string


/**
 * Optional chaining (?.)
 * Detiene la evaluación del objeto cuando el valor es undefined o null antes del ?., 
 * retornando undefined sin detener el programa por un error.
 */
const user = {};
// Antes
// No puede leer propiedad email porque no existe
//console.log(user.profile.email); // TypeError: Cannot read properties of undefined (reading 'email')

// Con ES11
// Lee el codigo por niveles para no romper la app
console.log(user?.profile?.email); // undefined

// Ejemplo
if (user?.profile?.email) {
    console.log('email');
} else {
    console.log('fail'); // fail
}