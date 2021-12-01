const socios = []

function Socio(num, dni, nombre, apellidos, fechaNacimiento, localidad) {
    this.num = num
    this.dni = dni
    this.nombre = nombre
    this.apellidos = apellidos
    this.fechaNacimiento = fechaNacimiento
    this.localidad = localidad
}

function altaSocio(dni, nombre, apellidos, fechaNacimiento, localidad) {
    let socio = new Socio(socios.length + 1, dni, nombre, apellidos, fechaNacimiento, localidad)
    socios.push(socio)
}

function bajaSocioNum(, num) {
    array.splice(socios.indexOf(socios.find(socio => socio.num == num)), 1);
}

function bajaSocioDni(dni) {
    array.splice(socios.indexOf(socios.find(socio => socio.dni == dni)), 1);
}

function modificarLocalidad(dni, nuevalocalidad) {
    let modificar = socios.find(socio => socio.dni == dni)
    modificar.localidad = nuevalocalidad
}

function mostrarSocios() {

}

// buscarSocioDni(dni) {}
// buscarSocioCategoria() {}

function mostrarSociosLocalidad(localidad) {
    let socios = numSocios.filter(socio => socio.localidad == localidad)
    if (socios) {
        return alert(socios)
    } else {
        return alert("No hay")
    }
}