//Prototipos [mecanismo por el cual todos los objetos o elementos de JS pueden extender sus propiedades y metodos]
//El proceso en el que los objetos globales de JavaScript le extienden métodos y propiedades a cualquier tipo de dato se denomina herencia.

// Todos los objetos pueden heredar propiedades y métodos por medio de un prototipo. Gracias a estos prototipos podremos acceder al constructor de cualquier objeto para modificarlo.

Array.prototype.mayorQueTres = function () {
  var arregloModificado = [];
  for (var i = 0; i < this.length; i++) {
    if (this[i] > 3) {
      arregloModificado.push(false);
    } else {
      arregloModificado.push(this[i]);
    }
  }
  return arregloModificado;
};

var arreglo = [1, 2, 3, 4, 5];
var nuevoArreglo = arreglo.mayorQueTres();
console.log(nuevoArreglo); //llamamos a la variable que creamos para la funcion

//OTRO EJEMPLO

class LatinoAmerica {
  constructor() {
    this.paises = [];
  }
}
LatinoAmerica.prototype.agregarPais = function (pais) {
  this.paises.push(pais);
};
let continente = new LatinoAmerica();
continente.agregarPais("mexico");
console.log(continente.paises); // llamamos primero la variable que usamos para agregar y luego a la propiedad del this.push
