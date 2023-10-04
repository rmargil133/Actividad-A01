function saludar() {
    let nombre = document.getElementById("nombreInput").value;
    let horaInput = document.getElementById("horaInput").value;
    let hora = parseInt(horaInput.split(":")[0]);

    let saludo;

    if (hora >= 6 && hora < 12) {
        saludo = "¡Buenos días, " + nombre + "!";
    } else if (hora >= 12 && hora < 20) {
        saludo = "¡Buenas tardes, " + nombre + "!";
    } else {
        saludo = "¡Buenas noches, " + nombre + "!";
    }

    alert(saludo);
}