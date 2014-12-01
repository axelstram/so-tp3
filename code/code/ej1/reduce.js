function (key, values){
    reducedValue = {score:0, submision: 0}

    var total_score = 0;

	for(i = 0; i < values.length; i++) {
		total_score += values[i].score;
	}

	reducedValue.score = total_score;
	reducedValue.submision = values.length;

    return reducedValue;
}
