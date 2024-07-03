// ITERADORES

const profes: string[] = [
  'paul',
  'alexis',
  'eynar',
  'hernan',
  'gil',
  'ricardo'
];

// forEach: Solo recorre cada elemento del array sin retornar un nuevo array
// Se recomienda no retornar valores dentro de forEach, ya que no se usan.
profes.forEach((profe: string): void => {
  console.log(profe);
});

// map: Recorre cada elemento del array y retorna un nuevo array con los valores transformados
// Se recomienda tipar explícitamente los elementos del array y el valor retornado.
const ob2: string[] = profes.map((profe: string): string => {
  return profe;
});
console.log(ob2);  // Output: ['paul', 'alexis', 'eynar', 'hernan', 'gil', 'ricardo']

interface Libro {
  titulo: string;
  autor: string;
  paginas: number;
}

const libros: Libro[] = [
  { titulo: 'La sombra del viento', autor: 'Carlos Ruiz Zafón', paginas: 512 },
  { titulo: 'Cien años de soledad', autor: 'Gabriel García Márquez', paginas: 432 },
  { titulo: 'El código Da Vinci', autor: 'Dan Brown', paginas: 454 },
  { titulo: 'El señor de los anillos', autor: 'J.R.R. Tolkien', paginas: 1178 }
];

// filter: Crea un nuevo array con todos los elementos que cumplen una condición
// Se recomienda tipar explícitamente los elementos del array.
const librosNuevos: Libro[] = libros.filter((item: Libro): boolean => item.paginas >= 500);
console.log(librosNuevos);  
// Output: [{ titulo: 'La sombra del viento', autor: 'Carlos Ruiz Zafón', paginas: 512 }, { titulo: 'El señor de los anillos', autor: 'J.R.R. Tolkien', paginas: 1178 }]

const colores: string[] = ["rojo", "azul", "blanco"];

// includes: Verifica si un array incluye un cierto elemento
// No es necesario tipar explícitamente los elementos aquí, ya que TypeScript infiere el tipo.
console.log(colores.includes("rojo"));  // Output: true

const numeros: number[] = [1, 2, 3, 4, 5];

// some: Verifica si al menos un elemento del array cumple con una condición
// Se recomienda tipar explícitamente los elementos del array y el valor retornado.
console.log(numeros.some((i: number): boolean => i % 2 === 0));  // Output: true

// every: Verifica si todos los elementos del array cumplen con una condición
// Se recomienda tipar explícitamente los elementos del array y el valor retornado.
console.log(numeros.every((i: number): boolean => i % 2 === 0));  // Output: false

// reduce: Aplica una función a un acumulador y a cada valor del array (de izquierda a derecha) para reducirlo a un solo valor
// Se recomienda tipar explícitamente los elementos del array y el valor retornado.
console.log(numeros.reduce((a: number, b: number): number => a + b, 0));  // Output: 15

// Ejemplos adicionales

// find: Retorna el primer elemento del array que cumple con una condición
// Se recomienda tipar explícitamente los elementos del array y el valor retornado.
const libroEncontrado: Libro | undefined = libros.find((libro: Libro): boolean => libro.autor === 'Dan Brown');
console.log(libroEncontrado);  
// Output: { titulo: 'El código Da Vinci', autor: 'Dan Brown', paginas: 454 }

// findIndex: Retorna el índice del primer elemento que cumple con una condición
// Se recomienda tipar explícitamente los elementos del array y el valor retornado.
const indiceLibro: number = libros.findIndex((libro: Libro): boolean => libro.autor === 'Gabriel García Márquez');
console.log(indiceLibro);  // Output: 1

// sort: Ordena los elementos del array in-place y retorna el array
// Se recomienda tipar explícitamente los elementos del array.
const numerosOrdenados: number[] = [...numeros].sort((a: number, b: number): number => b - a);
console.log(numerosOrdenados);  // Output: [5, 4, 3, 2, 1]

// flat: Aplana un array de arrays en un solo nivel
// Se recomienda tipar explícitamente los elementos del array.
const arrayDeArrays: (number | number[])[] = [1, [2, 3], [4, 5, 6]];
const arrayPlano: number[] = arrayDeArrays.flat(2) as number[];
console.log(arrayPlano);  // Output: [1, 2, 3, 4, 5, 6]

// flatMap: Mapea cada elemento usando una función y aplana el resultado en un nuevo array
// Se recomienda tipar explícitamente los elementos del array y el valor retornado.
const arrayConMap: number[] = numeros.flatMap((num: number): number[] => [num, num * 2]);
console.log(arrayConMap);  // Output: [1, 2, 2, 4, 3, 6, 4, 8, 5, 10]

// splice: Cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos
// Se recomienda tipar explícitamente los elementos del array.
const coloresModificados: string[] = [...colores];
coloresModificados.splice(1, 1, "verde", "amarillo");
console.log(coloresModificados);  // Output: ['rojo', 'verde', 'amarillo', 'blanco']

// slice: Retorna una copia de una parte del array en un nuevo array
// Se recomienda tipar explícitamente los elementos del array.
const coloresParciales: string[] = colores.slice(1, 3);
console.log(coloresParciales);  // Output: ['azul', 'blanco']
