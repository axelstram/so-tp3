function (key, values){
    reducedValue = {score: 0, words: 0};

	var total_score = 0;
	var total_palabras = 0;

	for(i = 0; i < values.length; i++) {
		total_score += values[i].score;
		total_palabras += values[i].words;
	}

	reducedValue.score = total_score;
	reducedValue.words = total_palabras;


    return reducedValue;
}
