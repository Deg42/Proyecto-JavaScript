class Socio {
    static numSocios = []

    constructor() {
        this.num = ""
        this.dni = ""
        this.nombre = ""
        this.apellidos = ""
        this.fechaNacimiento = ""
        this.localidad = ""
    }

    altaSocio(num, dni, nombre, apellidos, fechaNacimiento, localidad) {
        this.num = num
        this.dni = dni
        this.nombre = nombre
        this.apellidos = apellidos
        this.fechaNacimiento = fechaNacimiento
        this.localidad = localidad
        Socio.numSocios.push(this)
    }

    bajaSocio() {
        Socio.numSocios.splice(this, 1);
    }

    modificarLocalidad(localidad) {
        this.localidad = localidad
    }

    static mostrarSocios() {
        return numSocios
    }

    // static buscarSocioDni(dni) {}
    // static buscarSocioCategoria() {}

    static mostrarSociosLocalidad(localidad) {
        let socios = numSocios.filter(socio => socio.localidad = localidad)
        if (socios) {
            return alert(socios)
        } else {
            return alert("No hay")
        }
    }
}