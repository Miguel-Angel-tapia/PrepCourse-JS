// la palabra clave `arguments` se refiere a un objeto similar a un array que está disponible dentro de todas las funciones. Este objeto arguments contiene los valores de todos los argumentos pasados a la función, independientemente de la cantidad de argumentos que se hayan declarado formalmente en la firma de la función.

//Aquí hay algunos puntos clave sobre arguments:

//Objeto Similar a un Array: Aunque arguments se parece a un array, no es un array en sí mismo. No tiene métodos de array como map, filter, etc.

//Dinámico: arguments es dinámico, lo que significa que refleja cualquier cambio en los argumentos de la función, incluso si esos cambios se realizan después de la llamada a la función.

//No Disponible en Funciones de Flecha: Las funciones de flecha en JavaScript no tienen su propio objeto arguments. Si necesitas acceso a los argumentos en una función de flecha, debes utilizar los parámetros de la función.
function ejemplo1() {
  console.log(arguments);
  return arguments;
}
ejemplo1(1, "dos", true); // Salida: { '0': 1, '1': 'dos', '2': true }

//Convertir a un Array: Aunque arguments no es un array, puedes convertirlo en un array para utilizar métodos de array. Por ejemplo:
function suma() {
  const argsArray = Array.from(arguments);
  const total = argsArray.reduce((acc, num) => acc + num, 0);
  console.log(total);
}
suma(1, 2, 3); // Salida: 6

//Puedes convertir arguments en un array utilizando Rest Parameters, como en el siguiente ejemplo:
function ejemplo() {
  const argsArray = [...arguments];
  console.log(argsArray);
}
ejemplo(1, "dos", true); // Salida: [1, "dos", true]

//En este caso, [...arguments] crea una copia del objeto arguments como un array. Esto te permite utilizar métodos de array directamente en argsArray. Ten en cuenta que, si bien [...arguments] es una opción, también es común usar Array.from(arguments) para realizar la conversión. Ambos métodos logran el mismo resultado.
