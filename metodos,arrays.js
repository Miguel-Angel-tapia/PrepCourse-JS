let colores = ["amarillo", "azul"];
//El método push() añade uno o más elementos al final de un arreglo, y devuelve la nueva longitud del array.
colores.push("rojo");
//El método unshift() agrega uno o más elementos al inicio de un arreglo, y devuelve la nueva longitud del array.
colores.unshift("verde");
//El método pop() elimina y devuelve el último elemento de un arreglo.
colores.pop();
//El método shift() elimina y devuelve el primer elemento de un arreglo.
colores.shift();
console.log(colores);

//El método includes() determina si un arreglo incluye o contiene un elemento específico. Devuelve true o false en cada caso.
let pintores = ["picaso", "dali", "van gogh", "velazques"];
let incluyeMiguel = pintores.includes("miguel");
let incluyeDali = pintores.includes("dali");
console.log(incluyeDali);
console.log(incluyeMiguel);

//El método every() determina si todos los elementos en un arreglo satisfacen una misma condición.
let numeros = [1, 4, 8, 5, 9];
let cumpleCondicion = numeros.every((num) => {
  return num > 0;
});
let noCumpleCondicion = numeros.every((num) => {
  return num > 5;
});
console.log(cumpleCondicion);
console.log(noCumpleCondicion);

//El método split() convierte un string en un array, donde cada elemento contendrá un sub-string, dependiendo del parámetro divisor que indiquemos.
let palabra = "henri";
let palabraSeparada = palabra.split("");
palabraSeparada.pop();
palabraSeparada.push("y");
console.log(palabraSeparada);

//El método join() convierte un arreglo en un string, uniendo todos los elementos de este en una misma cadena.
let palabra2 = "henri";
let palabraSeparada2 = palabra2.split("");
palabraSeparada2.pop();
palabraSeparada2.push("y");
let palabraArreglada2 = palabraSeparada2.join("");
console.log(palabraArreglada2);

//El método forEach() nos permite recorrer un arreglo, realizando alguna acción en para cada elemento.
let numero = [1, 2, 3, 4];
numero.forEach((num) => console.log(num));
numero.forEach((num) => {
  if (num === 3) {
    console.log(num);
  }
});

//El método map() también nos permite recorrer un arreglo y realizar una acción por cada elemento. La diferencia es que este método devuelve un nuevo arreglo los elementos modificados.
let masUno = numero.map((num) => {
  return num + 1;
});
console.log(masUno);

//mas elementos de array https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array
