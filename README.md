# jadecraft
"Shadowcraft, for monks"

The basig gist of this is that it is a NodeJS app that will allow for modeling of monk (windwalker) damage. 

Why is this relevant? Well, basically, it lets us set the spreadsheets aside. Plus, it's been a cool project for me to look
at data modeling, and also get a bit deeper into the NodeJS stack - break away from strictly working with UI, so to speak.

Also because the Monk community has more or less been talking about it, so I figured I may as well carry through with it.

## How do I use it?

Well, as of January 6, 2015, it's not really usable yet. You can view damage from certain spells (Fists of Fury has been used 
so far to model and ensure that the logic is more or less accurate). Here's the plan:

* Model approximate DPS with a character pulled from armory using my other project, npmarmory
* Eventually, add in stat adjustment. This way, we can see how DPS changes as stats are adjusted.
* Offer relative stat weights.
* (Very, Very far future) Offer gear swapping for an easier way to test out different setups, and make Best In Slot lists.

Here's what currently works:

* You can import my monk (Calligraphy - US Stormreaver) and see what my stats look like. And it prints out my current average
Fists of Fury damage is.
