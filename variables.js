//En JavaScript, las variables se utilizan para almacenar y manipular datos. Antes de usar una variable, necesitas declararla utilizando una de las palabras clave de declaración de variables como var, let, o const. Aquí hay ejemplos de cómo declarar variables y asignarles valores:

//Las variables declaradas con var tienen un alcance de función.
var edad = 25; // Declarar una variable llamada "edad" y asignarle el valor 25
var nombre = "Juan"; // Declarar una variable llamada "nombre" y asignarle el valor "Juan"

//Las variables declaradas con let tienen un alcance de bloque.
let cantidad = 10; // Declarar una variable llamada "cantidad" y asignarle el valor 10
let ciudad = "México"; // Declarar una variable llamada "ciudad" y asignarle el valor "México"

//Las constantes (const) son variables que no pueden ser reasignadas después de la primera asignación.
const PI = 3.1416; // Declarar una constante llamada "PI" y asignarle el valor 3.1416
const nombre = "Ana"; // Declarar una constante llamada "nombre" y asignarle el valor "Ana"

//Tipos de datos:

// String : Representa secuencias de caracteres.
var bootcamp = "Henry";

// Números : representa un valor numerico.
var numeroEntero = 17;
var numeroNegativo = -4;
var numeroDecimal = 11.75;

// Booleanos : Representa un valor lógico verdadero o falso.
var estoyEntendiendo = true;
var estoyAburrido = false;

// Undefined : Representa una variable que ha sido declarada pero no asignada ningún valor definido.
var cajon1;
console.log(cajon1);

// Null : Representa la ausencia intencionada de cualquier valor o referencia a un objeto.
var sinNada = null;

//El "scope" (ámbito en español) en programación se refiere a la región del código donde una determinada variable puede ser accesible y modificada. En otras palabras, el ámbito define la visibilidad y duración de una variable en un programa.

//Hay varios tipos de ámbitos, pero los dos principales son:

//Ámbito Global: Una variable declarada en el ámbito global es accesible desde cualquier parte del programa, ya sea dentro de funciones, bloques de código, o cualquier otro contexto.
var globalVariable = 10;

function exampleFunction() {
  console.log(globalVariable); // Puede accederse desde cualquier lugar en el programa
}

//Ámbito Local (o de Bloque): Una variable declarada dentro de una función o bloque de código tiene ámbito local y solo es accesible dentro de ese contexto específico.

function exampleFunction() {
  var localVariable = 20;
  console.log(localVariable); // Solo puede accederse dentro de esta función
}

//El concepto de ámbito es esencial para entender cómo las variables interactúan en un programa y cómo se manejan en distintas partes del código. En lenguajes de programación como JavaScript, el tipo de palabra clave utilizada para declarar una variable (como var, let o const) afecta el ámbito de esa variable. Por ejemplo, var tiene ámbito de función, mientras que let y const tienen ámbito de bloque.

//var:
//Ámbito de función.
//Hoisting.
//Se puede redeclarar.
//Puede ser declarada sin inicializar.

//let:
//Ámbito de bloque.
//No puede ser redeclarada en el mismo ámbito.
//Puede ser declarada sin inicializar.

//const:
//Ámbito de bloque.
//No puede ser reasignada después de la inicialización.
//Debe ser inicializada al momento de la declaración.
