//los operadores de comparacion, devuelven valores booleanos
//Operaciones de comparación

//Operador < (Menor que):
//Devuelve true si el valor a la izquierda es estrictamente menor que el valor a la derecha; de lo contrario, devuelve false.
console.log(4 < 7); // 4 es menor que 7? true
console.log(4 < 1); // 4 es menor que 1? false
console.log(4 < 4); //4 es menor que 4?false
console.log("aab" < "aac"); //true: menor Comparación de cadenas basada en orden lexicográfico (códigos Unicode)

//Operador > (Mayor que):
//Devuelve true si el valor a la izquierda es estrictamente mayor que el valor a la derecha; de lo contrario, devuelve false.
console.log(4 > 7); // 4 es mayor que 7? false
console.log(4 > 1); // 4 es mayor que 1? true

//Operador <= (Menor o igual que):
//Devuelve true si el valor a la izquierda es menor o igual que el valor a la derecha; de lo contrario, devuelve false.
console.log(4 <= 7); // 4 es menor o igual que 7? true
console.log(4 <= 1); // 4 es menor o igual que 1? false
console.log(4 <= 4); //4 es menor o igual que 4? true

//Operador >= (Mayor o igual que):
//Devuelve true si el valor a la izquierda es mayor o igual que el valor a la derecha; de lo contrario, devuelve false.
console.log(4 >= 7); // 4 es mayor o igual que 7? false
console.log(4 >= 1); // 4 es mayor o igual que 1? true
console.log(4 >= 4); //4 es mayor o igual que 4? true

//Operador !== (No igual que):
//Devuelve true si los valores no son iguales en tipo o valor; de lo contrario, devuelve false. Es una comparación estricta.
console.log(4 !== "4"); // 4 no es igual a "4"? true
console.log(4 !== 4); // 4 no es igual a 4? false

//Estos operadores son fundamentales en la lógica de control de flujo y toma de decisiones en JavaScript. Puedes utilizarlos en estructuras como if, else, switch, entre otros, para realizar acciones condicionales basadas en comparaciones.

//Igualdad vs igualdad estricta

//igualdad estricta (===) Devuelve true si los valores son iguales en tipo y valor; de lo contrario, devuelve false. Es una comparación estricta.
//igualdad (==) verifica que solo el valor sea igual

console.log(3 == 3); // true ya que 3 es igual a 3
console.log(3 === 3); // true ya que 3 es estrictamente igual a 3
console.log(3 == "3"); // true ya que son tipos de datos dif.pero tienen el mismo valor
console.log(3 === "3"); // false ya que son el mismo valor, pero de diferentes datos
console.log(7 == "7"); // true ya que son tipos de datos dif.pero tienen el mismo valor
console.log(7 === "7"); // false ya que son el mismo valor, pero de diferentes datos

//Asignación y asociatividad
// los operadores de comparacion tambien tiene precedencia y si son de el mismo valor de precendencia, tenemos que tener en cuenta la asociatividad de cada uno, al igual que los operadores aritmeticos
var a = 1;
var b = 2;
var c = (a = b);
console.log(c);

// en este ejemplo la asociatividad de igualdad, tiene asosiatividad  a la derecha, osea. empezar a operar de derecha a izquierda.
// en el ejemplo, sobre escribimos el valor de a, por el de b, y le asignamos a c el valor de b

//El operador += se utiliza en programación para realizar una operación de adición y asignación en una variable. Significa "sumar y asignar". Básicamente, se utiliza para actualizar el valor de una variable añadiéndole otro valor y luego asignando el resultado nuevamente a la misma variable. Esto es especialmente útil cuando quieres acumular valores en una variable a lo largo de un programa.

let x = 5;
x += 3; // Esto es equivalente a: x = x + 3;
console.log(x); // El valor de x ahora es 8

let mensaje = "Hola, ";
mensaje += "¿cómo estás?"; // Esto es equivalente a: mensaje = mensaje + "¿cómo estás?";
console.log(mensaje); // El valor de mensaje ahora es "Hola, ¿cómo estás?"

//    Operador de Resta con Asignación (-=):
let y = 10;
y -= 4; // Esto es equivalente a: y = y - 4;
console.log(y); // El valor de y ahora es 6

//    operador de Multiplicación con Asignación (*=):
let z = 3;
z *= 5; // Esto es equivalente a: z = z * 5;
console.log(z); // El valor de z ahora es 15

//    Operador de División con Asignación (/=):
let az = 20;
az /= 4; // Esto es equivalente a: a = a / 4;
console.log(az); // El valor de a ahora es 5

//    Operador de Módulo con Asignación (%=):
let bz = 19;
bz %= 5; // Esto es equivalente a: b = b % 5;
console.log(bz); // El valor de b ahora es 4
