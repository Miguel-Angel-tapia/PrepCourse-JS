//switch
//La declaración switch evalúa una expresión, comparando el valor de esa expresión con una instancia case, y ejecuta declaraciones asociadas a ese case, así como las declaraciones en los case que siguen.
//Por ejemplo:
//-al procesar diferentes opciones de un menú.
//-Implementar un menú de opciones para una aplicación de manejo de tareas.
//-Evaluar el día de la semana y mostrar un mensaje específico para cada día.
//-Procesar diferentes tipos de productos en un sistema de compras en línea y aplicar descuentos según el tipo.
//-Manejar diferentes códigos de error en una aplicación y mostrar mensajes específicos para cada código.
//-Evaluar el tipo de vehículo y calcular el peaje correspondiente en una autopista.
let diaDeLaSemana = "Martes";
let mensaje = "";

switch (diaDeLaSemana) {
  case "Lunes":
    mensaje = "Es el primer día laboral de la semana.";
    break;
  case "Martes":
    mensaje = "Ya es martes, ¡sigamos trabajando!";
    break;
  case "Miércoles":
    mensaje = "Mitad de semana, ¡vamos bien!";
    break;
  case "Jueves":
    mensaje = "Casi llegamos al fin de semana.";
    break;
  case "Viernes":
    mensaje = "¡Viernes al fin, preparados para el fin de semana!";
    break;
  default:
    mensaje = "Es fin de semana, relájate.";
}

console.log(mensaje);

// ejemplo:
let frutas = "Platanos";

switch (frutas) {
  case "Naranjas":
    console.log("El kilogramo de naranjas cuesta $0.59.");
    break;
  case "Manzanas":
    console.log("El kilogramo de manzanas cuesta $0.32.");
    break;
  case "Platanos":
    console.log("El kilogramo de platanos cuesta $0.48.");
    break;
  case "Cerezas":
    console.log("El kilogramo de cerezas cuesta $3.00.");
    break;
  case "Mangos":
  case "Papayas":
    console.log("El kilogramo de mangos y papayas cuesta $2.79.");
    break;
  default:
    console.log(
      "Lo lamentamos, por el momento no disponemos de " + frutas + "."
    );
}
console.log("¿Hay algo más que te quisiera consultar?");
