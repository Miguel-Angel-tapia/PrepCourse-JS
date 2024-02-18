//typeof es un operador en JavaScript que se utiliza para obtener el tipo de datos de una expresión. Su sintaxis es la siguiente:

var numero = 42;
console.log(typeof numero); // Imprime "number"
console.log(typeof numero === "number"); // Imprime "true"

var texto = "Hola, mundo!";
console.log(typeof texto); // Imprime "string"
console.log(typeof texto === "string"); // Imprime "true"

var booleano = true;
console.log(typeof booleano); // Imprime "boolean"
console.log(typeof booleano === "boolean"); // Imprime "true"

var arreglo = [1, 2, 3];
console.log(typeof arreglo); // Imprime "object"
console.log(typeof arreglo === "object");

var objeto = { nombre: "Juan", edad: 25 };
console.log(typeof objeto); // Imprime "object"
console.log(typeof objeto === "object"); // Imprime "true"

var funcion = function () {};
console.log(typeof funcion); // Imprime "function"
console.log(typeof funcion === "function"); // Imprime "true"

var nulo = null;
console.log(typeof nulo); // Imprime "object"
console.log(typeof nulo === "object");

var indefinido;
console.log(typeof indefinido); // Imprime "undefined"
console.log(typeof indefinido === "undefined");

//Es importante notar que typeof null devuelve "object", lo cual es considerado un error de diseño en JavaScript, pero se mantiene por razones de compatibilidad. Por lo tanto, al usar typeof, debes tener en cuenta esta particularidad.

//ejemplo CONDICIONAL

function procesarDato(dato) {
  if (typeof dato === "number") {
    console.log("Es un número");
  } else if (typeof dato === "string") {
    console.log("Es una cadena de texto");
  } else if (typeof dato === "boolean") {
    console.log("Es un valor booleano");
  } else if (typeof dato === "object") {
    console.log("Es un objeto");
  } else if (typeof dato === "function") {
    console.log("Es una función");
  } else if (typeof dato === "undefined") {
    console.log("La variable está indefinida");
  } else {
    console.log("Tipo de dato desconocido");
  }
}
procesarDato(); //La variable está indefinida
procesarDato(``); //Es una cadena de texto
procesarDato(1); //Es un número
procesarDato(null); //Es un objeto
procesarDato(true); //Es un valor booleano
procesarDato(mostrarTipoDato); //Es una función

//ejemplo FUNCIONES

function mostrarTipoDato(dato) {
  var tipo = typeof dato;

  switch (tipo) {
    case "number":
      console.log("Es un número");
      break;
    case "string":
      console.log("Es una cadena de texto");
      break;
    case "boolean":
      console.log("Es un valor booleano");
      break;
    case "object":
      console.log("Es un objeto");
      break;
    case "function":
      console.log("Es una función");
      break;
    case "undefined":
      console.log("La variable está indefinida");
      break;
    default:
      console.log("Tipo de dato desconocido");
  }
}
mostrarTipoDato(); //La variable está indefinida
mostrarTipoDato(``); //Es una cadena de texto
mostrarTipoDato(1); //Es un número
mostrarTipoDato(null); //Es un objeto
mostrarTipoDato(true); //Es un valor booleano
mostrarTipoDato(mostrarTipoDato); //Es una función
