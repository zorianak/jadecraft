var popResults = function() {
	// Populate dmg results for each spell
	
	var avgBok = $('#bokAvg'),
		rskAvg = $('#rskAvg');
	
	avgBok.text(Math.round(bokDmg));
	rskAvg.text(Math.round(rskDmg));
}