//.sort()
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

//.splice();
//SINTAXIS.splice(INDES, BORRAR, AGREGAR)
//                0        1        2       3       4
let animales = ["puma", "tigre", "leon", "perro", "gato"];
animales.splice(2, 0, "elefante", "mamut"); // le decimos que a partir de el index 2 no elimine nada, y agregue elefante y mamut
animales.splice(1, 2); // le decimos que comience en el index 1(tigre) y que elmine 2 index (tigre y leon)
animales.splice(1, 1, "jaguar"); //le decimos que comience en el indes 1 (tigre) , que elimine 1 index(tigre) y que agregue en su lugar ('jaguar'). seria como reemplazar un elemento de el array
console.log(animales);

//.entries[];

//El método Object.entries() devuelve una matriz de pares propios de una propiedad enumerable [key, value] de un objeto dado, en el mismo orden que es proporcionado por for...in (La diferencia es que un bucle for-in enumera las propiedades en la cadena de prototipos).

let persona = { name: "miguel", edad: 25, pais: "argentina" };

console.log(persona); //{ name: 'miguel', edad: 25, pais: 'argentina' }

console.log(Object.entries(persona)); //[ [ 'name', 'miguel' ], [ 'edad', 25 ], [ 'pais', 'argentina' ] ]

let obtenerInfo = Object.entries(persona);
console.log(obtenerInfo[0]); // [ 'name', 'miguel' ]
console.log(obtenerInfo[1]); //[ 'edad', 25 ]
console.log(obtenerInfo[2]); //[ 'pais', 'argentina' ]
console.log(obtenerInfo[0][0]); //name
console.log(obtenerInfo[0][1]); //miguel
console.log(obtenerInfo[1][0]); //edad
console.log(obtenerInfo[1][1]); // 25
console.log(obtenerInfo[2][0]); //pais
console.log(obtenerInfo[2][1]); //argentina

//filter
//typeof
//operador tenario
