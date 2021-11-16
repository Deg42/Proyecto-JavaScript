/* Crea un programa que solicite al usuario su edad y su sexo y devuelva la frecuencia cardiaca
máxima por pantalla (en el cuerpo de la página).
Además, indicará los siguientes valores:
    • Zona de recuperación (60%-70%).
    • Zona aeróbica (70%-80%).
    • Zona anaeróbica (80%-90%).
    • Línea roja (90%-100%).
Además, comprobará que no se meta ningún valor incorrecto de edad y sexo, y en caso de que así
sea, volverá a solicitar los datos */

/* Variables

    edad: Edad del usuario
    sexo: Sexo del usuario
    fmc: Frecuendia cardiaca máxima del usuario
*/
var edad, sexo, fcm;

// Función principal
function mainFcm() {

    // Pedir el dato mientras no sea válido. Si está vacio, se cancela
    do {
        edad = pedirDato("edad: ");
        if (!edad) { exit(); };
    } while (!validarNum(edad));

    do {
        sexo = pedirDato("sexo (F o M): ");
        sexo = sexo.toUpperCase();
        if (!sexo) { exit(); };
    } while (!validarSex(sexo));

    fcm = calcularFcm(edad, sexo);

    limpiar();

    printFcm(edad, sexo, fcm);
}

/* Validar sexo introducido,
    lo convierte a mayúscula y
    si es distinto de 'F' o 'M'
    informa al usuario

    param sexo: El sexo a validar

    return: verdadero si el sexo es válido, falso si no
*/
function validarSex(sexo) {
    sexo = sexo.toUpperCase();
    if (sexo == 'M' || sexo == 'F') {
        return true;
    } else {
        alert("Sexo incorrecto!");
        return false;
    }
}

/* Calcular la frecuencia cardiaca del usuario
    dependediendo de su sexo y edad

    param edad: La edad del usuario
    param sexo: El sexo del usuario

    return: La FCM del usuario
*/
function calcularFcm(edad, sexo) {
    if (sexo == 'M') {
        return 208.7 - (0.73 * edad);
    } else if (sexo == 'F') {
        return 208.1 - (0.77 * edad);
    } else {
        console.log("Error al calcular FC. Sexo ???");
    }
}


/* Imprimir la tabla y los datos del usuario en el elemento "result"
    además de sus zonas de intensidad de entrenamiento

    param edad: Edad del usuario
    param sexo: Sexo del usuario
    param fmc: Frecuendia cardiaca máxima del usuario
*/
function printFcm(edad, sexo, fcm) {
    document.getElementById("result").innerHTML += ('<p>Edad: ' + edad +
        '<br/>Sexo: ' + sexo +
        '<br/>Tu frecuencia cardiaca máxima es de ' + Math.round(fcm) + ' ppm</p>' +
        '<table>' +
        '<tr style="background-color:lightgreen"><td>Zona de recuperación</td><td>' + Math.round(fcm * 0.6) + ' ppm - ' + Math.round(fcm * 0.7) + ' ppm</tr></td>' +
        '<tr style="background-color:lightskyblue"><td>Zona aeróbica</td><td>' + Math.round(fcm * 0.7) + ' ppm - ' + Math.round(fcm * 0.8) + ' ppm</tr></td>' +
        '<tr style="color: white; background-color:purple"><td>Zona anaeróbica</td><td>' + Math.round(fcm * 0.8) + ' ppm - ' + Math.round(fcm * 0.9) + ' ppm</tr></td>' +
        '<tr style="color: white; background-color:red"><td>Línea roja</td><td>' + Math.round(fcm * 0.9) + ' ppm - ' + Math.round(fcm) + ' ppm</tr></td>' +
        '</table>'
    );
}