/*
It should be Base Weapon WDPS + AP/3.5

Hinalover: AA are a single roll
Hinalover: so it's either DW = 100 - 19% - Crit Rate % = Hit %
Hinalover: 2H = 100 - Crit Rate % = Hit %

AA, unlike Yellow attacks, run a 1 roll system
Hinalover: it can either miss, dodge, parry, crit, or hit in one go

Hinalover: yellow attacks have a 2 roll system
Hinalover: first roll figures out if it can miss, dodge, or parry
*/
var autoattack = function(charStats){
    var AP = charStats["AP"],
        wDPS = charStats["avgWdps"];

    var damage = wDPS + AP/3.5;
}