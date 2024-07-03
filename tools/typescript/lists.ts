// "LISTAS"

// Un objeto que se comporta como una lista en TypeScript
const list: [number, number, string, () => void, number] = [2, 4, "paul", () => { alert("HUGOOOOO"); }, 3.14159];

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

const objeto3: (string | number | (() => void))[] = [
    ...list, 
    ...Object.keys(nuevoObjeto).map(key => nuevoObjeto[key as keyof typeof nuevoObjeto]), 
    2
];

// Recorrer la nueva lista e imprimir cada elemento
objeto3.forEach(i => console.log(i));

// Crear una lista vacía y agregar elementos dinámicamente
const frutas: string[] = [];
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
const numeros: number[] = [1, 2, 3, 4, 5, 6];
const numerosPares: number[] = numeros.filter(numero => numero % 2 === 0);
console.log(numerosPares);  // Output: [2, 4, 6]

// Mapear una lista
const cuadrados: number[] = numeros.map(numero => numero * numero);
console.log(cuadrados);  // Output: [1, 4, 9, 16, 25, 36]

// Reducir una lista a un solo valor
const suma: number = numeros.reduce((acumulador, numero) => acumulador + numero, 0);
console.log(suma);  // Output: 21
