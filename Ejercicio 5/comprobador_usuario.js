function comprobador() {
    var datos = usuario()
    do{
    (isRuning = true)
    var comprobar_nombre = prompt("Cual es tu nombre de usuario?")
    var comprobar_contraseña = prompt("Cual es tu contraseña de usuario?")
    if(datos[0] == comprobar_nombre) {
    alert("Es correcto")
}
    else if(datos[0] || comprobar_nombre) {
    alert("El nombre de usuario no es correcto")
    }
    if(datos[1] == comprobar_contraseña) {
    alert("Es correcto")
}
    else if(datos[1] || comprobar_contraseña){
    alert("La contraseña de usuario no es correcta")
    }

if(datos[0] == comprobar_nombre && datos[1] == comprobar_contraseña) {
isRuning = false
}
}
while(isRuning)
}