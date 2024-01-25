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
