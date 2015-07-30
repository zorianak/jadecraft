Jadec.eps = function(){
    // EPS is related to haste, and whether or not hte character has Ascension spec'd.
    var haste = new stat(Jadec.charStats["Haste"], 100),
        base = 10.00,
        eps = (Jadec.charStats["Haste"] / 1000.00) + 10.00;

    return eps;
}