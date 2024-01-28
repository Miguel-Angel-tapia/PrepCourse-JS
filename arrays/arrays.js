//un array es una estructura de datos que permite almacenar varios elementos o valores en una sola variable.
//Cada elemento en un array tiene un índice que indica su posición en la lista.Los índices en JavaScript comienzan desde cero.

//Creación de un Array:
//Puedes crear un array de varias maneras. La forma más común es utilizando corchetes [] y separando los elementos por comas:

// Crear un array de números
let numeros = [1, 2, 3, 4, 5];

// Crear un array de cadenas de texto
let frutas = ["Manzana", "Plátano", "Uva"];

// Crear un array mixto con diferentes tipos de datos
let mezclado = [1, "Hola", true, 3.14];

//Acceso a Elementos:
//Puedes acceder a los elementos de un array utilizando su índice:
console.log(numeros[0]); // Imprime 1
console.log(frutas[1]); // Imprime "Plátano"

//Modificación de Elementos:
//Puedes modificar los elementos de un array asignando un nuevo valor a un índice específico:
frutas[0] = "Pera";
console.log(frutas); // Ahora, el array es ["Pera", "Plátano", "Uva"]

//ejemplo

let listDeCompras = [];

//podemos definir en que indice se guarda el elemento en el array

listDeCompras[3] = "tomates";
listDeCompras[1] = "lechuga"; // [ 0, `lechuga`, 2, `tomates` ]
console.log(listDeCompras); //imprime [ <1 empty item>, 'lechuga', <1 empty item>, 'tomates' ] porque se guarda los espacios que salteamos

//Por un lado tenemos lo que se conoce como elemento. Los elementos son aquellos datos que hayamos guardado.

//Por otro lado, está el concepto de índice. Los índices no representan al dato en sí mismo, sino la posición en la que se está guardando. Un detalle muy importante que hay que destacar es que, en los arreglos, siempre se comienza a contabilizar las posiciones desde el número cero, no el uno.

// Ver lista de compras
let elementoDelArray = listDeCompras[1];
console.log(elementoDelArray); // imprime Lechuga/ el elemento que guardamos

////podemos conocer, cuantos elementos tiene un array con el metodo .length
let nombres = ["Matias", "Maria", "Diego", "Rosa"];
console.log(nombres); //imprime [ 'Matias', 'Maria', 'Diego', 'Rosa' ]
console.log(nombres.length); //imprime 4, la cantidad de elementos.
