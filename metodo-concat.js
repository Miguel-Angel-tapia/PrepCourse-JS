//En JavaScript, el método concat() se utiliza para combinar dos o más arreglos o cadenas de texto, creando un nuevo arreglo o cadena sin modificar los arreglos o cadenas originales. Este método no afecta los arreglos o cadenas originales, sino que devuelve una nueva entidad que es el resultado de la concatenación.

//Concatenación de Cadenas:
let cadena1 = "Hola, ";
let cadena2 = "mundo!";
let resultado = cadena1.concat(cadena2);

console.log(resultado);
// Resultado: "Hola, mundo!"

//En este ejemplo, cadena1 y cadena2 se concatenan utilizando el método concat(), y el resultado se almacena en la variable resultado.

//Concatenación de Arreglos:
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let resultados = array1.concat(array2);

console.log(resultados);
// Resultado: [1, 2, 3, 4, 5, 6]

//En este caso, array1 y array2 son arreglos numéricos que se concatenan utilizando concat(). El resultado es un nuevo arreglo que contiene todos los elementos de ambos arreglos originales.

//Concatenación de Cadenas y Arreglos:
let cadena = "Hola, ";
let array = [1, 2, 3];
let resultad = cadena.concat(array);

console.log(resultad);
// Resultado: "Hola, 1,2,3"

//En este ejemplo, una cadena y un arreglo se concatenan utilizando concat(). La función trata al arreglo como un solo elemento y lo agrega a la cadena.

//Recuerda que concat() no modifica los arreglos o cadenas originales, sino que crea y devuelve una nueva entidad que representa la concatenación de los elementos.

//otra forma de concatenar, (no funciona con array)

//En JavaScript, puedes utilizar la sintaxis de plantillas de cadenas (template strings) con el uso de `` (backticks) y ${} para realizar concatenación de cadenas de manera más legible y flexible en comparación con el método concat(). Aquí hay una explicación y comparación:

let variable1 = "Hola";
let variable2 = "Mundo";

// Utilizando la sintaxis de plantillas de cadenas
let resultao = `${variable1}, ${variable2}!`;

console.log(resultao);
// Resultado: "Hola, Mundo!"

let nombre = "Juan";
let edad = 30;

// Uso de template strings
let mensaje = `Hola, mi nombre es ${nombre} y tengo ${edad} años.`;

console.log(mensaje);
// Resultado: Hola, mi nombre es Juan y tengo 30 años.
