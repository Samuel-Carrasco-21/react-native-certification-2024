// "LISTAS"

// Un objeto que se comporta como una lista en JavaScript
const list = [2, 4, "paul", () => { alert("HUGOOOOO"); }, 3.14159];

// Desestructuración de listas
const [laNota, practica, profe, f, pi] = list;

console.log(profe);  // Output: paul
console.log(f);  // Output: [Function (anonymous)]

// Crear una nueva lista combinando la lista original y otro objeto
const nuevoObjeto = {
    placa: "5719HHP",
    marca: "Ford",
    nombre: "Jose",
    licencia: "3421423",
    year: 2023,
};
const list = [2, 4, "paul", () => { alert("HUGOOOOO"); }, 3.14159];
// devolver valores de nuevoObjeto
console.log(Object.values(nuevoObjeto).map(valorAtributo => valorAtributo));
// devolver nombres de los atributos de nuevoObjeto
console.log(Object.keys(nuevoObjeto).map(key => key));

const objeto3 = [...list, ...(Object.values(nuevoObjeto).map(valorAtributo => valorAtributo)), 2];

// Recorrer la nueva lista e imprimir cada elemento
objeto3.forEach(i => console.log(i));

// filtrar numeros
const nuevaListaA = objeto3.filter((item) => typeof item==="number");
console.log(nuevaListaA);

// Crear una lista vacía y agregar elementos dinámicamente
const frutas = [];
frutas.push("manzana");
frutas.push("naranja");
frutas.push("pera");
console.log(frutas);  // Output: ["manzana", "naranja", "pera"]

// Eliminar el último elemento de la lista
frutas.pop();
console.log(frutas);  // Output: ["manzana", "naranja"]

// Eliminar el primer elemento de la lista
frutas.shift();
console.log(frutas);  // Output: ["naranja"]

// Añadir un elemento al inicio de la lista
frutas.unshift("uva");
console.log(frutas);  // Output: ["uva", "naranja"]

// Filtrar una lista
const numeros = [1, 2, 3, 4, 5, 6];
const numerosPares = numeros.filter(numero => numero % 2 === 0);
console.log(numerosPares);  // Output: [2, 4, 6]

// Mapear una lista
const cuadrados = numeros.map(numero => numero * numero);
console.log(cuadrados);  // Output: [1, 4, 9, 16, 25, 36]

// Reducir una lista a un solo valor
const suma = numeros.reduce((acumulador, numero) => acumulador + numero, 0);
console.log(suma);  // Output: 21