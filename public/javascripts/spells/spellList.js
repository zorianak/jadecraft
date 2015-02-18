var Jadec = Jadec || {};
//var Jadec.spell = Jadec.spell || {};

/****************************************************
calculate and define the average weapon dps
****************************************************/

var stance = 1.05;
var ap = charStats["Attack Power"];
var ifTp = true;
var avgWdps = charStats["avgWdps"];
var rskDebuf = 1.1;

//function(school, coefficient, charStats, ifTp, stance, cd){
// most spells aren't that special and don't need their own logic
tigerpalm = new Jadec.spell('physical', 3, charStats, ifTp, stance, avgWdps, 1);
var tpDmg = tigerpalm.damage();

jab = new Jadec.spell('physical', 1.15, charStats, ifTp, stance, avgWdps, 1);
var jabDmg = jab.damage();

rsk = new Jadec.spell('physical', 8, charStats, ifTp, stance, avgWdps, 1);
var rskDmg = rsk.damage();

expelHarm = new Jadec.spell('nature', 0.6, charStats, ifTp, stance, avgWdps, 1);
var ehDmg = expelHarm.damage();

hurricaneStrike = new Jadec.spell('physical', 2, charStats, ifTp, stance, avgWdps, 45);
var hurricaneDmg = hurricaneStrike.damage() * 15;
console.log(hurricaneDmg);

//FoF crap
var fof = new Jadec.spell('physical', 7.755, charStats, ifTp, stance, avgWdps, 25);

var fofDmg = fof.damage() * 5;

// BoK crap
var blackoutkick = new Jadec.spell('physical', 5.375, charStats, ifTp, stance, avgWdps, 1);
var bokDmg = blackoutkick.damage();

var bokDot = .3;

var bokDotDmg = blackoutkick.damage() * bokDot;
