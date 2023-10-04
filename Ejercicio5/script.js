var valores = [true, 5, false, "hola", "adios", 2];

// Encontrar los elementos de texto
var texto1, texto2;

//Con el blucle for recorremos el array en busca de los dos elementos de texto y luego se compara sus longitudes para determinar cuál es mayor.
for (var i = 0; i < valores.length; i++) {
  if (typeof valores[i] === "string") {
    if (!texto1) {
      texto1 = valores[i];
    } else if (!texto2) {
      texto2 = valores[i];
      break; // Encontramos dos elementos de texto, no necesitamos buscar más.
    }
  }
}

// Comparar las longitudes de los elementos de texto
if (texto1 && texto2) {
  if (texto1.length > texto2.length) {
    console.log("'" + texto1 + "' es mayor que '" + texto2 + "'.");
  } else if (texto1.length < texto2.length) {
    console.log("'" + texto2 + "' es mayor que '" + texto1 + "'.");
  } 
}

//Utilizando exclusivamente los dos valores ​booleanos ​del array, 
//determinar los operadores necesarios para obtener un resultado true y otro resultado false.

console.log("true != false ->", true != false);
console.log("true == false ->", true == false);

//Determinar el resultado de las ​cinco operaciones matemáticas realizadas con los ​dos elementos numéricos​.
console.log("5 + 2 =", 5 + 2)
console.log("5 - 2 =", 5 - 2)
console.log("5 * 2 =", 5 * 2)
console.log("5 / 2 =", 5 / 2)
console.log("5 % 2 =", 5 % 2)