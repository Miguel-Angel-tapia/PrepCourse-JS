//El método reverse() invierte el orden de los elementos de un array, El primer elemento pasa a ser el último y el último pasa a ser el primero.
let array1 = ["uno", "dos", "tres"];
console.log(array1);
// Expected output: "array1:" Array ["one", "two", "three"]

let invertido = array1.reverse();
console.log(invertido);

//El método join() une todos los elementos de una matriz (o un objeto similar a una matriz) en una cadena y devuelve esta cadena.

var a = ["Viento", "Lluvia", "Fuego"];
var miVar1 = a.join(); // asigna 'Viento,Lluvia,Fuego' a miVar1
var miVar2 = a.join(", "); // asigna 'Viento, Lluvia, Fuego' a miVar2
var miVar3 = a.join(" + "); // asigna 'Viento + Lluvia + Fuego' a miVar3
var miVar4 = a.join(""); // asigna 'VientoLluviaFuego' a miVar4
var miVar5 = a.join("-"); // asigna 'viento-lluvia-fuego' a mi var5

// (spread operator en inglés) en JavaScript. El operador de propagación se denota por tres puntos suspensivos .... algunas de sus funciones principales:

//                      copiar arrays
const arrayOriginal = [1, 2, 3];
const copiaArray = [...arrayOriginal];
//En este caso, copiaArray será una copia independiente de arrayOriginal.

//                     Concatenar Arrays:
const array2 = [1, 2, 3];
const array3 = [4, 5, 6];
const concatenado = [...array2, ...array3];
//concatenado será [1, 2, 3, 4, 5, 6].

//                   Agregar Elementos a un Array:
const arrayOriginal1 = [1, 2, 3];
const nuevoArray = [...arrayOriginal1, 4];
//nuevoArray será [1, 2, 3, 4].

//                     Objetos Literales:
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, ...obj1 };
//obj2 contendrá { c: 3, a: 1, b: 2 }. Aquí, el operador de propagación se utiliza para combinar propiedades de objetos.

//              Funciones con Número Variable de Argumentos:
function suma(...numeros) {
  return numeros.reduce((total, num) => total + num, 0);
}
//La función suma puede aceptar cualquier número de argumentos, ya que numeros será un array que contiene todos los argumentos pasados.
