var popResults = function() {
	// Populate dmg results for each spell
	
	var avgBok = $('#bokAvg'),
		rskAvg = $('#rskAvg');
	
	avgBok.text(Math.round(Jadec.bokDmg));
	rskAvg.text(Math.round(Jadec.rskDmg));
}

console.log(Jadec);