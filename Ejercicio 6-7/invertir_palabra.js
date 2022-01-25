function palabraINV() {
    var palabra = palabra_usuario()
    var mensaje = ""
    for(var i = palabra.length - 1; i >= 0; i--) {
    mensaje = mensaje + palabra.charAt(i)
}
return mensaje
}