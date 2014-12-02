function (key, values){
    reducedValue = {score:0, submision: 0}

    var total_score = 0;
    var total_submisiones = 0;

	for(i = 0; i < values.length; i++) {
		total_score += values[i].score;
		total_submisiones += values[i].submision;

	}

	reducedValue.score = total_score;
	reducedValue.submision = total_submisiones;

    return reducedValue;
}
