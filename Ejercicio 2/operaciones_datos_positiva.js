function operaciones_datos_positiva() {
   var datos = datos_usuario()
   var operacionp1 = (Math.pow(datos[0])) - (4*datos[1]*datos[2])
   var operacionp2 = (- datos[0]) + (Math.sqrt(operacionp1))
   var operacion_final_p = (operacionp2) / (2*datos[1])
   return operacion_final_p
}