//Las funciones callback son un tipo de funciones que se pasan por parámetro a otras funciones.

let devuelvoUsuario = function () {
  return "Camilo";
};
let devuelvoSaludo = function () {
  return "Hola";
};
let saludar = function (cb1, cb2) {
  return cb1() + ` ` + cb2();
};
let resultado = saludar(devuelvoSaludo, devuelvoUsuario);
console.log(resultado); //DEVUELVE: Hola Camilo

//otro ejemplo

let devuelvoFrase = function (comida) {
  return "hoy quiero comer " + comida;
};
let hablar = function (comida, cb) {
  return cb(comida);
};
let fraseFinal = hablar("pizza", devuelvoFrase);
console.log(fraseFinal); // `hoy quiero comer pizza`
//Los callbacks son muy útiles en el mundo de la programación, nos aseguran que una función no se va a ejecutar antes de que se complete una tarea, sino que se ejecutará justo después de que la tarea se haya completado.
