//Crea un bucle que consiste en tres expresiones opcionales, encerradas en paréntesis y separadas por puntos y comas, seguidas de una sentencia ejecutada en un bucle.
//Sintaxis: for ([expresion-inicial]; [condicion]; [expresion-final])sentencia
let arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

function encontrarLetraP(string) {
  let letras = string.split("");

  for (let i = 0; i < letras.length; i++) {
    if (letras[i] === "p") {
      console.log("Si contiene a P");
    }
  }
}
encontrarLetraP("javascript");
encontrarLetraP("miguel");
encontrarLetraP("pedro");

//Crea un bucle que ejecuta una sentencia especificada mientras cierta condición se evalúe como verdadera. Dicha condición es evaluada antes de ejecutar la sentencia.
//Sintaxis: while (condicion) sentencia

let array = [];

while (array.length < 5) {
  array.push("boom");
}
console.log(array);

//switch
//La declaración switch evalúa una expresión, comparando el valor de esa expresión con una instancia case, y ejecuta declaraciones asociadas a ese case, así como las declaraciones en los case que siguen.
switch (expresión) {
  case valor1:
    //Declaraciones ejecutadas cuando el resultado de expresión coincide con el valor1
    break;
  case valor2:
    //Declaraciones ejecutadas cuando el resultado de expresión coincide con el valor2
    break;
}

//El método forEach() ejecuta la función indicada una vez por cada elemento del array.
//Bucle infinito
const array1 = ["a", "b", "c"];

array1.forEach((element) => console.log(element));

// retorna: "a"
// retorna: "b"
// retorna: "c"
//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

//Esto no es un nuevo tipo de bucle, sino algo que se puede producir en los que ya aprendimos. Un bucle infinito se produce cuando un bucle comienza a ejecutarse, pero jamás termina. Esto se debe a que nunca se llega a la condición de quiebre.

//Esto consume muchos recursos de la computadora, por lo que hay que intentar evitarlos.

//MAS DE BUCLE FOR EN https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/for

//MAS DE BUCLE WHILE EN https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/while
