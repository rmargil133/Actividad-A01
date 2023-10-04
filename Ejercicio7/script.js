//Variable numero que se ejecuta en tiempo real para introducir un numero
numero = prompt("Introduce un número entero");

//Si el numero introducido divido entre dos es igual a cero el numero es par.
if(numero %2 === 0){
    document.write("El numero introducido es par")
}

//Si el numero introducido divido entre dos es distinto a cero el numeroes impar
if(numero %2 ==! 0){
    document.write("El numero introducido es impar")
}
