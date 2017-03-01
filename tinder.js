const poemArr = [
        
        'i loved the way', 'the dark side of', 'craters', 'remnants of lunar', 'catastrophe', 'i tried to hide', 'in shadows', 'in seas of Serenity', 'of Vapors', 'the way I loved in eclipses', 'you traversed', 'I loved the way you traversed', 'these craters these graves', 'your hands on my face found time', 'sleek, pale echoes', 'through chaos and the chasm', 'i loved', 'you stitched these fissures.', 'sometimes i count the steps to quiet my creaking heels', 'around the wooden cracks that once sounded', 'of yesterday', 'a hurried pace rattles the grain of tomorrow', 'split splinters through my gums', 'i spit smokey swishers', 'sometimes I count the ashes to quiet my waning dreams', 'rooted, in the wind', 'and a faint mirror of what it once was to be', 'sometimes I count the roses to quiet my lonely fear', 'mercy, please, if you please', 'these petals of past are brittle now.', 'but they are, at least,', 'beyond the white curtain', 'beyond her forced smile  that only ever came out', 'when the sun was down', 'I think her light faded my fabric', 'There are things I could say, but I won\'t', 'I could brag, I could boast, but I won\'t', 'All those thoughts should remain unspoken.', 'No, it need not always be this way', 'But, we know, life can be zero sum', 'My step up - no more than your step down.', 'The answer\'s simple - keep it inside', 'I will not be filled by empty boasts', 'Modesty, unspoken - that is love.', 'The pale pink crepe blooming into wilting', 'before me in the gallery, the paper petals', 'spreading over flower pots, the cement', 'molds planting a skyline with gray', 'my eyes climbing four molds in the first row', 'seven molds and six flowers in the second,', 'to a third row on the wall: a photograph', 'of the piece, my eyes believing these flowers', 'and shoving them into one pot,', 'my eyes placing a pot from the photo', 'onto the ground, the pots being not', 'pots, being only cement molds,', 'being self-potted and present', 'containing themselves, containing', 'precisely gray, my eyes beaming from gray','this cement posing with flowers, pots', 'posing with pink, gray posing with crepe,', 'and with the photo posing in a sheen of sky,', 'my eyes place a pot into my right pocket.', 'if', 'Do not hurry, love.', 'spring comes without a push', 'impatience will not chase the frost', 'snowfall melts, rivers rise', 'with steady thaw, no flood this year.', 'Do not hurry love.', 'allow the flower time to grow', 'seed then sprout, stem and leaf', 'blossom beauty all in time', 'beauty, love all in time.', 'Once the rain has been shelved,', 'the smell of an old lake', 'ships through the screen door and', 'meets the soap on the bowl  I have cleaned. It is night', 'and I am near a dream.', 'There had been friends, wine, grains,  pills, words, and not much more.', 'Some bald screech of a man', 'dropped pants and first we cheered  then drowned him in sighs. We', 'talked states, tax, boats and tides,', 'live streamed the rich and rats.', 'We spritzed a proud Left pose.', 'We threw up in our bowls  and bowled, howled, held our bows.', 'We spilled class. We pissed sneers  at men, and we tugged good  at our own dicks. Our skin', 'quite pale, a fact blubbed out', 'like some bright and blank page', 'I have since rinsed the place:', 'I have scrubbed the sink, bowls,', 'pots, and spoons; I have swept', 'and mopped the floor; I have', 'sprayed and wiped tops of all  those words; and I have paged', 'through all those thoughts, and sponged', 'and shipped them off with scorn.', 'But now, the door is wide.', 'My breath is choked. I float.', 'The lake is here, right up', 'to my gums. The rain, too,', 'is here, and has brought down  my shelves. I smell like drains.', 'My foot drips off its toes  which find a wet, clean bowl.', 'is it the light  or the darker time  of the year', 'in the quieter world', 'you thought this could be', 'the world whose dreams blossom', 'and gasp beneath the frozen glass', 'of the heart  and its breaking', 'and before they were mine,', 'my dreams were often of swans', 'dozens of swans, short-chained', 'to the rainclouds, singing  through the colder winds of January', 'singing just as horribly  as we\'ve come to know love.', 'god\'s country', 'have you found me yet', ';', 'no', 'i wish you loved the seconds when we didn\'t fuck', 'I have a dancer\'s pride when pressed', 'against walls, I have a force of miniature', 'things. At sunrise I rise like a king', 'without his home, wandering. Nomadic', 'steps like exhales from his soles. Trails  created', 'but directions have lost me about five minutes', 'back, so however magnetized we claim', 'to be, babe, I know now there is no North Pole', 'aren\'t there any memories worth saving? Or are', 'we mindless like the man with eyes from feet forward?', 'I haven\'t received any help to turn me', 'towards the view that thought is a raft', 'and the people are essentially an ocean', 'of bliss: the sheer size and power of a', 'galaxy can be appreciated by anyone on a  clear night', 'unless of course, the others were to come too', 'you know what company fear is: you know  precious lives', 'they are drinking tea, warming themselves to the', 'thought of an approach like death -- a passing  like receding galaxies. They', 'accelerate the harmony between this and them. Empty', 'phrases have been said over and over again', 'so let\'s try to get some fresh air in the lungs today.', 'One hundred years of rain', 'of wind and shifting sand', 'yet fault lines still remain', 'torn deep into the land', 'No remainder, no reminder', 'forgiven is forgotten debt', 'major scars reduced to minor', 'please remember to forget', 'Ten foot waves from evening winds', 'by morning, calm inviting sea', 'keep no record of her sins', 'begin to heal your memory.', 'I can see the sky', 'pulling the stars closer to the dark', 'I feel it falling  through my hands', 'as I renounce  all forms of undress', 'and if there\'s water on Mars, you\'ll find me drowning', 'thirsty  for Jupiter'      
      ]
  
const poemLine = $("#poemLine");
const newPoem = $("#newPoem");
let randomIndex = Math.floor(Math.random() * poemArr.length);
let randomLine = poemArr[randomIndex];
//const newPoem = [];

window.onload = function() {
  poemLine.append(`<p>${randomLine}</p>`);
}

$("#addButton").click(function(e) {
  e.preventDefault();
  
//  newPoem.push(randomLine);
  newPoem.append(`<p>${randomLine}</p>`);
  
  randomIndex = Math.floor(Math.random() * poemArr.length);
  randomLine = poemArr[randomIndex];
  
  poemLine.html('');
  poemLine.append(`<p>${randomLine}</p>`);
})

$("#skipButton").click(function(e) {
  e.preventDefault();
  
  randomIndex = Math.floor(Math.random() * poemArr.length);
  randomLine = poemArr[randomIndex];
  
  poemLine.html('');
  poemLine.append(`<p>${randomLine}</p>`);
})

$("#createButton").click(function(e) {
  e.preventDefault();
  
  newPoem.css("display", "block");
})

$("#clearButton").click(function(e) {
  e.preventDefault();
  
  newPoem.html('');
  newPoem.css("display", "none");
})
































