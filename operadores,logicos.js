//operador and &&
function mayorYMenorYPar(num) {
  if (num > 5 && num < 10 && num % 2===0) console.log(true);
  else console.log(false);
};
mayorYMenorYPar(7);
mayorYMenorYPar(8);

//operador or ||
function operadorOr(str) {
  if (str === 'Henry' || str.length < 2) console.log(true);
  else console.log(false)
}
operadorOr('Henry');
operadorOr('Java');
operadorOr('H');

//operador not !
function negacion(permiso) {
   if (!permiso === true ) console.log('Tiene permiso');
}
negacion(false);


// si usamos distintos operadores logicos simultaneamente, debemos tener en cuenta la precedencia de estos!

