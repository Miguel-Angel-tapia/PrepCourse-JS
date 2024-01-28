//las funciones son bloques de código en JavaScript diseñados para realizar una tarea específica. Pueden recibir datos, conocidos como parámetros, realizar operaciones y devolver un resultado. Las funciones se utilizan para modularizar el código, reutilizar lógica y hacer que el código sea más legible.

//parametros:  Son variables que se definen en la declaración de una función. Estos actúan como marcadores de posición para los valores que se pasarán a la función cuando se llame. Los parámetros están presentes en la definición de la función.

//argumentos:Son los valores reales que se pasan a una función cuando se la llama. Estos valores se asignan a los parámetros correspondientes durante la ejecución de la función.

function nombreDeLaFuncion(parametro1, parametro2 /* ... */) {
  // Cuerpo de la función
  // Aquí va la lógica de la función
  // Puedes utilizar los parámetros y realizar operaciones

  // Devolver un resultado, si es necesario
  let resultado = parametro1 + parametro2;
  return resultado;
}
console.log(nombreDeLaFuncion(1, 2)); //devuelve 3 (le pasamos 1 y 2 como argumentos)

// en este ejemplo, la estructura basica es:

// la palabra reservada function. indicando que estamos declarando una function

// nombreDeLaFuncion: Identificador que asignas a la función. Debe seguir las reglas de nomenclatura de variables.

//parametro1, parametro2, etc.: dentro de el parentesis, es el espacio para los parametros,o argumentos, le damos informacion a nuestra funcion, Son variables locales a la función y se utilizan para pasar información a la función.

// dentro de las llaves, es el cuerpo de la funcion. aqui indicamos las intruciones que ejecutara la funcion

//return: Palabra clave que indica el valor que la función debe devolver. Una función puede no tener un return o puede devolver cualquier tipo de dato.

//funcion simple sin parametros:
function saludarme() {
  console.log("¡Hola, Miguel!");
}

saludarme(); // Llamada a la función

//funcion con parametros:
function sumar(a, b) {
  let resultado = a + b;
  return resultado;
}
console.log(sumar(2, 2)); //devuelve 4

let resultadoSuma = sumar(5, 3); // Llamada a la función con argumentos
console.log(resultadoSuma); // Imprime 8

//funcion con parametros y default values:
function saludar(nombre = "Invitado") {
  console.log("¡Hola, " + nombre + "!");
}

saludar(); // Imprime "¡Hola, Invitado!"
saludar("Juan"); // Imprime "¡Hola, Juan!"

//funcion arrow(funciones flecha)
const restar = (a, b) => a - b;

let resultadoResta = restar(8, 3);
console.log(resultadoResta); // Imprime 5

const duplicar = (numero) => numero * 2;
console.log(duplicar(2)) //imprime 4