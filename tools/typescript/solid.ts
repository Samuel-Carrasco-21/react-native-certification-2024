// Single Responsibility Principle (SRP)
// Clase para gestionar la información del estudiante
class Estudiante {
  constructor(
    public nombre: string,
    public apellido: string,
    public edad: number
  ) {}
}

// Clase para gestionar la impresión de información
class Impresora {
  imprimirEstudiante(estudiante: Estudiante): void {
    console.log(`${estudiante.nombre} ${estudiante.apellido}, Edad: ${estudiante.edad}`);
  }
}

const estudiante = new Estudiante('Hugo', 'Apaza', 20);
const impresora = new Impresora();
impresora.imprimirEstudiante(estudiante);


// Open/Closed Principle (OCP)
// Clase base para formas geométricas
abstract class Forma {
  abstract area(): number;
}

// Clase para el cálculo del área de un rectángulo
class Rectangulo extends Forma {
  constructor(private ancho: number, private alto: number) {
    super();
  }

  area(): number {
    return this.ancho * this.alto;
  }
}

// Clase para el cálculo del área de un círculo
class Circulo extends Forma {
  constructor(private radio: number) {
    super();
  }

  area(): number {
    return Math.PI * Math.pow(this.radio, 2);
  }
}

const formas: Forma[] = [new Rectangulo(10, 5), new Circulo(7)];
formas.forEach(forma => console.log(forma.area()));


// Liskov Substitution Principle (LSP)
class Animal {
  comer(): void {
    console.log('El animal está comiendo.');
  }
}

class Perro extends Animal {
  comer(): void {
    console.log('El perro está comiendo.');
  }
}

function alimentarAnimal(animal: Animal): void {
  animal.comer();
}

const miPerro = new Perro();
alimentarAnimal(miPerro);  // Output: El perro está comiendo.


// Interface Segregation Principle (ISP)
interface Volador {
  volar(): void;
}

interface Nadador {
  nadar(): void;
}

class Pato implements Volador, Nadador {
  volar(): void {
    console.log('El pato está volando.');
  }

  nadar(): void {
    console.log('El pato está nadando.');
  }
}

class Pez implements Nadador {
  nadar(): void {
    console.log('El pez está nadando.');
  }
}

const pato = new Pato();
pato.volar();
pato.nadar();

const pez = new Pez();
pez.nadar();


// Dependency Inversion Principle (DIP)
interface BaseDatos {
  guardar(data: string): void;
}

class BaseDatosSQL implements BaseDatos {
  guardar(data: string): void {
    console.log(`Guardando en SQL: ${data}`);
  }
}

class BaseDatosNoSQL implements BaseDatos {
  guardar(data: string): void {
    console.log(`Guardando en NoSQL: ${data}`);
  }
}

class UsuarioService {
  constructor(private baseDatos: BaseDatos) {}

  guardarUsuario(data: string): void {
    this.baseDatos.guardar(data);
  }
}

const sqlDB = new BaseDatosSQL();
const noSQLDB = new BaseDatosNoSQL();
const usuarioServiceSQL = new UsuarioService(sqlDB);
const usuarioServiceNoSQL = new UsuarioService(noSQLDB);

usuarioServiceSQL.guardarUsuario('Usuario1');
usuarioServiceNoSQL.guardarUsuario('Usuario2');

