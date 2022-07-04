/**
 * Replace All
 * Reemplaza todas las coincidencias que encuentra.
 * No confundir con replace(), que reemplaza unicamente el 1er elem que encuentra.
 */
const string = "JavaScript es maravilloso, con JavaScript puedo crear el futuro de la web.";

// Replace
const replacedString = string.replace("JavaScript", "Python");
console.log(replacedString); // Python es maravilloso, con JavaScript puedo crear el futuro de la web.

// Replace All
const replacedString2 = string.replaceAll("JavaScript", "Python");
console.log(replacedString2); // Python es maravilloso, con Python puedo crear el futuro de la web.


/**
 * Metodos privados de clases
 * Permite añadir un prefijo(#) para indicar que un metodo de clase es privado.
 */
class Message {
    // show(val){ // Metodo publico
    #show(val){ // Metodo privado con prefijo #
        console.log(val);
    };

    // Getter y Setters privados
    /* get #add(val) {
        // ...
    }; */
};

const message = new Message();
message.show('Hola!'); 
// - Hola! (metodo publico)
// - TypeError: message.show is not a function  (metodo privado)


/**
 * Promise Any
 * Gestiona y captura la respuesta de la 1er promesa satisfactoria
 */
const promise1 = new Promise((resolve, reject) => reject("1. Promesa rechazada"));
const promise2 = new Promise((resolve, reject) => resolve("2. Primer Promesa resuelta"));
const promise3 = new Promise((resolve, reject) => resolve("3. Segunda Promesa resuelta"));

Promise.any([promise1, promise2, promise3])
    .then(response => console.log(response)); // 2. Primer Promesa resuelta


/**
 * Referencias debiles (WeakRef)
 * Permite mantener una referencia debil a otro objeto,
 * para evitar que este sea recogido por el garbage collector.
 * El garbage collector se encarga de liberar elems de la memoria.
 */
class AnyClass {
    constructor(element) {
        this.ref = new WeakRef(element);
    }
    /* { //...logica }  */
}


/**
 * Nuevos operadores lógicos de asignacion
 * - Asignacion AND lógico (x &&= y), , en caso de cumplirse una verdad, asigna un valor a una variable.
 * - Asignacion OR lógico (x ||= y), en caso de cumplirse una falsedad, asigna un valor a una variable.
 * - Asignacion Anulacion lógica (x ??= y), en caso de cumplirse undefined o null, asigna un valor a una variable.
 */
// Antes de ES2021
x && (x = y)
x || (x = y)
x ?? (x = y)

// Después de ES2021
x &&= y
x ||= y
x ??= y

// Ejemplos:
let isTrue = true;
let isFalse = false;
console.log(isTrue &&= isFalse); // false

let isTrue2 = true;
let isFalse2 = false;
console.log(isTrue2 ||= isFalse2); // true

let isTrue3 = undefined;
let isFalse3 = false;
console.log(isTrue3 ??= isFalse3); // false
