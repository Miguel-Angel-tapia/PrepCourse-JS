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

//Bucle infinito

//Esto no es un nuevo tipo de bucle, sino algo que se puede producir en los que ya aprendimos. Un bucle infinito se produce cuando un bucle comienza a ejecutarse, pero jamás termina. Esto se debe a que nunca se llega a la condición de quiebre.

//Esto consume muchos recursos de la computadora, por lo que hay que intentar evitarlos.

//MAS DE BUCLE FOR EN https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/for

//MAS DE BUCLE WHILE EN https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/while
