/************************************
This file creates the generation and manages our general TEB.

Tigereye Brew:
* Increases damage by 6% per stack when used
* Up to 10 stacks can be used. Can stack up to 20 times
* Stacks are generated:
	* Every time the monk spends 4 Chi
	* Another roll is used against Mastery to
	  give a chance of an extra stack
	* Combo Breaker: BoK and ChiEx
	  Will also generate TeB
************************************/
Jadec.teb = {};

Jadec.teb.tebDmg = function(tebStacks){
	// const to track % of damage during buff
	var DMG_PER_STACK = 6;

	// how many stacks possbile
	var MAX_STACKS_PER_USE = 10;

	var stacksUsed = 0,
		damageGain = 0;
	// if teb stacks are more than max stacks,
	// use max stacks
	if(tebStacks > MAX_STACKS_PER_USE) {
		stacksUsed = MAX_STACKS_PER_USE;
	} else {
		stacksUsed = tebStacks;
	}

	damageGain = stacksUsed * DMG_PER_STACK;
}


// Length of TEB is 15s
Jadec.teb.length = 15;

// now to calculate amount generated
Jadec.teb.generateTeb = function(ability, cbChance){
	//( ( 1 + (Haste/100) )
	
	// get the amount of energy over the course of the fight
	// round up because you can't get partial points of energy
	var fightLength = $('#fightLength').val() * 60,
		eGenerated = Math.round(Jadec.eps() * fightLength);
	
	
	// so 45 energy represents 2 chi,
	// thus eGenerated + 100 = how much chi generated during fight
	var chiGenerated = Math.round( (eGenerated + 100)/45);
	
	console.log('Chi generated: ' + chiGenerated);
	
	// The one glaring flaw here is that CB
	// can be triggered by both RSK as well as Jab.
	// Jab is our main Chi Generator, so going to have to sleep on this.
}