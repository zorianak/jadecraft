/***************************************************************

This is the base stat object. Each stat has a few properties -
which is basically its conversion rate (coefficient), point per point. 

adding this here: <gahddo> 110 crit, 100 haste, 44 mastery, 66 mult, 130 vers

***************************************************************/

function stat(statRating, coefficient){
    this.rating = statRating / coefficient;
}