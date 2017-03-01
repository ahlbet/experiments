const lyrics = [
  'the little things I need to save my soul', 'I picture your smile like it was yesterday', 'me hollow in my interviews', 'love is just a word, unless you show it', 'I\'d trade it up for happiness but joyful don\'t remember me', 'piano was a deep red, your fingers were a green hue', 'I am a meteor on a crash course towards Earth across the cosmos', 'you remind me to love myself for the principle'
];

const telefone = $("#telefone");
const noname = $("#noname");

$("#everyButton").click(function() {
  
  noname.html('');
  
  const randomIndex = Math.floor(Math.random() * lyrics.length);
  const randomLine = lyrics[randomIndex];
  
  noname.append(`<h3>${randomLine}</h3>`);
  console.log(randomLine);
})