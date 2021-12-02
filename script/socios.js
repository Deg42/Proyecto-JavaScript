const socios = []

window.onload = function test() {
    let socio1 = new Socio(1, "00000000A", "Juan Antonio", "González", "1997-10-09", "Écija")
    let socio2 = new Socio(2, "00000000B", "Juan Antonio1", "González1", "1997-10-09", "Sevilla")
    let socio3 = new Socio(3, "00000000C", "Juan Antonio2", "González2", "1997-10-09", "Écija")
    let socio4 = new Socio(4, "00000000D", "Juan Antonio3", "González3", "1997-10-09", "Sevilla")
    socios.push(socio1)
    socios.push(socio2)
    socios.push(socio3)
    socios.push(socio4)
}

function Socio(num, dni, nombre, apellidos, fechaNacimiento, localidad) {
    this.num = num
    this.dni = dni
    this.nombre = nombre
    this.apellidos = apellidos
    this.fechaNacimiento = fechaNacimiento
    this.localidad = localidad
}

Socio.prototype.toString = function() {
    return "Número: " + this.num + "<br/>" +
        "DNI: " + this.dni + "<br/>" +
        "Nombre: " + this.nombre + "<br/>" +
        "Apellidos: " + this.apellidos + "<br/>" +
        "Fecha Nacimeinto: " + this.fechaNacimiento + "<br/>" +
        "Localidad: " + this.localidad + "<br/>"
}

function altaSocio() {
    let dni = prompt("DNI: ")
    let nombre = prompt("Nombre: ")
    let apellidos = prompt("Apellidos: ")
    let fechaNacimiento = prompt("Fecha de Nacimiento: ")
    let localidad = prompt("Localidad: ")

    let socio = new Socio(socios.length + 1, dni, nombre, apellidos, fechaNacimiento, localidad)
    socios.push(socio)
}

function bajaSocio() {
    let opcion
    do {
        opcion = prompt("Selección una opción: \n" +
            "[0] Salir\n" +
            "[1] Por Número de Socio\n" +
            "[2] Por DNI\n"
        )
        if (!opcion) { exit(); };
        opcion = parseInt(opcion)
    } while (isNaN(opcion))

    switch (opcion) {
        case 0:
            break;
        case 1:
            let num = prompt("Inserta el numéro de socio")
            bajaSocioNum(num)
            break;
        case 2:
            let dni = prompt("Inserta el DNI (00000000A)")
            bajaSocioDni(dni)
            break;
        default:
            break;
    }
}

function bajaSocioNum(num) {
    socios.splice(socios.indexOf(socios.find(socio => socio.num == num)), 1);
}

function bajaSocioDni(dni) {
    socios.splice(socios.indexOf(socios.find(socio => socio.dni == dni)), 1);
}

function modificarLocalidad() {
    let dni = prompt("Inserta el DNI (00000000A)")
    let nuevalocalidad = prompt("Inserta la localidad")

    let modificar = socios.find(socio => socio.dni == dni)
    modificar.localidad = nuevalocalidad
}

function mostrarSocios() {
    document.getElementById("result").innerHTML = socios.join("<br/>")
}

// buscarSocioDni() {}
// buscarSocioCategoria() {}

function mostrarSociosLocalidad() {
    let localidad = prompt("Inserta la localidad: ")

    let sociosLocalidad = socios.filter(socio => socio.localidad == localidad)

    if (sociosLocalidad) {
        document.getElementById("result").innerHTML = sociosLocalidad.join("<br/>")
    } else {
        document.getElementById("result").innerHTML = sociosLocalidad.join("<br/>")
    }
}