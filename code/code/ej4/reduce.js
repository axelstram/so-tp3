function (key, values){
   reducedValue = {upvotes : 0, submision : 0}
	
	var total_upvotes = 0;
	var total_submisiones = 0;

	for(i = 0; i < values.length; i++) {
		total_upvotes += values[i].upvotes;
	}

	reducedValue.upvotes = total_submisiones;
	reducedValue.submision = values.length;

    return reducedValue;
}
