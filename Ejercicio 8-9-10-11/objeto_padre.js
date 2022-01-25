function Asignatura (nombre, nota_1, nota_2, nota_3){
this.nombre = nombre
this.nota_1 = nota_1
this.nota_2 = nota_2
this.nota_3 = nota_3


this.mediaTotal = function() {
    console.log((nota_1 + nota_2 + nota_3) / 3)
}
}

var Matematicas = new Asignatura("Matematicas, 5, 5, 5")
Matematicas.mediaTotal()
