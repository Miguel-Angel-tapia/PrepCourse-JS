// ACCEDER Para acceder a la propiedad de un objeto simplemente tenemos que escribir el nombre del objeto seguido de un punto y el nombre de la propiedad.
var persona = { nombre: "Lucas", edad: 26, estudios: { esProgramador: true } };
console.log(persona.edad);

// ASIGNAR Para cambiar el valor de una propiedad simplemente tenemos que acceder a ella e igualarla al nuevo valor.
var persona = { nombre: "Lucas", edad: 26, estudios: { esProgramador: true } };
persona.nombre = "Martín";
console.log(persona.nombre);

//CREAR
var autos = {};
autos.marcas = ["Ford", "Audi", "Ferrari"];
console.log(autos);

//BORRAR Para eliminar propiedades utilizaremos una palabra reservada llamada delete
delete autos.marcas;
console.log(autos);

//PODEMOS GUARDAR FUNCIONES!
let misFunciones = {
  saludar: function () {
    console.log("hola");
  },
};
misFunciones.saludar(); //asi llamamos a la funcion

//maneras para trabajar con objetos:

//dot-Notation (notacion por punto . ) por el momento veremos esta
// bracket-Notation (notacion por corchetes [] )
