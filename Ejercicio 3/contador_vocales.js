function contador_vocales(){
   var frase = frase_usuario()
    return frase.replace(/[^aeiouAEIOU]/g, "").length
}