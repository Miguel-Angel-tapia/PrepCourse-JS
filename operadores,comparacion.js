//los operadores de comparacion, devuelven valores booleanos
//Operaciones de comparación

//Operador < (Menor que):
//Devuelve true si el valor a la izquierda es estrictamente menor que el valor a la derecha; de lo contrario, devuelve false.
console.log(4 < 7); // 4 es menor que 7? true
console.log(4 < 1); // 4 es menor que 1? false
console.log(4 < 4); //4 es menor que 4?false
console.log("abc" < "def"); // menor Comparación de cadenas basada en orden lexicográfico (códigos Unicode) true

//Operador > (Mayor que):
//Devuelve true si el valor a la izquierda es estrictamente mayor que el valor a la derecha; de lo contrario, devuelve false.

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

//Operador === (Igual que):
//Devuelve true si los valores son iguales en tipo y valor; de lo contrario, devuelve false. Es una comparación estricta.
console.log(4 === "4"); // 4 es igual a "4"? false
console.log(4 === 4); // 4 es igual a 4? true

//Operador !== (No igual que):
//Devuelve true si los valores no son iguales en tipo o valor; de lo contrario, devuelve false. Es una comparación estricta.
console.log(4 !== "4"); // 4 no es igual a "4"? true
console.log(4 !== 4); // 4 no es igual a 4? false

//Estos operadores son fundamentales en la lógica de control de flujo y toma de decisiones en JavaScript. Puedes utilizarlos en estructuras como if, else, switch, entre otros, para realizar acciones condicionales basadas en comparaciones.

//Igualdad vs igualdad estricta

//igualdad estricta (===) verifica que el valor y el tipo de dato sean iguales
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
