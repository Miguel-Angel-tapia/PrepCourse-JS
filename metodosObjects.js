// HAS OWN PROPERTY
const libro = { autor: "Borges", genero: "Policial", año: 1990 };
var tienePropiedad = libro.hasOwnProperty("autor"); //true
//var tienePropiedad = libro.hasOwnProperty("nombre"); false
console.log(tienePropiedad);

// KEYS
//libro = { autor: "Borges", genero: "Policial", año: 1990 };
var todasLasPropiedades = Object.keys(libro);

console.log(todasLasPropiedades); //[ 'autor', 'genero', 'año' ]

var mundo = { continentes: 7, paises: 195, oceanos: 5 };
for (let propiedad in mundo) {
  console.log("Esta es la propiedad: ", propiedad);
  console.log("Este es el valor: ", mundo[propiedad]);
}

//Esta es la propiedad:  continentes        asi nos devuelve en consola
//Este es el valor:  7
//Esta es la propiedad:  paises
//Este es el valor:  195
//Esta es la propiedad:  oceanos
//Este es el valor:  5

//THIS
var mascota = {
  animal: "Perro",
  raza: "Ovejero Alemán",
  amistoso: true,
  dueño: "María López",
  info: function () {
    console.log("Mi perro es un  " + this.raza);
  },
};
mascota.info();
