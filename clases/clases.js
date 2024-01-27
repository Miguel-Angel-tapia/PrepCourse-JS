//Las clases de JavaScript proveen una sintaxis mucho más clara y simple para crear objetos y lidiar con la herencia.

//IMPORTANT la primera letra de una clase, tiene que ir en mayuscula
//las clases tienen propiedades, y podemos definirle metodos

// FUNCIÓN CONSTRUCTORA
// FUNCIÓN CONSTRUCTORA
// FUNCIÓN CONSTRUCTORA
function Auto(puertas, color, marca) {
  //las propiedades debemos asignarlas como parametros
  this.puertas = puertas; // propiedad
  this.color = color; //para declarar las propiedades, usamos la palabra
  this.marca = marca; // reservada this. y le damos el valor de su parametro

  // de esta forma agregamos un metodo
  this.informacion = function () {
    console.log("este es un " + this.marca + " de color " + this.color);
  };
}
// declaramos una variable, con la palabra reservada new que nos permite crear una instancia de nuestra clase y le damos los valores
let miPrimerAuto = new Auto(2, "rojo", "ferrari");
console.log(miPrimerAuto); // return (todos los valores con su propiedad)
console.log(miPrimerAuto.marca); // return ferrari
miPrimerAuto.informacion(); // asi llamamos la funcion

// EXPRESIÓN DE CLASE
// EXPRESIÓN DE CLASE
// EXPRESIÓN DE CLASE
//usamos la palabra reservada class, luego el nombre de la clase
//para declarar las propiedades, utilizamos la palabra reservada constructor
//y en su parametro, asignamos las propiedades
class Auto2 {
  constructor(puertas, color, marca, año, ruedas) {
    this.puertas = puertas;
    this.color = color;
    this.marca = marca;
    this.año = año;
    this.ruedas = ruedas;
  }
  //los metodos, en una clase constructor, van por fuera de la clase y sin la palabra reservada this
  informacion = function () {
    console.log("este es un " + this.marca + " de color " + this.color);
  };
}

// declaramos una variable, con la palabra reservada new que nos permite crear una instancia de nuestra clase y le damos los valores
let miSegundoAuto = new Auto2(4, "Blanco", "Fiat", 2015, 4);
console.log(miSegundoAuto);
console.log(miSegundoAuto.marca);
miSegundoAuto.informacion();

//otroEjemplo
class futbol {
  constructor(jugador) {
    this.jugador = jugador;
  }
  obtenerNombre() {
    console.log(this.jugador);
  }
}
let argentina = new futbol("messi"); // agregamos la propiedad argentina, con el valor messi. a la clase futbol
let brasil = new futbol("neymar");
argentina.obtenerNombre(); // primero llamamos a la variable, y luego a la funcion
