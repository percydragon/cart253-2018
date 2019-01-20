var angle = 0;
var radius = 100;
function setup() {
  createCanvas(600,600);
  background(0);
  fill(255);
}
function draw() {
  var growth = sin(angle) * (24/2);
  rect(width/2,height/2,24 - growth, 24 - growth);
  angle += 0.05;
}
