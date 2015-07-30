var Jadec = Jadec || {};
//var Jadec.spell = Jadec.spell || {};

/****************************************************
calculate and define the average weapon dps
****************************************************/

Jadec.stance = 1.1;
Jadec.ap = Jadec.charStats["Attack Power"];
Jadec.ifTp = true;
Jadec.avgWdps = Jadec.charStats["avgWdps"];
Jadec.rskDebuf = 1.2;

//function(school, coefficient, charStats, ifTp, stance, cd){
// most spells aren't that special and don't need their own logic
Jadec.tigerpalm = new Jadec.spell('physical', 3, Jadec.charStats, Jadec.ifTp, Jadec.stance, Jadec.avgWdps, 1);
Jadec.tpDmg = Jadec.tigerpalm.damage();

Jadec.jab = new Jadec.spell('physical', 1.15, Jadec.charStats, Jadec.ifTp, Jadec.stance, Jadec.avgWdps, 1);
Jadec.jabDmg = Jadec.jab.damage();

Jadec.rsk = new Jadec.spell('physical', 10, Jadec.charStats, Jadec.ifTp, Jadec.stance, Jadec.avgWdps, 8);
Jadec.rskDmg = Jadec.rsk.damage();

Jadec.expelHarm = new Jadec.spell('nature', 0.6, Jadec.charStats, Jadec.ifTp, Jadec.stance, Jadec.avgWdps, 1);
Jadec.ehDmg = Jadec.expelHarm.damage();

Jadec.hurricaneStrike = new Jadec.spell('physical', 2, Jadec.charStats, Jadec.ifTp, Jadec.stance, Jadec.avgWdps, 45);
Jadec.hurricaneDmg = Jadec.hurricaneStrike.damage() * 15;

//FoF crap
Jadec.fof = new Jadec.spell('physical', 7.755, Jadec.charStats, Jadec.ifTp, Jadec.stance, Jadec.avgWdps, 25);

Jadec.fofDmg = Jadec.fof.damage() * 5;

// BoK crap
Jadec.blackoutkick = new Jadec.spell('physical', 5.375, Jadec.charStats, Jadec.ifTp, Jadec.stance, Jadec.avgWdps, 1);
Jadec.bokDmg = Jadec.blackoutkick.damage();

var bokDot = .3;

Jadec.bokDotDmg = Jadec.blackoutkick.damage() * bokDot;
