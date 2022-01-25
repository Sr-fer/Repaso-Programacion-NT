function contador_impares() {
    var numero = numero_usuario()
    var  array_imapres = []
    for(var i = 0; i < numero; i++){
    if (i % 2 == 1) {
        array_imapres.push(i)
    }
}
return array_imapres
}