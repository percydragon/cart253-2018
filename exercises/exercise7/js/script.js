// Percy Dragon
// Interactive Solar System
// A javascript 3D project
//
// create a solar system

//varibals
var addPlanet = false;

//setup()
//setting up the universe
function setup() {
  createCanvas(700,700, WEBGL);
}

//draw()
function draw() {
  background(0);
  universe();
}

//universe()
//creating code for the universe

function universe() {
  sphere(100);
  noStroke();
  fill(255,210,99);
}

//mouseclicked()
//each time the player clicks the screen, a new random planet is added
function mouseClicked() {
  addPlanet = true;
}
