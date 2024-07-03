// Tipos de variable en TypeScript

// Booleano (boolean)
// Se recomienda tipar explícitamente las variables booleanas.
let cancelado: boolean = true;
console.log(typeof cancelado);  // Output: boolean

// Número (number)
// Se recomienda tipar explícitamente las variables numéricas.
let edad: number = 15;
let dinero: number = 9.99;
console.log(typeof edad);  // Output: number
console.log(typeof dinero);  // Output: number

// BigInt
// Los BigInt se utilizan para representar números enteros muy grandes.
// La 'n' al final del número indica que es un BigInt.
// Se recomienda tipar explícitamente las variables BigInt.
let edadGil: bigint = 123841423142909809099870987809879878787n;
console.log(edadGil);  // Output: 123841423142909809099870987809879878787n
console.log(typeof edadGil);  // Output: bigint

// No se puede mezclar tipos BigInt y number directamente en operaciones
// Esto generará un error: TypeError: Cannot mix BigInt and other types
// console.log(edadGil + edad);

// Undefined
// Se recomienda usar el tipo `undefined` para variables que pueden no tener un valor asignado.
let course: undefined;
console.log(typeof course);  // Output: undefined

// Null
// Aunque null es un tipo especial, su tipo es 'object' en JavaScript.
// Se recomienda usar el tipo `null` para variables que intencionalmente no tienen valor.
course = null;
console.log(typeof course);  // Output: object

// Undefined vs Null
// `undefined` indica que una variable ha sido declarada pero no tiene un valor asignado.
// `null` se usa para indicar que una variable intencionalmente no tiene valor.
let nota: undefined | null;
console.log(nota);  // Output: undefined
nota = null;
console.log(nota);  // Output: null

// Symbol
// Los Symbol se utilizan para crear identificadores únicos.
// Se recomienda tipar explícitamente las variables Symbol.
let badani: symbol = Symbol("Pablo");
let acker: symbol = Symbol("Pablo");

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
// Se recomienda tipar explícitamente las variables de tipo string.
let nombre: string = "Jose Carrasco";
console.log(typeof nombre);  // Output: string

// Object
// Se recomienda definir la forma del objeto utilizando interfaces o tipos.
interface Persona {
  nombre: string;
  apellido: string;
  edad: number;
}

let persona: Persona = {
  nombre: "Jose",
  apellido: "Carrasco",
  edad: 30
};
console.log(typeof persona);  // Output: object

// Array (es un tipo especial de objeto)
// Se recomienda tipar explícitamente los arrays.
let frutas: string[] = ["manzana", "naranja", "pera"];
console.log(typeof frutas);  // Output: object

// Función (Function)
// Se recomienda tipar explícitamente las funciones.
function saludarTs(): void {
  console.log("Hola!");
}
console.log(typeof saludar);  // Output: function

// Comparación de igualdad y diferencia en tipos primitivos

// Comparación de booleanos
let isActive: boolean = true;
let isCancelled: boolean = false;
console.log(isActive === isCancelled);  // Output: false

// Comparación de números
let numero1: number = 5;
let numero2: number = 10;
console.log(numero1 === numero2);  // Output: false

// Comparación de strings
let saludo1: string = "Hola";
let saludo2: string = "Hola";
console.log(saludo1 === saludo2);  // Output: true

// Comparación de objetos (diferentes instancias)
let objeto1: { a: number } = { a: 1 };
let objeto2: { a: number } = { a: 1 };
console.log(objeto1 === objeto2);  // Output: false

// Comparación de arrays (diferentes instancias)
let array1: number[] = [1, 2, 3];
let array2: number[] = [1, 2, 3];
console.log(array1 === array2);  // Output: false
