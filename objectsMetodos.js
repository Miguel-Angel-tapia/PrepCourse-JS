//recorremos los objetos con el bucle for-in
let mundo3 = { continentes: 7, paises: 195, oceanos: 5 };
for (let propiedad in mundo3) {
  console.log(`Esta es la propiedad: ${propiedad}`);
  console.log(`Este es el valor: ${mundo3[propiedad]}`);
  console.log("Esta es la propiedad:", propiedad);
  console.log("Este es el valor:", mundo3[propiedad]);
  console.log("Esta es la propiedad:", propiedad);
  console.log("Este es el valor:", mundo3[propiedad]);
  console.log("Esta es la propiedad:" + propiedad);
  console.log("Este es el valor:" + mundo3[propiedad]);
} // DE LAS 3 FORMAS ES CORRECTO, Y DEVUELVE
//Esta es la propiedad:  continentes        asi nos devuelve en consola
//Este es el valor:  7
//Esta es la propiedad:  paises
//Este es el valor:  195
//Esta es la propiedad:  oceanos
//Este es el valor:  5

//hasOwnProperty(propiedad):
// Verifica si el objeto tiene una propiedad con el nombre especificado y devuelve true o false.
const libro = { autor: "Borges", genero: "Policial", año: 1990 };
let tienePropiedad = libro.hasOwnProperty("autor"); //true
//var tienePropiedad = libro.hasOwnProperty("nombre"); false
console.log(tienePropiedad); //true

// KEYS
//libro = { autor: "Borges", genero: "Policial", año: 1990 };
var todasLasPropiedades = Object.keys(libro);
console.log(todasLasPropiedades); //  ["autor", "genero", "año"];

// Object.entries(objeto): Devuelve un array de arrays, donde cada subarray contiene un par[clave, valor] de cada propiedad enumerable del objeto.
var obj = { foo: "bar", baz: 42 };
console.log(Object.entries(obj)); // [ ['foo', 'bar'], ['baz', 42] ]

// Object.getOwnPropertyNames(objeto): Devuelve un array de strings que representan todas las propiedades(enumerables y no enumerables) del objeto.
const objeto = { a: 1, b: 2 };
const propiedades = Object.getOwnPropertyNames(objeto);
// Resultado: ['a', 'b']

// Object.getOwnPropertyDescriptors(objeto): Devuelve un objeto que contiene los descriptores de todas las propiedades del objeto, incluyendo sus configuraciones(por ejemplo, si son configurables, enumerables, etc.).
const objetoo = { a: 1, b: 2 };
const descriptores = Object.getOwnPropertyDescriptors(objetoo);
// Resultado: { a: { configurable: true, enumerable: true, value: 1, writable: true }, b: { configurable: true, enumerable: true, value: 2, writable: true } }

//Object.keys(obj):
// Devuelve un array de las propiedades enumerables del objeto.
const obj = { a: 1, b: 2, c: 3 };
const keys = Object.keys(obj);
// Resultado: ['a', 'b', 'c']

//Object.values(obj):
// Devuelve un array de los valores de las propiedades enumerables del objeto.
const obj = { a: 1, b: 2, c: 3 };
const values = Object.values(obj);
// Resultado: [1, 2, 3]

//Object.entries(obj):
// Devuelve un array de pares clave / valor como arrays.
const obj = { a: 1, b: 2, c: 3 };
const entries = Object.entries(obj);
// Resultado: [['a', 1], ['b', 2], ['c', 3]]

//Object.assign(target, source1, source2, ...):
//Object.assign(objetoDestino, ...objetosOrigen):
//Copia las propiedades de uno o más objetos fuente al objeto destino.
const obj1 = { a: 1 };
const obj2 = { b: 2 };
const mergedObj = Object.assign({}, obj1, obj2);
// Resultado: { a: 1, b: 2 }

//Object.freeze(obj):
//Congela un objeto, lo que impide que se añadan, eliminen o modifiquen sus propiedades.
const obj = { a: 1, b: 2 };
Object.freeze(obj);
// Intento de modificar el objeto
obj.c = 3; // No tiene efecto en el objeto congelado

//Object.seal(obj):
//Sella un objeto, lo que impide que se añadan o eliminen propiedades, pero permite la modificación de las propiedades existentes.
const obj = { a: 1, b: 2 };
Object.seal(obj);
// Intento de añadir o eliminar propiedades
obj.c = 3; // No tiene efecto en un objeto sellado
delete obj.a; // No tiene efecto en un objeto sellado

//El método sort()ordena los elementos de un arreglo (array) localmente y devuelve el arreglo ordenado. La ordenación no es necesariamente estable . El modo de ordenación por defecto responde a la posición del valor de la cadena de acuerdo a su valor Unicode

// Object.create(prototipo): Crea un nuevo objeto con el prototipo especificado.Es útil para crear herencia en JavaScript.

//Object.getPrototypeOf(objeto): Devuelve el prototipo del objeto.

//  Object.setPrototypeOf(objeto, prototipo): Establece el prototipo del objeto con el prototipo especificado.
