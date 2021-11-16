/* Crea un programa que solicite al usuario sus centímetros y el peso en kg y devuelva el Índice de
Masa Corporal escrito en la pantalla (en el cuerpo de la página).
Además de mostrar el resultado,mostrará la siguiente escala y marcará de alguna forma (negrita,
cursiva, subrayado, color…) la clasificación:
    • <16.00: Infrapeso (delgadez severa)
    • 16.00 – 16.99: Infrapeso (delgadez moderada)
    • 17.00 - 18.49: Infrapeso (delgadez aceptable)
    • 18.50 - 24.99: Peso normal
    • 25.00 - 29.99: Sobrepeso
    • 30.00 - 34.99: Obeso (Tipo I)
    • 35.00 - 40.00: Obeso (Tipo II)
    • >40.00: Obeso (Tipo III)
Además, comprobará que no se meta ningún valor incorrecto de peso ni altura, y en caso de que así
sea, volverá a solicitar los datos. */

/* Variables

    altura: Altura del usuario
    peso: Peso del usuario
    imc: Índice de masa corporal del usuario
    clasificación: Clasificación del usuario conforme a su IMC
*/


// Función principal
function mainImc() {
    var altura, peso, imc, clasificacion;

    // Pedir el dato mientras no sea válido. Si está vacio, se cancela
    do {
        altura = pedirDato("altura en centímetros (cm): ");
        if (!altura) { exit(); };
    } while (!validarNum(altura));

    do {
        peso = pedirDato("peso en kilogramos (kg): ");
        if (!peso) { exit(); };
    } while (!validarNum(peso));

    imc = calcularImc(altura, peso);

    limpiar();

    printImc(altura, peso, imc);

    seleccionarClasificacion(imc, clasificacion);
}

/* Pedir datos al usuario

    param mensaje: Mensaje que se añade a la petición de datos

    return: El valor introducido por el usuario
*/
function pedirDato(mensaje) {
    return window.prompt("Introduce tu " + mensaje);
}

/* Validar dato numérico introducido,
    si no es un número o es negativo 
    muestra un mensaje de alerta

    param dato: El valor a validar

    return: verdadero si el dato es válido, falso si no
*/
function validarNum(dato) {
    if (isNaN(dato)) {
        alert("Tienes que introducir un número!");
        return false;
    } else if (dato <= 0) {
        alert("No puede ser negativo!");
        return false;
    } else {
        return true;
    }

}

/* Calcular el IMC del usuario

    param altura: Altura del usuario
    param peso: Peso del usuario

    return: El índice de masa corporal del usuario
*/
function calcularImc(altura, peso) {
    return peso / ((altura / 100) ** 2);
}

// Limpiar el elemento html con id "result"
function limpiar() {
    document.getElementById("result").innerHTML = "";
}

/* Imprimir la tabla y los datos del usuario en el elemento "result"

    param altura: Altura del usuario
    param peso: Peso del usuario
    param imc: Índice de masa corporal del usuario
*/
function printImc(altura, peso, imc) {
    document.getElementById("result").innerHTML += ('<p>Altura: ' + altura + ' cm' +
        '<br/>Peso: ' + peso + ' kg' +
        '<br/>Tu índice de masa corporal es ' + imc.toFixed(2) + '</p>' +
        'Su clasificación es:' +
        '<table>' +
        '<tr id="infraSev"><td> &lt; 16.00</td><td>Infrapeso (delgadez severa)</tr></td>' +
        '<tr id="infraMod"><td>16.00 - 16.99</td><td>Infrapeso (delgadez moderada)</tr></td>' +
        '<tr id="infraAce"><td>17.00 - 18.49</td><td>Infrapeso (delgadez aceptable)</tr></td>' +
        '<tr id="normal"><td>18.50 - 24.99</td><td>Peso normal</tr></td>' +
        '<tr id="sobre"><td>25.00 - 29.99</td><td>Sobrepeso</tr></td>' +
        '<tr id="obeI"><td>30.00 - 34.99</td><td>Obeso (Tipo I)</tr></td>' +
        '<tr id="obeII"><td>35.00 - 40.00</td><td>Obeso (Tipo II)</tr></td>' +
        '<tr id="obeIII"><td>&gt; 40.00</td><td>Obeso (Tipo III)</tr></td>' +
        '</table>'
    );
}

/* Seleccionar la clasificación 
    dependiendo del IMC usuario
    añadiendo estilo 

    param imc: Índice de masa corporal del usuario
*/
function seleccionarClasificacion(imc, clasificacion) {
    var id, bgcolor, fcolor;
    switch (true) {
        case (imc < 16):
            id = "infraSev";
            bgcolor = "red";
            fcolor = "white";
            break;
        case (imc >= 16.00 && imc <= 16.99):
            id = "infraMod";
            bgcolor = "yellow";
            break;
        case (imc >= 17.00 && imc <= 18.49):
            id = "infraAce";
            bgcolor = "green";
            fcolor = "white";
            break;
        case (imc >= 18.50 && imc <= 24.99):
            id = "normal";
            bgcolor = "green";
            fcolor = "white";
            break;
        case (imc >= 25.00 && imc <= 29.99):
            id = "sobre";
            bgcolor = "yellow";
            break;
        case (imc >= 30.00 && imc <= 34.99):
            id = "obeI";
            bgcolor = "red";
            fcolor = "white";
            break;
        case (imc >= 35.00 && imc <= 40.00):
            id = "obeII";
            bgcolor = "red";
            fcolor = "white";
            break;
        case (imc > 40):
            id = "obeIII";
            bgcolor = "red";
            fcolor = "white";
            break;
        default:
            break;
    }

    //Con el id del elemento añade estilo a la fila
    clasificacion = document.getElementById(id);
    clasificacion.style.backgroundColor = bgcolor;
    clasificacion.style.color = fcolor;
}