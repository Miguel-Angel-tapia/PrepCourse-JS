//typeof es un operador en JavaScript que se utiliza para obtener el tipo de datos de una expresión. Su sintaxis es la siguiente:

var numero = 42;
console.log(typeof numero); // Imprime "number"

var texto = "Hola, mundo!";
console.log(typeof texto); // Imprime "string"

var booleano = true;
console.log(typeof booleano); // Imprime "boolean"

var arreglo = [1, 2, 3];
console.log(typeof arreglo); // Imprime "object"

var objeto = { nombre: "Juan", edad: 25 };
console.log(typeof objeto); // Imprime "object"

var funcion = function () {};
console.log(typeof funcion); // Imprime "function"

var nulo = null;
console.log(typeof nulo); // Imprime "object"

var indefinido;
console.log(typeof indefinido); // Imprime "undefined"

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
procesarDato();
procesarDato(``);
procesarDato(1);
procesarDato(null);
procesarDato(true);
procesarDato(mostrarTipoDato);

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
mostrarTipoDato();
mostrarTipoDato(``);
mostrarTipoDato(1);
mostrarTipoDato(null);
mostrarTipoDato(true);
mostrarTipoDato(mostrarTipoDato);
