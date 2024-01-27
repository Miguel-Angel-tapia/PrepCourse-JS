let colores = ["amarillo", "azul"];

//length: Devuelve la longitud (número de elementos) del array.
console.log(frutas.length); // Imprime 2

//indexOf: Devuelve el índice de la primera aparición de un elemento.
console.log(frutas.indexOf("amarillo")); // Imprime 0

//El método push() añade uno o más elementos al final de un arreglo, y devuelve la nueva longitud del array.
colores.push("rojo");

//El método unshift() agrega uno o más elementos al inicio de un arreglo, y devuelve la nueva longitud del array.
colores.unshift("verde");

//El método pop() elimina y devuelve el último elemento de un arreglo.
colores.pop();

//El método shift() elimina y devuelve el primer elemento de un arreglo.
colores.shift();

//El método splice() cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos.
//SINTAXIS.splice(INDES, BORRAR, AGREGAR)
let animales = ["puma", "tigre", "leon", "perro", "gato"];
animales.splice(2, 0, "elefante", "mamut"); //que a partir de el index 2 no elimine nada, y agregue elefante y mamut
colores.splice(1, 2, "marron"); //(puede agregar mas de uno)
//1(desde que indice elimina incluido)
//2(cuantos indices elimina incluyendo donde empieza)

//slice(inicio[, fin]): el metodo Devuelve una copia de una porción del array, especificada por el inicio y el fin.  slice(inicio[, fin]):
const numeeeeros = [1, 2, 3, 4, 5];
const subArray = numeeeeros.slice(1, 3);
// Resultado: [2, 3]

//El método sort()ordena los elementos de un arreglo (array) localmente y devuelve el arreglo ordenado. La ordenación no es necesariamente estable . El modo de ordenación por defecto responde a la posición del valor de la cadena de acuerdo a su valor Unicode
let numArray = [2, 6, 3, 8, 4, 9];
console.log(numArray.sort()); //result: [ 2, 3, 4, 6, 8, 9 ]

let stringArray = ["c", "b", "a"];
console.log(stringArray.sort()); //result: [ 'a', 'b', 'c' ]

let numArray2 = [100, 17, 110, 25, 31, 211];
console.log(numArray2.sort()); //result: [ 100, 110, 17, 211, 25, 31 ] de esta manera solo toma el primer y segundo numero, deberiamos crear una funcion

function comparar(a, b) {
  return a - b;
}
console.log(numArray2.sort(comparar)); // result: [ 17, 25, 31, 100, 110, 211 ]
console.log(numArray2.sort((a, b) => a - b)); // result: [ 17, 25, 31, 100, 110, 211 ]

//El método includes() determina si un arreglo incluye o contiene un elemento específico. Devuelve true o false en cada caso.
let pintores = ["picaso", "dali", "van gogh", "velazques"];
let incluyeMiguel = pintores.includes("miguel");
let incluyeDali = pintores.includes("dali");
console.log(incluyeDali); //true
console.log(incluyeMiguel); //false

//El método every() determina si todos los elementos en un arreglo satisfacen una misma condición.
let numeros = [1, 4, 8, 5, 9];
let cumpleCondicion = numeros.every((num) => {
  return num > 0;
});
let noCumpleCondicion = numeros.every((num) => {
  return num > 5;
});
console.log(cumpleCondicion);
console.log(noCumpleCondicion);
const nnnumeros = [1, 2, 3, 4, 5];
const todosMayoresQueCero = nnnumeros.every((numero) => numero > 0);
// Resultado: true

//El metodo some() determina si al menos un elemento cumple con la condicion
var nuumeros = [1, 2, 3, 4, 5];
var resultado = nuumeros.some((elemento) => elemento > 3);
console.log(resultado); // Imprime true

//indexOf : el metodo Buscan la primera (o última) ocurrencia de un valor en el array. indexOf(valor[, desde]) y lastIndexOf(valor[, desde])
const numeross = [1, 2, 3, 4, 2, 5];
const indice = numeross.indexOf(2);
// Resultado: 1

//El método reverse() invierte el orden de los elementos de un array, El primer elemento pasa a ser el último y el último pasa a ser el primero.
let arraay1 = ["uno", "dos", "tres"];
console.log(arraay1);
// devuelve" Array ["uno", "dos", "tres"]

let invertido = array1.reverse();
console.log(invertido);
//devuelve [`tres`, `dos`, `uno`]

//El método split() convierte un string en un array, donde cada elemento contendrá un sub-string, dependiendo del parámetro divisor que indiquemos.
let palabra = "henri";
let palabraSeparada = palabra.split("");
palabraSeparada.pop();
palabraSeparada.push("y");
console.log(palabraSeparada);

