// FUNCIONES

// Función tradicional
// Se recomienda tipar los parámetros y el valor de retorno.
function saludar01(): void {
  console.log("hola 1");
}
saludar();  // Output: hola 1

// Función anónima asignada a una variable
// Se recomienda tipar explícitamente los parámetros y el valor de retorno.
const saludar2 = function(): void {
  console.log("hola 2");
};
saludar2();  // Output: hola 2

// Funciones flecha
// Las funciones flecha tienen un prototipo distinto y no tienen su propio scope, comparten el scope del contexto donde fueron creadas.
// Se recomienda tipar explícitamente los parámetros y el valor de retorno.
const saludar3 = (): void => {
  console.log("hola 3");
};
saludar3();  // Output: hola 3

// Función tradicional con parámetros
// Se recomienda tipar explícitamente los parámetros y el valor de retorno.
function sumar01(a: number, b: number): number {
  return a + b;
}
console.log(sumar01(2, 3));  // Output: 5

// Función anónima con parámetros
// Se recomienda tipar explícitamente los parámetros y el valor de retorno.
const restar = function(a: number, b: number): number {
  return a - b;
};
console.log(restar(5, 3));  // Output: 2

// Función flecha con parámetros
// Se recomienda tipar explícitamente los parámetros y el valor de retorno.
const multiplicar = (a: number, b: number): number => a * b;
console.log(multiplicar(2, 3));  // Output: 6

// Función flecha con un solo parámetro
// Se recomienda tipar explícitamente el parámetro y el valor de retorno.
const cuadrado = (num: number): number => num * num;
console.log(cuadrado(4));  // Output: 16

// Función flecha que retorna un objeto
// Se recomienda tipar explícitamente los parámetros y el valor de retorno.
interface Persona {
  nombre: string;
  edad: number;
}

const crearPersona = (nombre: string, edad: number): Persona => ({ nombre, edad });
console.log(crearPersona("Juan", 30));  // Output: { nombre: 'Juan', edad: 30 }

// Ejemplos adicionales

// Función como argumento
// Se recomienda tipar el parámetro como una función.
function ejecutarFuncion01(fn: () => void): void {
  fn();
}
ejecutarFuncion01(saludar);  // Output: hola 1

// Función que retorna otra función
// Se recomienda tipar explícitamente los parámetros y el valor de retorno.
function crearSaludo01(saludo: string): (nombre: string) => void {
  return function(nombre: string): void {
    console.log(`${saludo}, ${nombre}!`);
  };
}
const saludoHola = crearSaludo01("Hola");
saludoHola("Carlos");  // Output: Hola, Carlos!

// Uso de una función flecha en un método de array
// Se recomienda tipar explícitamente los parámetros y el valor de retorno.
const numeros: number[] = [1, 2, 3, 4, 5];
const numerosDuplicados: number[] = numeros.map((num: number): number => num * 2);
console.log(numerosDuplicados);  // Output: [2, 4, 6, 8, 10]

// Función autoejecutable (IIFE - Immediately Invoked Function Expression)
// Se recomienda tipar explícitamente los parámetros y el valor de retorno.
(function(): void {
  console.log("Esta función se ejecuta inmediatamente!");
})();  // Output: Esta función se ejecuta inmediatamente!

// Función flecha como método de un objeto
// Se recomienda tipar explícitamente los parámetros y el valor de retorno.
const persona = {
  nombre: "Ana",
  saludar: function(): void {
    console.log(`Hola, soy ${this.nombre}`);
  },
  // Las funciones flecha no son adecuadas como métodos en objetos, ya que no tienen su propio 'this'.
  saludarFlecha: (): void => {
    console.log(`Hola, soy ${persona.nombre}`);  // 'this' aquí no se refiere al objeto 'persona'
  }
};
persona.saludar();  // Output: Hola, soy Ana
persona.saludarFlecha();  // Output: Hola, soy Ana
