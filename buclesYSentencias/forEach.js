//El método forEach() Específicamente diseñado para arrays.cuando necesitas iterar sobre cada elemento sin preocuparte por el índice.
//Por ejemplo:
//-cuando deseas realizar una operación en cada elemento de un array.
//-Imprimir todos los elementos de una lista de contactos.
//-Calcular el promedio de calificaciones de una lista de estudiantes.
//-Filtrar y mostrar solo los productos en stock en una lista de inventario.
//-Realizar una operación en cada elemento de un array y almacenar los resultados en un nuevo array.
//-Iterar sobre los elementos de un conjunto de datos y actualizar sus valores.

let numerosss = [1, 2, 3, 4, 5];
let ii = 0;

numerosss.forEach(function (numero) {
  ii += 1;
  console.log(numero);
});

console.log("Valor final de i:", ii); // devuelve: `valor final de i: 5`

//En este ejemplo, estamos utilizando forEach para iterar sobre cada elemento del arreglo numeros. La función que pasamos como argumento se ejecutará para cada elemento del arreglo. Dentro de esa función, incrementamos la variable i. Al final, imprimimos el valor de cada número y el valor final de i.//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

//Esto consume muchos recursos de la computadora, por lo que hay que intentar evitarlos.

//  ACLARAR el bucle for solo sirve para recorrer arrays elemento por elemento
//          el bucle for in solo sirve para recorrer objetos propiedad por propiedad
