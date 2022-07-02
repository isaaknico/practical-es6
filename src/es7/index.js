/** Metodo .includes() **/
// Ej 1
let numbers = [1, 2, 3, 7, 8];

if (numbers.includes("7")) {
    console.log("Si se encuentra el valor 7");
} else {
    console.log("No se encuentra");
}

// Ej 2
const frutas = ["manzana", "pera", "piña", "uva"]
frutas.includes("manzana") // true
frutas.includes("Pera") // false
frutas.includes("sandía") // false
frutas.includes("manzana", 1) // false
frutas.includes("piña", 1) // false
frutas[0].includes("man") // true

// Ej 3
const saludo = "Hola mundo"
saludo.includes("Hola") // true
saludo.includes("Mundo") // false
saludo.includes(" ") // true
saludo.includes("Hola", 1) // false
saludo.includes("mundo", -5) // true


/** Operador de potenciación **/
let base = 4;
let exponent = 3;
let result = base ** exponent; 

console.log(result); // 64