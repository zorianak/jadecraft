function eps(charStats){
    // EPS is related to haste, and whether or not hte character has Ascension spec'd.
    var haste = new stat(charStats["Haste"], 100),
        base = 10.00,
        eps = (charStats["Haste"] / 1000.00) + 10.00;

    return eps;
}
