// Tipos de variable en JavaScript

// Booleano (bool)
let cancelado = true;
console.log(typeof cancelado);  // Output: boolean

// Número (number)
let edad = 15;
let dinero = 9.99;
console.log(typeof edad);  // Output: number
console.log(typeof dinero);  // Output: number

// BigInt
// Los BigInt se utilizan para representar números enteros muy grandes.
// La 'n' al final del número indica que es un BigInt.
let edadGil = BigInt(123841423142909809099870987809879878787n);
console.log(edadGil);  // Output: 123841423142909809099870987809879878787n
console.log(typeof edadGil);  // Output: bigint

// No se puede mezclar tipos BigInt y number directamente en operaciones
// Esto generará un error: TypeError: Cannot mix BigInt and other types
console.log(edadGil + edad);

// Undefined
let course;
console.log(typeof course);  // Output: undefined


const object = undefined;

console.log(null===undefined);

// Null
// Aunque null es un tipo especial, su tipo es 'object' en JavaScript.
course = null;
console.log(typeof course);  // Output: object

// Undefined vs Null
// undefined indica que una variable ha sido declarada pero no tiene un valor asignado.
// null se usa para indicar que una variable intencionalmente no tiene valor.
let nota;
console.log(nota);  // Output: undefined
nota = null;
console.log(nota);  // Output: null

// Symbol
// Los Symbol se utilizan para crear identificadores únicos.
let badani = Symbol("Pablo");
let acker = Symbol("Pablo");

console.log(badani);  // Output: Symbol(Pablo)
console.log(acker);  // Output: Symbol(Pablo)

// Cada Symbol es único, incluso si tienen la misma descripción.
if (badani === acker) {
    console.log("iguales");
} else {
    console.log("diferentes");  // Output: diferentes
}

// Ejemplo adicional para String y Object

// String
let nombre = "Jose Carrasco";
console.log(typeof nombre);  // Output: string

// Object
let persona = {
  nombre: "Jose",
  apellido: "Carrasco",
  edad: 30
};
console.log(typeof persona);  // Output: object

// Array (es un tipo especial de objeto)
let frutas = ["manzana", "naranja", "pera"];
console.log(typeof frutas);  // Output: object

// Función (Function)
function saludar() {
    console.log("Hola!");
}
console.log(typeof saludar);  // Output: function

// Comparación de igualdad y diferencia en tipos primitivos

// Comparación de booleanos
let isActive = true;
let isCancelled = false;
console.log(isActive === isCancelled);  // Output: false

// Comparación de números
let numero1 = 5;
let numero2 = 10;
console.log(numero1 === numero2);  // Output: false

// Comparación de strings
let saludo1 = "Hola";
let saludo2 = "Hola";
console.log(saludo1 === saludo2);  // Output: true

// Comparación de objetos (diferentes instancias)
let objeto1 = { a: 1 };
let objeto2 = { a: 1 };
console.log(objeto1 === objeto2);  // Output: false

// Comparación de arrays (diferentes instancias)
let array1 = [1, 2, 3];
let array2 = [1, 2, 3];
console.log(array1 === array2);  // Output: false
