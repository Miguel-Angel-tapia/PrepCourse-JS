// los objetos también son una estructura en la que se puede guardar todo tipo de información

//sintaxis :   variable     nombreObjeto = { clave: valor };
//         let/var/const     nombre       llaves que indican que es objeto

let deportes = {
  conBalon: ["futbol", "basquet", "rugby"],
  sinBalon: ["boxeo", "surf", "trekking"],
};
let persona = { nombres: "lucas", edad: 26, estudios: { esProgramador: true } };

//A diferencia de las matrices que tienen elementos valorados en índices, los objetos usan un concepto llamado pares de clave:valor.

//La clave (key) es el identificador y el valor (value) es el valor que queremos guardar en esa clave. La sintaxis es "clave: valor". Los objetos pueden contener muchos pares de clave-valor, deben estar separados por una coma (importante: sin punto y coma dentro de un objeto).

//Las claves son únicas en un objeto, solo puede haber una clave de ese nombre, aunque, varias claves pueden tener el mismo valor. Los valores pueden ser cualquier tipo de dato de Javascript; string, número, booleano, matriz, función , arrays o incluso otro objeto.

// ACCEDER Para acceder a la propiedad de un objeto simplemente tenemos que escribir el nombre del objeto seguido de un punto y el nombre de la propiedad.
var persona1 = { nombre: "Lucas", edad: 26, estudios: { esProgramador: true } };
console.log(persona1.edad);

// ASIGNAR Para cambiar el valor de una propiedad simplemente tenemos que acceder a ella e igualarla al nuevo valor.
var persona2 = {
  nombres: "Lucas",
  edad: 26,
  estudios: { esProgramador: true },
};
persona.nombres = "Martín";
console.log(persona2.nombre);

//CREAR
var autos = {};
autos.marcas = ["Ford", "Audi", "Ferrari"];
console.log(autos);

//BORRAR Para eliminar propiedades utilizaremos una palabra reservada llamada delete
delete autos.marcas;
console.log(autos);

//PODEMOS GUARDAR FUNCIONES!
let misFunciones = {
  saludar: function () {
    console.log("hola");
  },
};
misFunciones.saludar(); //asi llamamos a la funcion

//PODEMOS COMBINAR OBJETOS MEDIANTE OPERADOR DE PROPAGACION
//Objetos Literales:
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, ...obj1 };
//obj2 contendrá { c: 3, a: 1, b: 2 }. Aquí, el operador de propagación se utiliza para combinar propiedades de objetos.

//maneras para trabajar con objetos:

//dot-Notation (notacion por punto . ) por el momento veremos esta
// bracket-Notation (notacion por corchetes [] )
