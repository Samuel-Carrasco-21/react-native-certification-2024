// Definición de interfaces en TypeScript
interface Estudiante {
  NOMBRE: string;
  APELLIDO: string;
  EDAD: number;
  PROMEDIO?: number;  // Campo opcional
}

interface Auto {
  placa: string;
  marca: string;
}

interface Conductor {
  nombre: string;
  licencia: string;
}

// Uso de la interfaz Estudiante
const ESTUDIANTE: Estudiante = {
  NOMBRE: "Hugo",
  APELLIDO: "Apaza",
  EDAD: 20,
};

console.log(ESTUDIANTE);  // Muestra el objeto en la consola
console.table(ESTUDIANTE);  // Muestra el objeto en una tabla en la consola

// Modificar un atributo del objeto
ESTUDIANTE.EDAD = 21;
console.table(ESTUDIANTE);  // Muestra el objeto actualizado

// Congelar un objeto: evita la modificación de sus propiedades
Object.freeze(ESTUDIANTE);
ESTUDIANTE.EDAD = 22;  // No tendrá efecto porque el objeto está congelado
console.table(ESTUDIANTE);  // La edad seguirá siendo 21

// Intentar agregar un nuevo atributo no funcionará con el objeto congelado
(ESTUDIANTE as any).PROMEDIO = 97.6;  // No tendrá efecto
console.table(ESTUDIANTE);  // No se agregará el atributo PROMEDIO

// Eliminar atributos no es posible en un objeto congelado
delete (ESTUDIANTE as any).EDAD;  // No tendrá efecto
console.table(ESTUDIANTE);  // La edad seguirá presente

// Para agregar o eliminar atributos, debemos trabajar con un objeto no congelado
const estudianteDescongelado: Estudiante = {
  NOMBRE: "Hugo",
  APELLIDO: "Apaza",
  EDAD: 20,
};

// Agregar un nuevo atributo
estudianteDescongelado.PROMEDIO = 97.6;
console.table(estudianteDescongelado);  // Muestra el objeto con el nuevo atributo

// Eliminar un atributo
delete estudianteDescongelado.PROMEDIO;
delete estudianteDescongelado.EDAD;
console.table(estudianteDescongelado);  // Muestra el objeto sin los atributos eliminados

// Sellar un objeto: permite modificar propiedades existentes, pero no agregar o eliminar propiedades
Object.seal(estudianteDescongelado);
estudianteDescongelado.EDAD = 22;  // Se puede modificar
(estudianteDescongelado as any).FALTAS = 2;  // No se puede agregar
delete estudianteDescongelado.EDAD;  // No se puede eliminar
console.table(estudianteDescongelado);  // Muestra el objeto con la edad modificada y sin las faltas agregadas

// Destructurar objetos
const { NOMBRE } = estudianteDescongelado;
console.log("---------------------------------");
console.log(NOMBRE);  // Output: Hugo

const { NOMBRE: nombreEstudiante, APELLIDO: apellidoEstudiante } = estudianteDescongelado;
console.log(nombreEstudiante, apellidoEstudiante);  // Output: Hugo Apaza

// Combinar objetos
const auto: Auto = {
  placa: "5719HHP",
  marca: "Ford",
};

const conductor: Conductor = {
  nombre: "Jose",
  licencia: "6746987",
};

const year: number = 2023;

// Forma larga de combinar objetos
const nuevoObjetoLargo = {
  placa: auto.placa,
  marca: auto.marca,
  nombre: conductor.nombre,
  licencia: conductor.licencia,
  year: year,
};
console.table(nuevoObjetoLargo);

// Forma corta de combinar objetos usando el operador spread
const nuevoObjeto = {
  ...auto,
  ...conductor,
  licencia: "3421423",  // Sobrescribe la licencia original del conductor
  year,
};
console.table(nuevoObjeto);

// Ejemplos adicionales

// Crear un objeto vacío y agregar propiedades dinámicamente
const libro: { [key: string]: string | number } = {};
libro.titulo = "JavaScript: The Good Parts";
libro.autor = "Douglas Crockford";
libro.publicacion = 2008;
console.table(libro);

// Clonar un objeto utilizando el operador spread
const libroClonado = { ...libro };
console.table(libroClonado);

// Actualizar múltiples propiedades de un objeto
const libroActualizado = {
  ...libro,
  titulo: "JavaScript: The Definitive Guide",
  autor: "David Flanagan",
};
console.table(libroActualizado);

// Definición de clases en TypeScript

class ClaseUno {
  constructor(
    public atributoUno: string,
    public atributoDos: string
  ) {}

  getAtributoUno(): void {
    console.log(this.atributoUno);
  }
}

const ObjetoNuevoUno = new ClaseUno("Jose", "Carrasco");
ObjetoNuevoUno.getAtributoUno();  // Output: Jose

class ClaseDos extends ClaseUno {
  constructor(
    atributoUno: string,
    atributoDos: string,
    public atributoTres: number
  ) {
    super(atributoUno, atributoDos);
  }

  getAtributoTres(): void {
    console.log(this.atributoTres);
  }
}

const ObjetoNuevoDos = new ClaseDos("Maria", "Perez", 25);
ObjetoNuevoDos.getAtributoUno();  // Output: Maria
ObjetoNuevoDos.getAtributoTres();  // Output: 25
