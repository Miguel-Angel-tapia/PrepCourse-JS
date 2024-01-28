//       propiedades:

//math.pi: Representa la constante matemática π (pi), que es aproximadamente 3.14159.
console.log(Math.PI); // Imprime 3.141592653589793

//Math.E: Representa la constante matemática e, la base del logaritmo natural, que es aproximadamente 2.71828.
console.log(Math.E); // Imprime 2.718281828459045

//     Métodos:

//Math.abs(x): Devuelve el valor absoluto de x.
console.log(Math.abs(-5)); // Imprime 5
console.log(Math.abs(6.5, 5)); // Imprime 6.5

//Math.round & Math.floor & Math.ceil :A veces necesitamos redondear un número decimal, ya que muchas veces las operaciones matemáticas pueden resultar en números con coma. Para esto, JavaScript nos ofrece tres métodos

//Math.round(x): Redondea x al entero más cercano.
console.log(Math.round(3.7)); // Imprime 4

//Math.floor(x): Redondea x al entero más pequeño no menor que x.
console.log(Math.floor(3.7)); // Imprime 3

//Math.ceil(x): Redondea x al entero más grande no mayor que x.
console.log(Math.ceil(3.2)); // Imprime 4

//Math.pow(x, y): Eleva x a la potencia y.
console.log(Math.pow(2, 3)); // Imprime 8

//Math.random(): Genera un número pseudoaleatorio entre 0 (inclusive) y 1 (exclusive).
console.log(Math.random()); // Imprime un número aleatorio entre 0 y 1

//Math.max & Math.min : Estos dos métodos nos permitirán conocer el valor máximo o mínimo de un conjunto de números.
console.log(Math.min(2, 5, 1)); // Imprime 1
console.log(Math.max(2, 5, 1)); // Imprime 5

//Math.sqrt(x): Calcula la raíz cuadrada de x.
//Si el valor de x es negativo Math.sqrt() retorna NaN.
//Debido a que sqrt() es un método estático de Math, siempre úsalo como Math.sqrt(), en lugar de un método del objeto Math que hayas creado (Math no es un constructor).
console.log(Math.sqrt(25)); // Imprime 5

//Math.sin(x), Math.cos(x), Math.tan(x): Funciones trigonométricas.
console.log(Math.sin(Math.PI / 2)); // Imprime 1 (seno de 90 grados)

//Math.sinh(x), Math.cosh(x), Math.tanh(x): Funciones hiperbólicas.
console.log(Math.sinh(0)); // Imprime 0
console.log(Math.cosh(0)); // Imprime 1
console.log(Math.tanh(0)); // Imprime 0
