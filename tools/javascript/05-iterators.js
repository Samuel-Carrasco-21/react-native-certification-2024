// ITERADORES

const profes = [
  'paul',
  'alexis',
  'eynar',
  'hernan',
  'gil',
  'ricardo'
];

// forEach: Solo recorre cada elemento del array sin retornar un nuevo array
const ob = profes.forEach(profe => {
  return profe;  // El valor retornado aquí no se utiliza por forEach
});
console.log(ob);  // Output: undefined

// map: Recorre cada elemento del array y retorna un nuevo array con los valores transformados
const ob2 = profes.map(profe => {
  return profe;
});
console.log(ob2);  // Output: ['paul', 'alexis', 'eynar', 'hernan', 'gil', 'ricardo']

const libros = [
  { titulo: 'La sombra del viento', autor: 'Carlos Ruiz Zafón', paginas: 512 },
  { titulo: 'Cien años de soledad', autor: 'Gabriel García Márquez', paginas: 432 },
  { titulo: 'El código Da Vinci', autor: 'Dan Brown', paginas: 454 },
  { titulo: 'El señor de los anillos', autor: 'J.R.R. Tolkien', paginas: 1178 }
];

// filter: Crea un nuevo array con todos los elementos que cumplen una condición
const librosNuevos = libros.filter(item => item.paginas >= 500);
console.log(librosNuevos);  
// Output: [{ titulo: 'La sombra del viento', autor: 'Carlos Ruiz Zafón', paginas: 512 }, { titulo: 'El señor de los anillos', autor: 'J.R.R. Tolkien', paginas: 1178 }]

const colores = ["rojo", "azul", "blanco"];

// includes: Verifica si un array incluye un cierto elemento
console.log(colores.includes("rojo"));  // Output: true

// some: Verifica si al menos un elemento del array cumple con una condición
const numeros = [1, 2, 3, 4, 5];
console.log(numeros.some(i => i % 2 === 0));  // Output: true

// every: Verifica si todos los elementos del array cumplen con una condición
console.log(numeros.every(i => i % 2 === 0));  // Output: false

// reduce: Aplica una función a un acumulador y a cada valor del array (de izquierda a derecha) para reducirlo a un solo valor
console.log(numeros.reduce((a, b) => a + b));  // Output: 15

// Ejemplos adicionales

// find: Retorna el primer elemento del array que cumple con una condición
const libroEncontrado = libros.find(libro => libro.autor === 'Dan Brown');
console.log(libroEncontrado);  
// Output: { titulo: 'El código Da Vinci', autor: 'Dan Brown', paginas: 454 }

// findIndex: Retorna el índice del primer elemento que cumple con una condición
const indiceLibro = libros.findIndex(libro => libro.autor === 'Gabriel García Márquez');
console.log(indiceLibro);  // Output: 1

// sort: Ordena los elementos del array in-place y retorna el array
const numerosOrdenados = [...numeros].sort((a, b) => b - a);
console.log(numerosOrdenados);  // Output: [5, 4, 3, 2, 1]

// flat: Aplana un array de arrays en un solo nivel
const arrayDeArrays = [1, [2, 3], [4, [5, 6]]];
const arrayPlano = arrayDeArrays.flat(2);
console.log(arrayPlano);  // Output: [1, 2, 3, 4, 5, 6]

// flatMap: Mapea cada elemento usando una función y aplana el resultado en un nuevo array
const arrayConMap = numeros.flatMap(num => [num, num * 2]);
console.log(arrayConMap);  // Output: [1, 2, 2, 4, 3, 6, 4, 8, 5, 10]

// splice: Cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos
const coloresModificados = [...colores];
coloresModificados.splice(1, 1, "verde", "amarillo");
console.log(coloresModificados);  // Output: ['rojo', 'verde', 'amarillo', 'blanco']

// slice: Retorna una copia de una parte del array en un nuevo array
const coloresParciales = colores.slice(1, 3);
console.log(coloresParciales);  // Output: ['azul', 'blanco']
