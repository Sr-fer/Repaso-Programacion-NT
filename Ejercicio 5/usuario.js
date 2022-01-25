function usuario() {
    var datos =[]
    var nombre_usuario = prompt("Crea tu nombre de usuario")
    var contraseña_usuario = prompt("Crea tu contraseña")
    datos.push(nombre_usuario)
    datos.push(contraseña_usuario)
    return datos
}