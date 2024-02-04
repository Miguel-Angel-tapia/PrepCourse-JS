//Los condicionales en JavaScript son estructuras de control que permiten tomar decisiones en el flujo de ejecución del programa. Estas decisiones se basan en evaluaciones de expresiones booleanas, que son expresiones que pueden ser verdaderas (true) o falsas (false). Los condicionales más comunes son if, else if, y else.

function viajar(destino) {
  if (destino === "Brasil") {
    console.log("Gire a la izquierda");
  } else if (destino === "Argentina") {
    console.log("Gire a la derecha");
  } else {
    console.log("Nos perdimos");
    ("");
  }
}
viajar("Brasil"); //devuelve gire a la izquierda
viajar("Argentina"); //devuelve gire a la derecha
viajar("uruguay"); //devuelve nos perdimos

function puedeManejar(edadd) {
  if (edadd >= 18) {
    console.log(`puedes manejar`);
  } else {
    console.log(`no pudes manejar`);
  }
}
puedeManejar(18); // devuelve `puedes manejar`
puedeManejar(17); // devuelve `no puedes manejar`

// condicional IF : nos permite introducir una situacion que debe ser verdadera para que una accion se ejecute, es decir. El bloque de código dentro del if se ejecutará solo si la expresión entre paréntesis es verdadera.
let edaad = 18;

if (edaad >= 18) {
  console.log("Eres mayor de edad.");
}

// condicional ELSE IF : es una condicion que podemos agregar ademas de if, que solo se ejecutada si if, no es verdadera, se puede agregar mas de un else if
let hora = 14;

if (hora < 12) {
  console.log("Buenos días.");
} else if (hora < 18) {
  console.log("Buenas tardes.");
} else {
  console.log("Buenas noches.");
}

// condicional ELSE : es una condicion que solo actua, si if y else if, no son verdaderas y no se ejecutan
let esFinDeSemana = false;

if (esFinDeSemana) {
  console.log("¡Es hora de descansar!");
} else {
  console.log("A trabajar...");
}

//Operador Ternario (?):
//El operador ternario proporciona una forma más concisa de escribir condicionales.
//sintaxis: condicion ? expresion_si_verdadero : expresion_si_falso;
//condicion: Una expresión que se evalúa como verdadera o falsa.
//expresion_si_verdadero: El valor que se devuelve si la condición es verdadera.
//expresion_si_falso: El valor que se devuelve si la condición es falsa.
let eedad = 20;
//...........(.condicion..)..(cumple condicion)....(no cumple condicion)
//..........(Si edad es+18)  (entonces devuelve)    (si no, devuelve )
let mensaje = eedad >= 18 ? "Eres mayor de edad" : "Eres menor de edad";
console.log(mensaje);

const tituloValido = Title;
const descripcionValida = Description;
const ImgurlValida = Imgurl;
