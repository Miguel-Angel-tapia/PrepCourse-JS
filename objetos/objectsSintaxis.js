//las diferentes formas de sintaxis que existen para trabajar con objetos, Dot-Notation y Bracket-Notation.

//De la misma manera que utilizamos la Dot-Notation o notación por puntos para acceder o asignar un valor, también podemos usar Bracket-Notation, o notación por corchetes. Lo único que cambia es la forma en la que lo escribimos.

// DOT NOTATION
var atuendos = { manos: ["Guantes", "Anillos"], pies: ["Zapatos", "Soquetes"] };
console.log(atuendos.manos);

// BRACKET NOTATION
atuendos["piernas"] = ["Bermudas", "Pantalones"];
console.log(atuendos);

//Muchas veces nos puede suceder que necesitemos utilizar una variable externa para guardarla como propiedad en un objeto. Es importante que en esos casos recordemos utilizar Bracket-Notation sin comillas para que funcione correctamente.como en el siguiente caso

let comidas = {};
let diferenciaDeNotaciones = function (propiedadUno, propiedadDos) {
  // comidas.['propiedadUno'] = ["frutas", " Vegetales"];esto estaria mal
  comidas[propiedadUno] = ["frutas", " Vegetales"];
  comidas[propiedadDos] = ["Hamburguesa", "Papas Fritas"];
};
diferenciaDeNotaciones("saludable", "noSaludable");
console.log(comidas);
