function esPalindromo(cadena) {
    // Eliminamos los espacios y convertimos a minúsculas
    cadena = cadena.toLowerCase().replace(/\s/g, '');

    // Invertimos la cadena
    var cadenaInvertida = cadena.split('').reverse().join('');

    // Comparamos la cadena original con la cadena invertida
    return cadena === cadenaInvertida;
}

let texto = "La ruta nos aporto otro paso natural";

if (esPalindromo(texto)) {
    alert("La cadena es un palíndromo.");
} else {
    alert("La cadena no es un palíndromo.");
}
