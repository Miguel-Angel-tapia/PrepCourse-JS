// HAS OWN PROPERTY
const libro = { autor: "Borges", genero: "Policial", año: 1990 };
var tienePropiedad = libro.hasOwnProperty("autor"); //true
//var tienePropiedad = libro.hasOwnProperty("nombre"); false
console.log(tienePropiedad);

// KEYS
//libro = { autor: "Borges", genero: "Policial", año: 1990 };
var todasLasPropiedades = Object.keys(libro);

console.log(todasLasPropiedades); //[ 'autor', 'genero', 'año' ]

var mundo = { continentes: 7, paises: 195, oceanos: 5 };
for (let propiedad in mundo) {
  console.log("Esta es la propiedad: ", propiedad);
  console.log("Este es el valor: ", mundo[propiedad]);
}

//Esta es la propiedad:  continentes        asi nos devuelve en consola
//Este es el valor:  7
//Esta es la propiedad:  paises
//Este es el valor:  195
//Esta es la propiedad:  oceanos
//Este es el valor:  5

//THIS
var mascota = {
  animal: "Perro",
  raza: "Ovejero Alemán",
  amistoso: true,
  dueño: "María López",
  info: function () {
    console.log("Mi perro es un  " + this.raza);
  },
};
mascota.info();

//hasOwnProperty(propiedad): Verifica si el objeto tiene una propiedad con el nombre especificado y devuelve true o false.

//El método sort()ordena los elementos de un arreglo (array) localmente y devuelve el arreglo ordenado. La ordenación no es necesariamente estable . El modo de ordenación por defecto responde a la posición del valor de la cadena de acuerdo a su valor Unicode

//Object.keys(objeto): Devuelve un array de strings que representan todas las propiedades enumerables del objeto.

// Object.values(objeto): Devuelve un array de los valores de todas las propiedades enumerables del objeto.

// Object.entries(objeto): Devuelve un array de arrays, donde cada subarray contiene un par[clave, valor] de cada propiedad enumerable del objeto.
var obj = { foo: "bar", baz: 42 };
console.log(Object.entries(obj)); // [ ['foo', 'bar'], ['baz', 42] ]

//  Object.assign(objetoDestino, ...objetosOrigen): Copia las propiedades de uno o más objetos origen en un objeto destino.Devuelve el objeto destino modificado.

// Object.freeze(objeto): Congela el objeto, lo que significa que no se pueden agregar, eliminar ni modificar sus propiedades existentes.Devuelve el objeto congelado.

//  Object.seal(objeto): Sella el objeto, lo que significa que no se pueden agregar ni eliminar propiedades, pero aún se pueden modificar las propiedades existentes.Devuelve el objeto sellado.

// Object.getOwnPropertyNames(objeto): Devuelve un array de strings que representan todas las propiedades(enumerables y no enumerables) del objeto.

// Object.getOwnPropertyDescriptors(objeto): Devuelve un objeto que contiene los descriptores de todas las propiedades del objeto, incluyendo sus configuraciones(por ejemplo, si son configurables, enumerables, etc.).

// Object.create(prototipo): Crea un nuevo objeto con el prototipo especificado.Es útil para crear herencia en JavaScript.

//Object.getPrototypeOf(objeto): Devuelve el prototipo del objeto.

//  Object.setPrototypeOf(objeto, prototipo): Establece el prototipo del objeto con el prototipo especificado.
