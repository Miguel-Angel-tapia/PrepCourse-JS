//operador and &&: devuelve true, solo si los dos operandos son true, de lo contrario. devuelve false
function mayorYMenorYPar(num) {
  if (num > 5 && num < 10 && num % 2 === 0) console.log(true);
  else console.log(false);
}
mayorYMenorYPar(7);
mayorYMenorYPar(8);

//operador or || : devuelve true, si uno o ambos operandos es true, de lo contrario.  devuelve false
function operadorOr(str) {
  if (str === "Henry" || str.length < 2) console.log(true);
  else console.log(false);
}
operadorOr("Henry");
operadorOr("Java");
operadorOr("H");

//operador not ! : se podria decir que not! nos devuelve el valor contrario de el que tiene por delante, es decir. !true nos devuelve false, y !false nos devuelve true
function negacion(permiso) {
  if (!permiso === true) console.log("Tiene permiso");
}
negacion(false);

// si usamos distintos operadores logicos simultaneamente, debemos tener en cuenta la precedencia de estos!

//Las expresiones se evalúan en orden, y la computadora omitirá cualquier expresión redundante. En una declaración &&, si la primera expresión es false, la segunda expresión no se evaluará porque AMBAS expresiones deben ser true.

//Lo mismo para la declaración ||. Si la primera expresión es verdadero, la segunda no se evaluará porque solo debe haber una declaración verdadera para cumplir con los requisitos del operador.

//Utiliza paréntesis. Como vimos en el segundo ejemplo de la negación !, utilizamos paréntesis para evaluar PRIMERO lo que estaba dentro de ellos, y luego aplicamos la negación. Podemos ajustar cualquier expresión entre paréntesis y se evaluará antes que toda la expresión en conjunto.
