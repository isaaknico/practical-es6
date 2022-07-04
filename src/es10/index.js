/** Flat
 * Permite aplanar arreglos indicando el nivel de profundidad.
 */
let array = [1, 2, 3, [1, 2, 3, [1, 2, 3]]];

console.log(array.flat());  // [ 1, 2, 3, 1, 2, 3, [ 1, 2, 3 ] ] Aplana 1er nivel de prof.
console.log(array.flat(2)); // [ 1, 2, 3, 1, 2, 3, 1, 2, 3 ] Aplana hasta 2do nivel de prof.
console.log(array.flat(3)); // [ 1, 2, 3, 1, 2, 3, 1, 2, 3 ] 


/** FlatMap
 * Permite mapear arreglos para despues aplanarlo en una profundidad.
 */
let array2 = [1,2,3,4,5];
console.log(array2.flatMap(value => [value, value * 2])); // [ 1, 2, 2, 4,  3, 6, 4, 8, 5, 10 ]


/** Trim
 * Permite eliminar los espacios en blanco de un string
 * incluso al inicio o al final.
 */
let hello = '      hello world     ';
console.log(hello);             // '      hello world     '
console.log(hello.trim());      // 'hello world'
console.log(hello.trimStart()); // 'hello world     '
console.log(hello.trimEnd());   // '     hello world'


/** Optional catch error
 * Podemos no implementar el error y aun estará disponible en el scope del catch.
 */
// Antes
try {
    // ...
} catch (error) {
    error
}

// Con ES10
try {
    // ...
} catch { //<- no especifica error
    error
}


/**
 * From Entries
 * Transforma un arreglo [[clave, valor],...] en objetos
 */
let entries = [["name", "Isaak"], ["age", "25"]];
console.log(Object.fromEntries(entries)); // { name: 'Isaak', age: '25' }


/**
 * Objeto de tipo simbolo
 * Permite acceder a la descripcion de un objeto de tipo simbolo
 */
let mySymbl = `My Symbol description`;
let symbol = Symbol(mySymbl);
console.log(symbol.description); // My Symbol description