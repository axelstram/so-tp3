function (key, values){
   reducedValue = {comentarios : 0, submision : 0}
	
	var total_comentarios = 0;
	var total_submisiones = 0;

	for(i = 0; i < values.length; i++) {
		total_comentarios += values[i].comentarios;
		total_submisiones += values[i].submision;

	}

	reducedValue.comentarios = total_comentarios;
	reducedValue.submision = total_submisiones;

    return reducedValue;
}
