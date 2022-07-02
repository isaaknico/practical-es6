/** Parametros por defecto **/
// Antes de ES6
function newFunction(name, age, country) {
    var name = name || 'Isaak';
    var age = age || '25';
    var country = country || 'MX';
    console.log(name, age, country);
}

// Con ES6
function newFunction2(name = 'Isaak', age = 25, country = 'MX') {
    console.log(name, age, country);
}

newFunction2(); // Isaak, 25, MX
newFunction2('Ricardo', 23, 'CO'); //Ricardo, 23, CO


/** Concatenacion de variables **/ 
let hello = "Hello";
let world = "World";

// Antes de ES6
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase); // Hello World

// Con ES6 se usan Template strings
let epicPhrase2 = `${ hello } ${ world}`;
console.log(epicPhrase2); // Hello World


/** Multilíneas en strings **/
// Antes de ES6
let lorem = "Antes primera linea de nuestra frase. \n"
+ "segunda linea de nuestra frase epica.";
console.log(lorem);

// Con ES6 se usa tambien Template strings. Con los Template literals `` se puede sencillamente realizar un enter para pasar de línea.
let lorem2 = `Ahora con ES6 primera linea de otra frase epica 
otra segunda linea de otra frase epica`;
console.log(lorem2);


/** Desestructuracion **/
let person = {
    'name': 'Isaak',
    'age': 25,
    'country': 'MX'
}

// Antes de ES6
console.log(person.name, person.age);

// Con ES6
let { name, age} = person; // Extrae de person los elems que necesito
console.log(name, age);


/** Operador de propagación **/
// Permite unir diferentes elementos de forma amigable. Tenemos varios elementos en arreglos que queremos unir en un solo elemento para presentarlos.
let team1 = ['Isaak', 'Julian', 'Ricardo'];
let team2 = ['Valeria', 'Yesica', 'Camila'];

// Antes de ES6
let education = ['David', 'Isaak', 'Julian', 'Ricardo', 'Valeria', 'Yesica', 'Camila'];
console.log(education);

// Con ES6
let education2 = ['David', ...team1, ...team2];
console.log(education2);


/** Var, Let and Const **/
// Var define de forma global.
// Let solo está disponible en el bloque de codigo en el cual ha sido definido.
// Const constante que no va a cambiar su valor.

{
    var globalVar = "Global Var";
}

{
    let globalLet = "Global Let";
    console.log(globalLet);
}

console.log(globalVar);
console.log(globalLet); // Not defined

const a = 'b';
a = 'a';
console.log(a); // Assignment to constant variable.


/** Parametros de Objetos **/
let nameLet = "Isaak";
let ageLet = 25;

// Antes con ES5
obj = { name: nameLet, age: ageLet };
console.log(obj); // { nombre: 'Isaak', edad: 25 }

// Con ES6
obj2 = { nameLet, ageLet };
console.log(obj2); // { nombre: 'Isaak', edad: 25 }


/** Arrow Functions **/
const names = [
    { name: 'Isaak', age: 25 },
    { name: 'Yesica', age: 27 }
]

// Antes
let listOfNames = names.map(function (elem) {
    console.log(elem.name);
});

// Con ES6
let listOfNames2 = names.map(item => console.log(item.name));

const listOfNames3 = (name, age) => {
    //codigo
} 

const listOfNames4 = name => {
    //codigo
}

const square = num => num * num;

// var nombreVar = param => retornaFuncionalidad;


/** Promesas **/
const helloPromise = () => { // Asigna arrow function a const
    return new Promise((resolve, reject) => {  // Retorna una nueva promesa
        if (false) {
            resolve('Hey! Todo ok');
        } else {
            reject('Ups!! Algo salio mal');
        }
    });
}

// Ejecutar promesa
helloPromise()
    .then(response => console.log(response))
    .then(() => console.log('hola'))
    .catch(error => console.log(error));

     // .then: Permite obtener respuesta. Retorna en consola la respuesta
     // .then: Podemos anidar varios elementos then().
     // .catch: Permite obtener el error o valor no correcto. Retorna en consola.


/** Clases **/
// Con ES6
class Calculator { // Crea clase con la palabra reservada class
    constructor() { // Asigna constructor, que es un metodo para inicializar la clase
        // Asigna variables disponibles en el scope global
        this.valueA = 0;
        this.valueB = 0;
    }

    // Metodos de la clase
    sum(valueA, valueB) { // Recibe 2 parametros
        this.valueA = valueA;   // Asigna los valores que recibo a las 2 variables globales.
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
}

const calc = new Calculator();
console.log(calc.sum(2, 2));


/** Exportar e importar **/
// con ES6
import hello from './module';

hello();
console.log(hello());


/** Generators **/
function* helloWorld() {
    if (true) {
        yield 'Hello, ';
    }
    if (true) {
        yield 'World';
    }
}

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);