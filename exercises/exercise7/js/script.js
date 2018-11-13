// Percy Dragon
// Interactive Solar System
// A javascript 3D project
//
// create a solar system

//varibals
var addPlanet = false;
var angleY = 0.0;
var angleX = 0.0;

var numPlanets = 5;

var planets = [];
var planetsTotal = 0;

//setup()
//setting up the universe
function setup() {
  createCanvas(1500,800, WEBGL);
  while ( planetsTotal < numPlanets) {
    planets.push(new Planet((planetsTotal+150) * 3.5,0,50,random(10,50)));
    planetsTotal++;
  }
}

//draw()
function draw() {
  universe();
}

//universe()
//creating code for the universe

function universe() {
  background(0);
  // push();
  rotateY(angleY);
  noStroke();
  fill(255,210,99);
  sphere(100);

  if (mouseIsPressed) {
    for (var i = 0; i < planets.length; i++) {
      rotateY(angleY);
      planets[i].display();
    }
  }

  angleX -= 0.001;
  angleY += 0.005;
}
