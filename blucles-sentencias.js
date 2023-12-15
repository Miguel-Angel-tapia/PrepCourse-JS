//Crea un bucle que consiste en tres expresiones opcionales, encerradas en paréntesis y separadas por puntos y comas, seguidas de una sentencia ejecutada en un bucle.

//BUCLE FOR : es utilizado cuando sabemos con antelación la cantidad máxima exacta de pasos que queremos ejecutar. Esta cantidad máxima de pasos se sitúa como segundo parámetro entre los paréntesis.
//SOLO PODEMOS RECORRER ARREGLOS ELEMENTO POR ELEMENTO
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

//El Bucle While es usado cuando no tenemos la certeza de cuántos pasos vamos a necesitar hasta finalizar la ejecución. Por ejemplo, podríamos pensar en una función que siga agregando +1 hasta llegar a un número determinado.
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
  default:
    //Declaraciones ejecutadas cuando ninguno de los valores coincide con el valor de la expresión
    break;
}
// ejemplo:
switch (expresión) {
  case "Naranjas":
    console.log("El kilogramo de naranjas cuesta $0.59.");
    break;
  case "Manzanas":
    console.log("El kilogramo de manzanas cuesta $0.32.");
    break;
  case "Platanos":
    console.log("El kilogramo de platanos cuesta $0.48.");
    break;
  case "Cerezas":
    console.log("El kilogramo de cerezas cuesta $3.00.");
    break;
  case "Mangos":
  case "Papayas":
    console.log("El kilogramo de mangos y papayas cuesta $2.79.");
    break;
  default:
    console.log("Lo lamentamos, por el momento no disponemos de " + expr + ".");
}

console.log("¿Hay algo más que te quisiera consultar?");
//DO WHILE
//La sentencia do...while (hacer mientras) crea un bucle que ejecuta una sentencia especificada, hasta que la condición de comprobación se evalúa como falsa. La condición se evalúa después de ejecutar la sentencia, dando como resultado que la sentencia especificada se ejecute al menos una vez.

//SINTAXIS
do {
  //  sentencia;
} while (condición);

//En el siguiente ejemplo, el bucle hacer mientras itera al menos una vez y se reitera hasta que i ya no sea menor que 5.
do {
  i += 1;
  document.write(i);
} while (i < 5);
//devuelve: 12345

//CONTINUE:Termina la ejecución de las sentencias de la iteración actual del bucle actual o la etiqueta y continua la ejecución del bucle con la próxima iteración.
//ejemplo:
let I = 0;
do {
  i += 1;
  if (i === 3) {
    // Aplica continue si i es igual a 3
    continue;
  }
  document.write(i);
} while (i < 5);
//devuelve: 1245

//BREAK: Termina el bucle actual, sentecia switch o label y transfiere el control del programa a la sentecia de terminación de éstos elementos.
//EJEMPLO:
let i = 0;
do {
  i += 1;
  if (i === 3) {
    // Aplica break si i es igual a 3
    break;
  }
  document.write(i);
} while (i < 5);
//DEVUELVE: 12
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
