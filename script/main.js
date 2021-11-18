//Fecha
let date = new Date();

document.getElementById("anyo").innerHTML = date.getFullYear()
document.getElementById("dia").innerHTML = date.getDate()
document.getElementById("mes").innerHTML = date.toLocaleDateString('es', { month: "long" }).toUpperCase()


// Abrir PopUp
function popUpTimeOut() {
    let propiedades = "resizable = 0, status = 0, location = 0, toolbar = 0, menubar=0, width = 200, height = 80, top = 500px, left = 500px"
    open('popUp.html', 'PopUp', propiedades)
}

// setTimeout(popUpTimeOut, 10000);