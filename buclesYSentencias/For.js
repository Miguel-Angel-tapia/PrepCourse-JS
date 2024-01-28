//BUCLE FOR : es utilizado cuando sabemos con antelación la cantidad máxima exacta de pasos que queremos ejecutar. Esta cantidad máxima de pasos se sitúa como segundo parámetro entre los paréntesis.
//Por ejemplo:
//-recorrer un array de longitud conocida.
//-Calcular la suma de los primeros 100 números naturales.
//-Imprimir los múltiplos de 5 en el rango del 1 al 50.
//-Generar una secuencia de Fibonacci con los primeros 10 términos.
//-Imprimir los elementos de un array en sentido inverso.
//-Crear un bucle para imprimir los números pares del 2 al 20.
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

//  for...in
//  Utilizado para iterar sobre las propiedades enumerables de un objeto, incluyendo las propiedades heredadas de su // prototipo. Proporciona acceso a los nombres de las propiedades, no a sus valores directos.Puede ser menos eficiente y // puede incluir propiedades que no estén directamente en el objeto (propiedades heredadas).
//  por ejemplo:
//  -Iterar sobre las propiedades de un objeto.
//  -Procesar las caracteristicas de un objeto.
//  -Validar propiedades de un objeto.
//  -Crear una lista de propiedades dinámicamente.
//  -Iterar sobre propiedades de objetos heredados.
//
//  for...of
//  Utilizado para iterar sobre valores de objetos iterables como arreglos, cadenas, conjuntos, mapas, etc. Proporciona un // acceso directo a los valores, haciendo que el código sea más limpio y fácil de leer.No recorre las propiedades del objeto, //  sino los valores contenidos en el objeto iterable.
//  por ejemplo:
//  -Iterar sobre elementos de un arreglo:Recorrer los elementos de una lista, como una lista de compras.
//  -Recorrer caracteres de una cadena de texto:Analizar y procesar cada letra de una palabra o frase.
//  -Trabajar con elementos únicos de un conjunto (Set):Acceder a cada elemento único de un conjunto de datos.
//  -Recorrer claves y valores de un mapa (Map):Iterar sobre pares clave-valor almacenados en un mapa.
//  -Iterar sobre los valores de un objeto iterable personalizado:Utilizar un objeto personalizado que implementa el protocolo // iterable.
