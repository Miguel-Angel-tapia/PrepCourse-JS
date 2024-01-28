//recorremos los objetos con el bucle for-in
let mundo3 = { continentes: 7, paises: 195, oceanos: 5 };
for (let propiedad in mundo3) {
  console.log(`Esta es la propiedad: ${propiedad}`);
  console.log(`Este es el valor: ${mundo3[propiedad]}`);
  //
  console.log("Esta es la propiedad:", propiedad);
  console.log("Este es el valor:", mundo3[propiedad]);
  //
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

//Object.keys() se utiliza para obtener un array de las claves (o nombres de propiedades) de un objeto. Este método devuelve un array que contiene las claves de un objeto.

//libro = { autor: "Borges", genero: "Policial", año: 1990 };
var todasLasPropiedades = Object.keys(libro);
console.log(todasLasPropiedades); //  ["autor", "genero", "año"];

// Object.entries(objeto): Devuelve un array de arrays, donde cada subarray contiene un par[clave, valor] de cada propiedad enumerable del objeto.
var obj = { casa1: "blanca", casa2: "gris" };
console.log(Object.entries(obj)); // [ ['casa1', 'blanca'], ['casa2', `gris`] ]

let persona = { name: "miguel", edad: 26, pais: "argentina" };
console.log(persona); //{ name: 'miguel', edad: 25, pais: 'argentina' }
console.log(Object.entries(persona)); //[ [ 'name', 'miguel' ], [ 'edad', 25 ], [ 'pais', 'argentina' ] ]
let obtenerInfo = Object.entries(persona);
console.log(obtenerInfo[0]); // [ 'name', 'miguel' ]
console.log(obtenerInfo[1]); //[ 'edad', 26 ]
console.log(obtenerInfo[2]); //[ 'pais', 'argentina' ]
console.log(obtenerInfo[0][0]); //`name`
console.log(obtenerInfo[0][1]); //`miguel`
console.log(obtenerInfo[1][0]); //`edad`
console.log(obtenerInfo[1][1]); // 26
console.log(obtenerInfo[2][0]); //`pais`
console.log(obtenerInfo[2][1]); //`argentina`

// Object.getOwnPropertyNames(objeto): Devuelve un array de strings que representan todas las propiedades(enumerables y no enumerables) del objeto.
const objeto = { a: 1, b: 2, name: "miguel", edad: 26 };
const propiedades = Object.getOwnPropertyNames(objeto);
console.log(propiedades); // Resultado: [ 'a', 'b', `name`, `edad` ]

//Object.keys(obj):
// Devuelve un array de las propiedades enumerables del objeto.
const obj123 = { a: 1, b: 2, c: 3 };
const keys = Object.keys(obj123);
console.log(keys); // Resultado: ['a', 'b', 'c']

//Object.values(obj):
// Devuelve un array de los valores de las propiedades enumerables del objeto.
const obj111 = { a: 1, b: 2, c: 3 };
const values = Object.values(obj111);
console.log(values); // Resultado: [1, 2, 3]

// Object.getOwnPropertyDescriptors(objeto): Devuelve un objeto que contiene los descriptores de todas las propiedades del objeto, incluyendo sus configuraciones(por ejemplo, si son configurables, enumerables, etc.).
const objetoo = { a: 1, b: 2 };
const descriptores = Object.getOwnPropertyDescriptors(objetoo);
console.log(descriptores);
// devuelve: { a: { value: 1, writable: true, enumerable: true, configurable: true }, b: { value: 2, writable: true, enumerable: true, configurable: true } }

//Object.assign(target, source1, source2, ...):
//Object.assign(objetoDestino, ...objetosOrigen):
//Copia las propiedades de uno o más objetos fuente al objeto destino.
const obj1 = { a: 1 };
const obj2 = { b: 2 };
const mergedObj = Object.assign({ c: 3 }, obj1, obj2);
console.log(mergedObj); // Resultado: { c: 3 a: 1, b: 2 }

//Object.freeze(obj):
//Congela un objeto, lo que impide que se añadan, eliminen o modifiquen sus propiedades.
const obj222 = { a: 1, b: 2 };
Object.freeze(obj222);
// Intento de modificar el objeto
//obj222 = 3; // No tiene efecto en el objeto congelado
console.log(obj222); //revisar, y consultar!

//Object.seal(obj):
//Sella un objeto, lo que impide que se añadan o eliminen propiedades, pero permite la modificación de las propiedades existentes.
const obj333 = { a: 1, b: 2 };
Object.seal(obj333);
// Intento de añadir o eliminar propiedades
obj333.c = 3; // No tiene efecto en un objeto sellado
delete obj333.a; // No tiene efecto en un objeto sellado
console.log(obj333);

// Object.create(prototipo): Crea un nuevo objeto con el prototipo especificado.Es útil para crear herencia en JavaScript.

//Object.getPrototypeOf(objeto): Devuelve el prototipo del objeto.

//  Object.setPrototypeOf(objeto, prototipo): Establece el prototipo del objeto con el prototipo especificado.
