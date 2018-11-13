// Percy Dragon
// Interactive Solar System
// A javascript 3D project
//
// create a solar system

// I want to create an interactive solar system where the user
// plays god. I want to later input more choices, possible use the switch variable
// for when I end up having more if statements.
//
// I want to show how someone's input can shape and form the universe. And
// in this case they quite literally do.

//varibals
var addPlanet = false;
var angleY = 0.0;
var angleX = 0.0;

var numPlanets = 5;

var planets = [];
var planetsTotal = 0;

var osc;

//setup()
//setting up the universe
//and other things that I don't want to repeat for every single frame

function setup() {
  createCanvas(1500,800, WEBGL);

  //adding while loop that pushes planets into planet array
  while ( planetsTotal < numPlanets) {
    planets.push(new Planet((planetsTotal*80) + 150,0,50,random(10,50)));
    planetsTotal++;
  }

  //adding in oscillating sound
  osc = new p5.Oscillator();
  osc.setType("cosine");
  osc.freq(random(250));
  osc.amp(1);
  osc.start();

}

//draw()
// it just draws the universe
function draw() {
  universe();
}

//universe()
//creating code for the universe
// it draws the planets in, such as the sun, and adds the variable to show
//when the other planets should be shown

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
      osc.freq(constrain(map(mouseY,0,height,1000,0),0,1000));
      osc.amp(constrain(map(mouseX,0,width,100,1),1,100));
    }
  }

  angleX -= 0.005;
  angleY += 0.005;
}
