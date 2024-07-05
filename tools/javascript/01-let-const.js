// console.log('Hello world');

// NUNCA se debe usar 'var' en React, Vue, Angular, etc.
// Esto se debe a que 'var' no respeta el scope de bloque, 
// lo que puede causar problemas de integridad dentro del programa.

// En lugar de 'var', se deben usar 'let' y 'const'.

// Ejemplo de 'let':

let nombre = "Jose Carrasco";

// 'let' permite la reasignación de valor pero respeta el scope de bloque
let apellido = "Encinas";
console.log(apellido);  // Output: Encinas

if (true) {
  let apellido = "Carrasco";
  console.log(apellido);  // Output: Carrasco
}

console.log(apellido);  // Output: Encinas

// Ejemplo de 'const':

const ciudad = "Madrid";
console.log(ciudad);  // Output: Madrid

// 'const' no permite la reasignación de valor
// Si intentamos hacer esto, obtendremos un error
// ciudad = "Barcelona";  // Error: Assignment to constant variable.

// 'const' también respeta el scope de bloque
if (true) {
  const ciudad = "Barcelona";
  console.log(ciudad);  // Output: Barcelona
}

console.log(ciudad);  // Output: Madrid

var x = 1;
let y = 2;
const z = 3;

if (true) {
  var x = 100;  // 'var' no respeta el scope de bloque
  let y = 200;  // 'let' respeta el scope de bloque
  const z = 300;  // 'const' respeta el scope de bloque

  console.log("Dentro del bloque: ", x, y, z);  // Output: 100, 200, 300
}

console.log("Fuera del bloque: ", x, y, z);  // Output: 100, 2, 3
