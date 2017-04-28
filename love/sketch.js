var textLetters = ['l','o','V','e','V','o','l','V','e'];

var yOff = 0.0;

function setup() {
  var canvas = createCanvas(900, 600);

  // Move the canvas so it's inside our <div id="sketch-holder">.
  canvas.parent('sketch-holder');
}

function draw() {
  background(0, 0, 0);
  yOff = yOff + .01;
  fill(255);
  textSize(72);
  textAlign(CENTER);

  for (var i = 0; i < textLetters.length; i++) {
    var n = noise(i,yOff) * height;
    text(textLetters[i], i*100+50, n);
  }
}