//El método join() convierte un arreglo en un string, uniendo todos los elementos de este en una misma cadena.
let palabra2 = "henri";
let palabraSeparada2 = palabra2.split("");
palabraSeparada2.pop();
palabraSeparada2.push("y");
let palabraArreglada2 = palabraSeparada2.join("");
console.log(palabraArreglada2);

var a = ["Viento", "Lluvia", "Fuego"];
var miVar1 = a.join(); // asigna 'Viento,Lluvia,Fuego' a miVar1
var miVar2 = a.join(", "); // asigna 'Viento, Lluvia, Fuego' a miVar2
var miVar3 = a.join(" + "); // asigna 'Viento + Lluvia + Fuego' a miVar3
var miVar4 = a.join(""); // asigna 'VientoLluviaFuego' a miVar4
var miVar5 = a.join("-"); // asigna 'viento-lluvia-fuego' a mi var5

//El método forEach() nos permite recorrer un arreglo, realizando alguna acción en para cada elemento.
let numero = [1, 2, 3, 4];
numero.forEach((num) => console.log(num));
numero.forEach((num) => {
  if (num === 3) {
    console.log(num);
  }
});

//El método map() también nos permite recorrer un arreglo y realizar una acción por cada elemento. La diferencia es que este método devuelve un nuevo arreglo los elementos modificados.
let masUno = numero.map((num) => {
  return num + 1;
});
console.log(masUno);

//Crea un nuevo array aplicando una función a cada elemento del array original.
const nnumeros = [1, 2, 3];
const duplicados = nnumeros.map((numero) => numero * 2);
// Resultado: [2, 4, 6]

//filter(callback):
//el metodo filter() Crea un nuevo array con los elementos que cumplen una condición dada por la función de filtrado.
const nuumeros = [1, 2, 3, 4, 5];
const pares = nuumeros.filter((numero) => numero % 2 === 0);
// Resultado: [2, 4]

//find(callback): este metodo Devuelve el primer elemento que cumple con la condición dada por la función de prueba.
const nummeros = [1, 2, 3, 4, 5];
const encontrado = nummeros.find((numero) => numero > 2);
// Resultado: 3

//El método toString() devuelve una cadena de caracteres representando el array especificado y sus elementos.
let array17 = [1, 2, "a", "1a"];

console.log(array17.toString());
// Expected output: "1,2,a,1a"

// El método reduce() ejecuta una función reductora sobre cada elemento de un array, devolviendo como resultado un único valor
//La función reductora recibe cuatro argumentos:

//Acumulador (acc)
//Valor Actual (cur)
//Índice Actual (idx)
//Array (src)
//El valor devuelto de la función reductora se asigna al acumulador, cuyo valor se recuerda en cada iteración de la matriz y, en última instancia, se convierte en el valor final, único y resultante.

//Sintaxis
//    arr.reduce(callback(acumulador, valorActual[, índice[, array]])[, valorInicial])

const arr = [1, 2, 3, 4, 5];
const sumas = arr.reduce((acc, cur) => acc + cur, 0); //abreviado nombres parametros
console.log(sumas); // Resultado: 15

//ej:
let array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
let initialValue = 0;
let sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
);
console.log(sumWithInitial); //imprime 10

//otro ej
const numeritos = [1, 2, 3, 4, 5];

const suma = numeritos.reduce(function (acumulador, numero) {
  return acumulador + numero;
}, 0);

console.log(suma); // Resultado: 15

//const numeros = [1, 2, 3, 4, 5];: Creamos un array llamado numeros que contiene los números del 1 al 5.
//const suma = numeros.reduce(function(acumulador, numero) { ... }, 0);: Utilizamos el método reduce() en el array numeros.
//function(acumulador, numero) { return acumulador + numero; }: La función reductora recibe dos argumentos en cada iteración: acumulador y numero. En este caso, simplemente suma el acumulador actual y el número actual.
//0 (valor inicial del acumulador): Se proporciona como segundo argumento a reduce(). En la primera iteración, acumulador toma el valor inicial de 0 y se suma con el primer número del array.
//console.log(suma); // Resultado: 15: Imprimimos el resultado final de la suma, que es 15.

//const numeros = [1, 2, 3, 4, 5];

//const suma = numeros.reduce((acumulador, numero) => acumulador + numero, 0);
console.log(suma); // Resultado: 15

//El método reduce() es muy versátil y se puede utilizar para realizar una variedad de operaciones, como encontrar el valor máximo o mínimo, concatenar elementos de un array, realizar operaciones de transformación y más. La clave es entender cómo funciona la función reductora y cómo se acumulan los valores a lo largo del proceso.

//mas elementos de array https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array
