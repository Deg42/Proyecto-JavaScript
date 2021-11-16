/* Crea un programa que genere dos tablas html con los horarios de la asociación.
Habrá una tabla de horario de mañana que muestre las horas de dos en dos con el formato 9:00-
11:00, desde las 9 hasta las 15:00 y los días del lunes al viernes.
Habrá otra tabla de horario de tarde que muestre las horas de una en una con el formato 16:00-
17:00, desde las 16 hasta las 21:00 y los días del lunes al domingo.
Tanto las horas como los días (es decir, la primera columna y la primera fila) tendrán etiqueta th. El
resto tendrán etiqueta td. */

// Función principal
function mainHorario() {
    limpiar();
    printHorario();
}

// Imprimir las tablas de los horarios en el elemento "result"
function printHorario() {
    document.getElementById("result").innerHTML += (
        "<h3>Horario de Mañana</h3>" +
        "<table class=\"horario\">" +
        "<tr>" +
        "<td></td>" +
        "<th>Lunes</th>" +
        "<th>Martes</th>" +
        "<th>Miércoles</th>" +
        "<th>Jueves</th>" +
        "<th>Viernes</th>" +
        "</tr>" +
        "<tr>" +
        "<th>9:00 - 11:00</th>" +
        "<td>Futbol</td>" +
        "<td>Baloncesto</td>" +
        "<td>Patinaje</td>" +
        "<td>Golf</td>" +
        "<td>Balonmano</td>" +
        "</tr>" +
        "<tr>" +
        "<th>11:00 - 13:00</th>" +
        "<td>Balonmano</td>" +
        "<td>Futbol</td>" +
        "<td>Baloncesto</td>" +
        "<td>Patinaje</td>" +
        "<td>Golf</td>" +
        "</tr>" +
        "<tr>" +
        "<th>13:00 - 15:00</th>" +
        "<td>Golf</td>" +
        "<td>Balonmano</td>" +
        "<td>Futbol</td>" +
        "<td>Baloncesto</td>" +
        "<td>Patinaje</td>" +
        "</tr>" +
        "</table><br/>" +
        "<h3>Horario de Tarde</h3>" +
        "<table class = \"horario\" >" +
        "<tr>" +
        "<td></td>" +
        "<th>Lunes</th>" +
        "<th>Martes</th>" +
        "<th>Miércoles</th>" +
        "<th>Jueves</th>" +
        "<th>Viernes</th>" +
        "<th>Sábado</th>" +
        "<th>Domingo</th>" +
        "</tr>" +
        "<tr>" +
        "<th>16:00 - 17:00</th>" +
        "<td>Tenis</td>" +
        "<td>Voleyball</td>" +
        "<td>Atletismo</td>" +
        "<td>Ciclismo</td>" +
        "<td>Badminton</td>" +
        "<td>Padel</td>" +
        "<td>Futbol Sala</td>" +
        "</tr>" +
        "<tr>" +
        "<th>17:00 - 18:00</th>" +
        "<td>Voleyball</td>" +
        "<td>Atletismo</td>" +
        "<td>Ciclismo</td>" +
        "<td>Badminton</td>" +
        "<td>Padel</td>" +
        "<td>Futbol Sala</td>" +
        "<td>Tenis</td>" +
        "</tr>" +
        "<tr>" +
        "<th>18:00 - 19:00</th>" +
        "<td>Atletismo</td>" +
        "<td>Ciclismo</td>" +
        "<td>Badminton</td>" +
        "<td>Padel</td>" +
        "<td>Futbol Sala</td>" +
        "<td>Tenis</td>" +
        "<td>Voleyball</td>" +
        "</tr>" +
        "<tr>" +
        "<th>19:00 - 20:00</th>" +
        "<td>Ciclismo</td>" +
        "<td>Badminton</td>" +
        "<td>Padel</td>" +
        "<td>Futbol Sala</td>" +
        "<td>Tenis</td>" +
        "<td>Voleyball</td>" +
        "<td>Atletismo</td>" +
        "</tr>" +
        "<tr>" +
        "<th>20:00 - 21:00</th>" +
        "<td>Badminton</td>" +
        "<td>Padel</td>" +
        "<td>Futbol Sala</td>" +
        "<td>Tenis</td>" +
        "<td>Voleyball</td>" +
        "<td>Atletismo</td>" +
        "<td>Ciclismo</td>" +
        "</tr>" +
        "</table>"
    );



}