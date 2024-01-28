//El Bucle While es usado cuando no tenemos la certeza de cuántos pasos vamos a necesitar hasta finalizar la ejecución. Por ejemplo, podríamos pensar en una función que siga agregando +1 hasta llegar a un número determinado.
//Crea un bucle que ejecuta una sentencia especificada mientras cierta condición se evalúe como verdadera. Dicha condición es evaluada antes de ejecutar la sentencia.
//por ejemplo:
//-Pedir al usuario que adivine un número secreto hasta que lo adivine correctamente.
//-Recuperar y mostrar tweets de un usuario de Twitter hasta que no haya más tweets disponibles.
//-Validar la entrada del usuario para asegurarse de que ingrese una opción válida del menú.
//-Simular un juego de dados hasta que el usuario decida dejar de jugar.
//-Esperar a que una tarea asíncrona se complete antes de continuar con la ejecución del programa.
//Sintaxis: while (condicion) sentencia

let array = [];

while (array.length < 5) {
  array.push("boom");
}
console.log(array); // muestra [`boom`, `boom`, `boom`, `boom`, `boom`, ]

//DO WHILE
//La sentencia do...while (hacer mientras) crea un bucle que ejecuta una sentencia especificada, hasta que la condición de comprobación se evalúa como falsa. La condición se evalúa después de ejecutar la sentencia, dando como resultado que la sentencia especificada se ejecute al menos una vez.
//por ejemplo:
//-Solicitar al usuario que ingrese su contraseña al menos una vez y continuar haciéndolo hasta que cumpla con los //requisitos.
//-Ejecutar un juego de adivinanzas al menos una vez y preguntar al jugador si quiere jugar de nuevo.
//-Validar la entrada del usuario en un formulario hasta que todos los campos requeridos estén llenos.
//-Solicitar al usuario que ingrese un número positivo al menos una vez y continuar haciéndolo hasta que proporcione un //valor válido.
//-Realizar una acción al menos una vez y luego preguntar al usuario si desea repetirla.

//SINTAXIS
//do {
////  sentencia;
//} while (condición);

//En el siguiente ejemplo, el bucle hacer mientras itera al menos una vez y se reitera hasta que i ya no sea menor que 5.
let iteracion = 0;
do {
  iteracion += 1;
  console.log(iteracion); //devuelve: 12345
} while (iteracion < 5);
