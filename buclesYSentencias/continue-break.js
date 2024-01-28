//CONTINUE:Termina la ejecución de las sentencias de la iteración actual del bucle actual o la etiqueta y continua la ejecución del bucle con la próxima iteración.
//ejemplo:
let I = 0;
do {
  I += 1;
  if (I === 3) {
    // Aplica continue si i es igual a 3
    continue;
  }
  console.log(I); //devuelve: 1245
} while (I < 5);

//BREAK: Termina el bucle actual, sentecia switch o label y transfiere el control del programa a la sentecia de terminación de éstos elementos.
//EJEMPLO:
let it = 0;
do {
  it += 1;
  if (it === 10) {
    // Aplica break si i es igual a 10
    break;
  }
  console.log(it); //DEVUELVE: 1, 2, 3, 4, 5, 6, 7, 8, 9
} while (it < 20);

//Bucle infinito
//Esto no es un nuevo tipo de bucle, sino algo que se puede producir en los que ya aprendimos. Un bucle infinito se produce cuando un bucle comienza a ejecutarse, pero jamás termina. Esto se debe a que nunca se llega a la condición de quiebre. aplicar break
