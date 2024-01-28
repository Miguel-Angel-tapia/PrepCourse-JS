// El operador de propagación se denota por tres puntos suspensivos ... algunas de sus funciones principales:

//                      copiar arrays
const arrayOriginal = [1, 2, 3];
const copiaArray = [...arrayOriginal];
console.log(arrayOriginal); //[ 1, 2, 3 ]
console.log(copiaArray); //[ 1, 2, 3 ]
//En este caso, copiaArray será una copia independiente de arrayOriginal.

//                     Concatenar Arrays:
const array2 = [1, 2, 3];
const array3 = [4, 5, 6];
const concatenado = [...array2, ...array3];
console.log(concatenado); //concatenado será [ 1, 2, 3, 4, 5, 6 ]

//                   Agregar Elementos a un Array:
const arrayOriginal1 = [1, 2, 3];
const nuevoArray = [...arrayOriginal1, 4];
console.log(nuevoArray); //nuevoArray será [ 1, 2, 3, 4 ]

//                     Objetos Literales:
const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3 };
console.log(obj2); // devuelve { a: 1, b: 2, c: 3 }
//Aquí, el operador de propagación se utiliza para combinar propiedades de objetos.

//              Funciones con Número Variable de Argumentos:

function suma(...numeros) {
  return numeros.reduce((total, num) => total + num, 0);
}
console.log(suma(12, 12, 12, 12)); //devuelve 48 y  podemos aregarle muchos argumentos mas
//La función suma puede aceptar cualquier número de argumentos, ya que numeros será un array que contiene todos los argumentos pasados.
