/* Crea un programa que solicite al usuario su año de nacimiento y devuelve la categoría a la que
pertenece.
Para ello, además de mostrar su resultado, mostrará un listado con las categorías que existen (desde
Micros hasta Senior) marcando la del usuario de alguna manera especial (negrita, subrayado,
color…). */

/* Variables

    anyo: Año del usuario
    categoría: Categoría del usuario
*/
var anyo, categoria;

// Función principal
function mainCategoria() {

    // Pedir el dato mientras no sea válido. Si está vacio, se cancela
    do {
        anyo = pedirDato("año: ");
        if (!anyo) { exit(); };
    } while (!validarNum(anyo));

    limpiar();

    edad = calcularEdad(anyo);

    printCategoria(edad);

    seleccionarCategoria(edad);
}

// Imprimir la tabla de categorías
function printCategoria() {
    document.getElementById("result").innerHTML += ('<p>Año de nacimiento: ' + anyo +
        '<br/>Tu edad es: ' + edad + '</p>' +
        '<table><thead>' +
        '<th>Categoría</th>' +
        '<th>Año de nacimiento</th>' +
        '</thead><tbody>' +
        '<tr id="sen"><td>Senior</td><td>20 años o más</td></tr>' +
        '<tr id="jun"><td>Junior</td><td>18-19 años</td></tr>' +
        '<tr id="jub"><td>Juvenil</td><td>16-17 años</td></tr>' +
        '<tr id="cad"><td>Cadete</td><td>14-15 años</td></tr>' +
        '<tr id="inf"><td>Infantil</td><td>12-13 años</td></tr>' +
        '<tr id="alv"><td>Alevín</td><td>10-11 años</td></tr>' +
        '<tr id="ben"><td>Benjamin</td><td>8-9 años</td></tr>' +
        '<tr id="pre"><td>Pre-benjamín</td><td>6-7 años</td></tr>' +
        '<tr id="mic"><td>Micro</td><td>3-5 años</td></tr>' +
        '</tbody></table>'
    );
}

/* Calcular la edad del usuario,
    si no llega a al año devuelve 1 año

    param anyo: Año del usuario

    return edad: Edad calculada a partir del año
*/
function calcularEdad(anyo) {
    var edad = new Date().getFullYear() - anyo;
    if (edad == 0) {
        return 1;
    } else {
        return edad;
    }
}

/* Seleccionar la categoría 
    dependiendo de la edad del usuario
    añadiendo estilo

    param edad: Edad del usuario
    
    var id: El id de la fila de la tabla para estilizar
*/
function seleccionarCategoria(edad) {
    var id;
    switch (true) {
        case (edad >= 20):
            id = "sen";
            break;
        case (edad >= 18 && edad <= 19):
            id = "jun";
            break;
        case (edad >= 16 && edad <= 17):
            id = "jub";
            break;
        case (edad >= 14 && edad <= 15):
            id = "cad";
            break;
        case (edad >= 12 && edad <= 13):
            id = "inf";
            break;
        case (edad >= 10 && edad <= 11):
            id = "alv";
            break;
        case (edad >= 8 && edad <= 9):
            id = "ben";
            break;
        case (edad >= 6 && edad <= 7):
            id = "pre";
            break;
        case (edad >= 3 && edad <= 5):
            id = "mic";
            break;
        default:
            // Si no existe categoría para esa edad muestra el mensaje
            document.getElementById("result").innerHTML +=
                ('<  style="color:white; background-color:#3498DB">&#9432; No existe categoría para esa edad &#9432;<p>')
            break;
    }

    //Con el id del elemento añade estilo a la fila
    clasificacion = document.getElementById(id);
    clasificacion.style.backgroundColor = "green";
    clasificacion.style.color = "white";
}