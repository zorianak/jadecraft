/************************************
This file creates the generation and manages our general TEB.

Tigereye Brew:
* Increases damage by 6% per stack when used
* Up to 10 stacks can be used. Can stack up to 20 times
* Stacks are generated:
	* Every time the monk spends 4 Chi
	* Another roll is used against Mastery to
	  give a chance of an extra stack
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
Jadec.teb.generateTeb = {
	
}