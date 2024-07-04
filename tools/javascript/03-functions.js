// FUNCIONES

// Función tradicional
function saludar() {
  console.log("hola 1");
};
saludar();  // Output: hola 1

// Función anónima asignada a una variable
const saludar2 = function() {
  console.log("hola 2");
};
saludar2();  // Output: hola 2

// Funciones flecha
// Las funciones flecha tienen un prototipo distinto y no tienen su propio scope, comparten el scope del contexto donde fueron creadas
const saludar3 = () => {
  console.log("hola 3");
};
saludar3();  // Output: hola 3

// Función tradicional con parámetros
function sumar(a, b) {
  return a + b;
}
console.log(sumar(2, 3));  // Output: 5

// Función anónima con parámetros
const restar = function(a, b) {
  return a - b;
};
console.log(restar(5, 3));  // Output: 2

// Función flecha con parámetros
const multiplicar = (a, b) => a * b;
console.log(multiplicar(2, 3));  // Output: 6

// Función flecha con un solo parámetro
const cuadrado = num => num * num;
console.log(cuadrado(4));  // Output: 16

// Función flecha que retorna un objeto
const crearPersona = (nombre, edad) => ({ nombre, edad });
console.log(crearPersona("Juan", 30));  // Output: { nombre: 'Juan', edad: 30 }

// Ejemplos adicionales

// Función como argumento
function ejecutarFuncion(fn) {
  fn();
}
ejecutarFuncion(saludar);  // Output: hola 1

// Función que retorna otra función
function crearSaludo(saludo) {
  return function(nombre) {
    console.log(`${saludo}, ${nombre}!`);
  };
}
const saludoHola = crearSaludo("Hola");
saludoHola("Carlos");  // Output: Hola, Carlos!

// Uso de una función flecha en un método de array
const numeros = [1, 2, 3, 4, 5];
const numerosDuplicados = numeros.map(num => num * 2);
console.log(numerosDuplicados);  // Output: [2, 4, 6, 8, 10]

// Función autoejecutable (IIFE - Immediately Invoked Function Expression)
(function() {
  console.log("Esta función se ejecuta inmediatamente!");
})();  // Output: Esta función se ejecuta inmediatamente!

// Función flecha como método de un objeto
const persona = {
  nombre: "Ana",
  saludar: function() {
    console.log(`Hola, soy ${this.nombre}`);
  },
  // Las funciones flecha no son adecuadas como métodos en objetos, ya que no tienen su propio 'this'
  saludarFlecha: () => {
    console.log(`Hola, soy ${this.nombre}`);  // 'this' aquí no se refiere al objeto 'persona'
  }
};
persona.saludar();  // Output: Hola, soy Ana
persona.saludarFlecha();  // Output: Hola, soy undefined
