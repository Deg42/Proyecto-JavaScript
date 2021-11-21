//Fecha
let date = new Date();

document.getElementById("anyo").innerHTML = date.getFullYear()
document.getElementById("dia").innerHTML = date.getDate()
document.getElementById("mes").innerHTML = date.toLocaleDateString('es', { month: "long" }).toUpperCase()

//Ventanas
function dimensionarVentana(ancho, alto) {
    let left = (screen.width / 2) - (ancho / 2);
    let top = (screen.height / 2) - (alto / 2);
    return 'resizable = 0, status = 0, location = 0, toolbar = 0, menubar=0,' +
        'width = ' + ancho + ', ' +
        'height = ' + alto + ', ' +
        'top = ' + top + ', ' +
        'left = ' + left
}


// Abrir PopUp
function abrirPopUp() {
    setTimeout(function() { open('popUp.html', 'PopUp', dimensionarVentana(500, 200)) }, 10000);
}

// Abrir Ventana Contraseña
function abrirContrasenia() {
    open('contrasenia.html', 'Contraseña', dimensionarVentana(500, 400))
}

// Crear Contraseña
function crearContrasenia() {
    cadena = document.getElementById('cod').value
    if (validar(cadena)) document.getElementById("validado").innerHTML = '<h6 class="m-0 list-group-item list-group-item-success">La contraseña es segura</h6>'
}

// Validar Contraseña
function validar(cadena) {

    let regexpArray = {
        "regexpCaracteres": /^\S{8,16}$/,
        "regexpMayus": /^\S*[A-Z]+\S*$/,
        "regexpMinus": /^\S*[a-z]+\S*$/,
        "regexpNum": /^\S*[0-9]+\S*$/,
        "regexpEspecial": /^\S*[-_@#$%&]+\S*$/
    }

    let validador = 0
    let classError = "list-group-item-danger"
    let classSuccess = "list-group-item-success"

    document.getElementById("validado").innerHTML = ""

    Object.entries(regexpArray).forEach(([i, exp]) => {
        document.getElementById(i.toString()).classList.remove(classSuccess)
        document.getElementById(i.toString()).classList.remove(classError)
        if (exp.test(cadena)) {
            document.getElementById(i.toString()).classList.add(classSuccess)
            validador++
        } else {
            document.getElementById(i).classList.add(classError)
        }
    });
    return validador === Object.entries(regexpArray).length
}

// Ver Contraseña
function verContrasenia() {
    let password = document.getElementById('cod')
    if (password.type === "password") {
        document.getElementById("iconContrasenia").innerHTML = '<i class="bi-eye-slash">'
        password.type = "text"
    } else {
        document.getElementById("iconContrasenia").innerHTML = '<i class="bi-eye">'
        password.type = "password"
    }

}