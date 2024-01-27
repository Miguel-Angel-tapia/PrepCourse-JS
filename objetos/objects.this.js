//THIS
//this en JavaScript es una palabra clave especial que se refiere al objeto en el cual se está ejecutando el código actual. El valor de this depende de cómo se invoca una función y puede tener diferentes valores en diferentes contextos.

var mascota = {
  animal: "Perro",
  raza: "Ovejero Alemán",
  amistoso: true,
  dueño: "María López",
  info: function () {
    console.log("Mi perro es un  " + this.raza);
  },
};
mascota.info(); //devuelve : Mi perro es un  Ovejero Alemán

// algunas situaciones comunes en las que this puede ser utilizado:
