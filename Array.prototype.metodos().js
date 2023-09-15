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
