function (key, values){
	reducedValue = {score : 0, votes : 0}
	
	var total_score = 0;
	var total_votes = 0;

	for(i = 0; i < values.length; i++) {
		total_score += values[i].score;
		total_votes += values[i].votes;

	}

	reducedValue.score = total_score;
	reducedValue.votes = total_votes;

    return reducedValue;
}
