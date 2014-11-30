function() {
		emit(this.title, {
    	score: this.score,
    	votes: this.total_votes
    });
}
