//veremos las expresiones de clase que participan en la composición de otras clases.

//Extender clases nos va a permitir tener una clase general que le heredará propiedades y métodos a otras clases(pueden ser mas de una). De esta forma, podremos generar distintas sub-entidades que puedan mantener sus propias características, pero que compartan algunas otras generales.

class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }
  saludar() {
    console.log("Hola, mi nombre es  " + this.nombre + ". Tengo  " + this.edad);
  }
}
let martin = new Persona("Martin", 26);
martin.saludar();

// extender la classe

class Programador extends Persona {
  // utilizamos la p.reservada extends y el nombre de la clase de la que queremos heredar propiedades
  constructor(nombre, edad, añosDeExperiencia) {
    super(nombre, edad); // usamos la p.reservada super dentro de el constructor para aclarar cuales propiedades queremos heredar
    this.añosDeExperiencia = añosDeExperiencia;
  }
  codear() {
    console.log(
      "Soy " +
        this.nombre +
        " . Codeo desde hace  " +
        this.añosDeExperiencia +
        " años"
    );
  }
}

let martina = new Persona("Martína", 26);
let programador = new Programador("María", 37, 4);
martina.saludar(); // tambien podemos llamar a una funcion de la clase que hereda
programador.codear();
