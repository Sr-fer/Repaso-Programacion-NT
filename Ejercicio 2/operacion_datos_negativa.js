function operaciones_datos_negativa() {
    var datos = datos_usuario()
    var operacionn1 = (Math.pow(datos[0])) - (4*datos[1]*datos[2])
    var operacionn2 = (- datos[0]) - (Math.sqrt(operacionn1))
    var operacion_final_n = (operacionn2) / (2*datos[1])
    return operacion_final_n
 }