let img;
function preload() {
  img = loadImage("/image-removebg-preview (6).png");
}

function setup() {
  var canvas = createCanvas(1450, 500);
 
  // Move the canvas so it’s inside our <div id="sketch-holder">.
  canvas.parent('sketch-holder');

  background(255, 0, 200);
}

function draw() {
  imageMode(CENTER)
  background(255, 239, 217);
  image(img, mouseX, mouseY, 100, 200)
}