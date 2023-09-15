var num = 2;
function esEntero(num) {
  if (num >= 0.1 && num <= 0.9) {
    console.log(false);
  } else {
    console.log(true);
  }
}

String.prototype.reverse = function () {
  let invertir = this.split(""); // Divide la cadena en un array de caracteres
  let invertir2 = invertir.reverse(); // Invierte el orden de los elementos en el array
  let invertir3 = invertir2.join(""); // Convierte el array nuevamente en una cadena de caracteres
  return invertir3; // Devuelve la cadena invertida
};
