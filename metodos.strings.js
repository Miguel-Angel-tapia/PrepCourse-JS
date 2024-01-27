//            ALGUNOS METODOS STRINGS

//    startsWith():  Método que verifica si una cadena comienza con ciertos caracteres.
var texto = "Hola, mundo";
console.log(texto.startsWith("Hola")); // Devuelve true

//    endsWith():  Método que verifica si una cadena termina con ciertos caracteres.
var texto = "Hola, mundo";
console.log(texto.endsWith("mundo")); // Devuelve true

//    includes(): Método que verifica si una cadena contiene ciertos caracteres.
var texto = "Hola, mundo";
console.log(texto.includes("mundo")); // Devuelve true

//    repeat(): Método que repite una cadena cierto número de veces.
var texto = "Hola";
console.log(texto.repeat(3)); // Devuelve "HolaHolaHola"

//    padStart() y padEnd(): Métodos que llenan la cadena con un carácter específico al principio o al final hasta alcanzar una longitud deseada
var texto = "Hola";
console.log(texto.padStart(8, "*")); // Devuelve "****Hola"
console.log(texto.padEnd(8, "*")); // Devuelve "Hola****"

//    length: Propiedad que devuelve la longitud de la cadena o arreglo.
var texto = "Hola";
console.log(texto.length); // Devuelve 4

//    charAt(): Método que devuelve el carácter en una posición específica de la cadena.
var texto = "Hola";
console.log(texto.charCodeAt(1)); // Devuelve 111 (valor Unicode de "o")

//    substr(): Método que extrae una cantidad específica de caracteres a partir de una posición.
var texto = "Hola";
console.log(texto.substr(1, 2)); // Devuelve "ol"

//    slice(): Método que extrae una porción de la cadena o arreglo.
var texto = "Hola";
console.log(texto.slice(1, 3)); // Devuelve "ol"

//    substring(): Método similar a slice(), pero no admite índices negativos.
var texto = "Hola";
console.log(texto.substring(1, 3)); // Devuelve "ol"

//    indexOf(): Método que devuelve el índice de la primera aparición de un valor en la cadena o arreglo.
var texto = "Hola, mundo";
console.log(texto.indexOf("mundo")); // Devuelve 6

//    lastIndexOf():Método que devuelve el índice de la última aparición de un valor en la cadena o arreglo.
var texto = "Hola, mundo, mundo";
console.log(texto.lastIndexOf("mundo")); // Devuelve 13

//    toUpperCase():Método que convierte la cadena a mayúsculas.
var texto = "Hola";
console.log(texto.toUpperCase()); // Devuelve "HOLA"

//    toLowerCase():Método que convierte la cadena a minúsculas.
var texto = "Hola";
console.log(texto.toLowerCase()); // Devuelve "hola"

//     trim():Método que elimina los espacios en blanco al principio y al final de la cadena.
var texto = "   Hola   ";
console.log(texto.trim()); // Devuelve "Hola"

//     split(): Método que divide la cadena en un array de subcadenas basadas en un delimitador.
var texto = "Hola, mundo";
var arrayDePalabras = texto.split(", ");
console.log(arrayDePalabras); // Devuelve ["Hola", "mundo"]

//    concat(): Método que combina dos o más cadenas o arreglos.
var texto1 = "Hola";
var texto2 = "Mundo";
console.log(texto1.concat(", ", texto2)); // Devuelve "Hola, Mundo"

//    replace(): Método que reemplaza una subcadena con otra.
var texto = "Hola, mundo";
console.log(texto.replace("mundo", "Planeta")); // Devuelve "Hola, Planeta"
