// console.log('Hello world');

// NUNCA se debe usar 'var' en React, Vue, Angular, etc.
// Esto se debe a que 'var' no respeta el scope de bloque, 
// lo que puede causar problemas de integridad dentro del programa.

// En lugar de 'var', se deben usar 'let' y 'const'.

// Ejemplo de 'let':

let nombre01: string = "Jose Carrasco";

// 'let' permite la reasignación de valor pero respeta el scope de bloque
let apellido01: string = "Encinas";
console.log(apellido01);  // Output: Encinas

if (true) {
    let apellido01: string = "Carrasco";
    console.log(apellido01);  // Output: Carrasco
}

console.log(apellido01);  // Output: Encinas

// Ejemplo de 'const':

const ciudad01: string = "Madrid";
console.log(ciudad01);  // Output: Madrid

// 'const' no permite la reasignación de valor
// Si intentamos hacer esto, obtendremos un error
// ciudad01 = "Barcelona";  // Error: Assignment to constant variable.

// 'const' también respeta el scope de bloque
if (true) {
  const ciudad01: string = "Barcelona";
  console.log(ciudad01);  // Output: Barcelona
}

console.log(ciudad01);  // Output: Madrid

let x01: number = 1;
let y01: number = 2;
let z01: number = 3;

if (true) {
  var x01: number = 100;  // 'var' no respeta el scope de bloque
  let y01: number = 200;  // 'let' respeta el scope de bloque
  const z01: number = 300;  // 'const' respeta el scope de bloque

  console.log("Dentro del bloque: ", x01, y01, z01);  // Output: 100, 200, 300
}

console.log("Fuera del bloque: ", x, y, z);  // Output: 100, 2, 3
