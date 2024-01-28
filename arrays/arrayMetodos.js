//length: Devuelve la longitud (número de elementos) del array.
let frutas = [`mango`, `pera`];
console.log(frutas.length); // Imprime 2

//Métodos de Modificación y Manipulación://///////////////////////////////////////////////////
//push(): Añade elementos al final del array.
//unshift(): Agrega elementos al inicio del array.
//pop(): Elimina el último elemento del array.
//shift(): Elimina el primer elemento del array.
//splice(): Cambia el contenido del array eliminando y/o agregando elementos.
{
  //             Modificación del Tamaño:************

  //ejemplos
  //El método push() añade uno o más elementos al final de un arreglo, y devuelve la nueva longitud del array.
  let colores = ["amarillo", "azul"];
  colores.push("rojo");

  //El método unshift() agrega uno o más elementos al inicio de un arreglo, y devuelve la nueva longitud del array.
  colores.unshift("verde");

  //El método pop() elimina y devuelve el último elemento de un arreglo.
  colores.pop();

  //El método shift() elimina y devuelve el primer elemento de un arreglo.
  colores.shift();
  console.log(colores); //quedo [`amarillo`, `azul`]

  //            Manipulación de Elementos:***********

  //El método splice() cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos.
  //SINTAXIS.splice(INDEX, BORRAR, AGREGAR)
  let animales = ["puma", "tigre", "leon", "perro", "gato"];
  animales.splice(2, 0, "elefante", "mamut"); //en el index 2 no elimine nada, y agregue elefante y mamut
  console.log(animales);

  let familia = [`perez`, `tapia`, `garcia`, `lopez`, `diaz`];
  familia.splice(1, 2, "gomez"); //(puede agregar mas de uno)
  //1(desde que indice elimina (incluido).)
  //2(cuantos indices elimina incluyendo donde empieza (tapia y garcia))
  console.log(familia); //queda [ `perez`, `gomez`, `lopez`, `diaz` ]
}
//Métodos de Acceso y Búsqueda:///////////////////////////////////////////////////////////////
//indexOf(): Devuelve el índice de la primera aparición de un elemento.
//includes(): Determina si un array incluye un elemento específico.
//find(): Devuelve el primer elemento que cumple una condición.
//some(): Determina si al menos un elemento cumple una condición.
//every(): Determina si todos los elementos cumplen una misma condición.
{
  //            Acceso a Elementos:*************

  //indexOf(): Devuelve el índice de la primera aparición de un elemento.
  let familia = [`perez`, `tapia`, `garcia`, `lopez`, `diaz`];
  console.log(familia.indexOf("gomez")); // Imprime 1

  //El método includes() determina si un array incluye o contiene un elemento específico. Devuelve true o false en cada caso.
  let pintores = ["picaso", "dali", "van gogh", "velazques"];
  let incluyeMiguel = pintores.includes("miguel");
  let incluyeDali = pintores.includes("dali");
  console.log(incluyeDali); //true
  console.log(incluyeMiguel); //false

  //            Búsqueda y Validación:*************

  //find(callback): este metodo Devuelve el primer elemento que cumple con la condición dada por la función de prueba.
  const nummeros = [1, 2, 3, 4, 5];
  const encontrado = nummeros.find((numero) => numero > 2);
  console.log(encontrado); // Resultado: 3

  //El metodo some() determina si al menos un elemento cumple con la condicion
  var resultado = nummeros.some((elemento) => elemento < 3);
  console.log(resultado); // Imprime true

  //El método every() determina si todos los elementos de array cumplen una misma condición.
  const nnnumeros = [1, 2, 3, 4, 5];

  const todosMayoresQueCero = nnnumeros.every((numero) => numero > 0);
  console.log(todosMayoresQueCero); // Resultado: true: son todos mayores a 0

  const todosMayoresQueUno = nnnumeros.every((numero) => numero > 1);
  console.log(todosMayoresQueUno); // Resultado: false: ya que 1, no es mayor a 1
}
//Métodos de Ordenamiento y Transformación:////////////////////////////////////////////////
//sort(): Ordena los elementos del array.
//reverse(): Invierte el orden de los elementos del array.
//slice(): Devuelve una copia de una porción del array.
//map(): Crea un nuevo array con elementos modificados.
//filter(): Crea un nuevo array con elementos que cumplen una condición.
{
  //            Ordenamiento:*****************

  //El método sort()ordena los elementos de un array localmente y devuelve el arreglo ordenado. La ordenación no es necesariamente estable . El modo de ordenación por defecto responde a la posición del valor de la cadena de acuerdo a su valor Unicode
  let numArray = [2, 6, 3, 8, 4, 9];
  console.log(numArray.sort()); //result: [ 2, 3, 4, 6, 8, 9 ]

  let stringArray = ["c", "b", "a"];
  console.log(stringArray.sort()); //result: [ 'a', 'b', 'c' ]

  let numArray2 = [100, 17, 110, 25, 31, 211];
  console.log(numArray2.sort()); //result: [ 100, 110, 17, 211, 25, 31 ] de esta manera solo toma el primer y segundo digito de el numero, deberiamos crear una funcion

  function comparar(a, b) {
    return a - b;
  }
  console.log(numArray2.sort(comparar)); // result: [ 17, 25, 31, 100, 110, 211 ]
  console.log(numArray2.sort((a, b) => a - b)); // result: [ 17, 25, 31, 100, 110, 211 ]

  //El método reverse() invierte el orden de los elementos de un array, El primer elemento pasa a ser el último y el último pasa a ser el primero.
  let invertir = ["uno", "dos", "tres", `cuatro`, 1, 2, 3];
  let invertido = invertir.reverse();
  console.log(invertido); //devuelve [ 3, 2, 1, `cuatro`, tres`, `dos`, `uno`]

  //            Transformación y Copia:*****************

  //slice(inicio[, fin]): el metodo Devuelve una copia de una porción del array, especificada por el inicio y el fin.
  const numeeeeros = [`index 0`, `index 1`, `index 2`, `index 3`, `index 4`];
  const subArray = numeeeeros.slice(1, 3); // incia index 1(incluyendo), y copia hasta index 3(no incluido).
  console.log(subArray); // Resultado: [`index 1`, `index 2`]

  //map(): Crea un nuevo array con elementos modificados.
  //El método map() también nos permite recorrer un arreglo y realizar una acción por cada elemento. La diferencia es que este método devuelve un nuevo arreglo los elementos modificados.
  {
    let numerosArray = [1, 2, 3, 4];
    let masUno = numerosArray.map((num) => {
      return num + 1;
    });
    console.log(masUno); //retorna [ 2, 3, 4, 5 ] , ya que copiamos el array, pero le sumamos 1, a cada elemento.
    //Crea un nuevo array aplicando una función a cada elemento del array original.
    const nnumeros = [1, 2, 3];
    const duplicados = nnumeros.map((numero) => numero * 2);
    console.log(duplicados); // Resultado: [2, 4, 6]

    //filter(callback): Crea un nuevo array con elementos que cumplen una condición.
    let filtrarNumeros = [1, 2, 3, 4, 5, 6];
    const pares = filtrarNumeros.filter((numero) => numero % 2 === 0);
    console.log(pares);
    // Resultado: [ 2, 4, 6 ] , ya que son los unicos que cumplen la condicion de que su resto sea 0, por eso son pares
  }
}
//Métodos de Conversión://///////////////////////////////////////////////////
//toString(): Devuelve una cadena representando el array y sus elementos.
//join(): Convierte un arreglo en un string, uniendo todos los elementos.
{
  //            Conversión a Cadenas:*******************
  //toString(): Devuelve una cadena representando el array y sus elementos.
  //El método toString() devuelve una cadena de caracteres representando el array especificado y sus elementos.
  let array17 = [1, 2, "a", "1a"];

  console.log(array17.toString());
  // Expected output: "1,2,a,1a"

  //join(): Convierte un arreglo en un string, uniendo todos los elementos.
  //El método join() convierte un arreglo en un string, uniendo todos los elementos de este en una misma cadena.
  var a = ["Viento", "Lluvia", "Fuego"];
  var miVar1 = a.join(); // asigna 'Viento,Lluvia,Fuego' a miVar1
  var miVar2 = a.join(", "); // asigna 'Viento, Lluvia, Fuego' a miVar2
  var miVar3 = a.join(" + "); // asigna 'Viento + Lluvia + Fuego' a miVar3
  var miVar4 = a.join(``); // asigna 'VientoLluviaFuego' a miVar4
  var miVar5 = a.join("-"); // asigna 'viento-lluvia-fuego' a mi var5

  let palabra2 = "henri";
  let palabraSeparada2 = palabra2.split("");
  palabraSeparada2.pop();
  palabraSeparada2.push("y");
  let palabraArreglada2 = palabraSeparada2.join("");
  console.log(palabraArreglada2); //retorna `henry`, le cambiamos la ultima letra
}
//Otros metodos:///////////////////////////////////////////////////////////////
//forEach(): Realiza una acción por cada elemento del array.
//reduce(): Ejecuta una función reductora sobre cada elemento del array.
{
  //        Iteración y Acciones Específicas:******************
  //forEach(): Realiza una acción por cada elemento del array.
  //El método forEach() nos permite recorrer un arreglo, realizando alguna acción en para cada elemento.
  let numero = [1, 2, 3, 4];
  numero.forEach((num) => console.log(num));
  numero.forEach((num) => {
    if (num === 3) {
      console.log(num); // devuelve 3, es el unico que cumple la condicion
    }
  });

  //indexOf : el metodo Buscan la primera (o última) ocurrencia de un valor en el array. indexOf(valor[, desde]) y lastIndexOf(valor[, desde])
  const numeross = [1, 2, 3, 4, 2, 5];
  const indice = numeross.indexOf(2);
  console.log(indice); // Resultado: 1, ya que el numero 2, se encuentra en el indice 1

  //El método split() convierte un string en un array, donde cada elemento contendrá un sub-string, dependiendo del parámetro divisor que indiquemos. en este caso ""
  let palabra = "henri";
  let palabraSeparada = palabra.split("");
  palabraSeparada.pop();
  palabraSeparada.push("y");
  console.log(palabraSeparada);

  //            Reducción:*****************
  //reduce(): Ejecuta una función reductora sobre cada elemento del array.

  // El método reduce() ejecuta una función reductora sobre cada elemento de un array, devolviendo como resultado un único valor
  //La función reductora recibe cuatro argumentos:

  //Acumulador (acc)
  //Valor Actual (cur)
  //Índice Actual (idx)
  //Array (src)
  //El valor devuelto de la función reductora se asigna al acumulador, cuyo valor se recuerda en cada iteración de la matriz y, en última instancia, se convierte en el valor final, único y resultante.

  //Sintaxis
  //    arr.reduce(callback(acumulador, valorActual[, índice[, array]])[, valorInicial])

  const arr = [1, 2, 3, 4, 5];
  const sumas = arr.reduce((acc, cur) => acc + cur, 0); //abreviado nombres parametros
  console.log(sumas); // Resultado: 15

  //ej:
  let array1 = [1, 2, 3, 4];

  // 0 + 1 + 2 + 3 + 4
  let initialValue = 0;
  let sumWithInitial = array1.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue
  );
  console.log(sumWithInitial); //imprime 10

  //otro ej
  const numeritos = [1, 2, 3, 4, 5];

  const suma = numeritos.reduce(function (acumulador, numero) {
    return acumulador + numero;
  }, 0);

  console.log(suma); // Resultado: 15

  //const numeros = [1, 2, 3, 4, 5];: Creamos un array llamado numeros que contiene los números del 1 al 5.
  //const suma = numeros.reduce(function(acumulador, numero) { ... }, 0);: Utilizamos el método reduce() en el array numeros.
  //function(acumulador, numero) { return acumulador + numero; }: La función reductora recibe dos argumentos en cada iteración: acumulador y numero. En este caso, simplemente suma el acumulador actual y el número actual.
  //0 (valor inicial del acumulador): Se proporciona como segundo argumento a reduce(). En la primera iteración, acumulador toma el valor inicial de 0 y se suma con el primer número del array.
  //console.log(suma); // Resultado: 15: Imprimimos el resultado final de la suma, que es 15.

  //const numeros = [1, 2, 3, 4, 5];

  //const suma = numeros.reduce((acumulador, numero) => acumulador + numero, 0);
  console.log(suma); // Resultado: 15

  //El método reduce() es muy versátil y se puede utilizar para realizar una variedad de operaciones, como encontrar el valor máximo o mínimo, concatenar elementos de un array, realizar operaciones de transformación y más. La clave es entender cómo funciona la función reductora y cómo se acumulan los valores a lo largo del proceso.

  //mas elementos de array https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array
}
