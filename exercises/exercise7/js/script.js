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
//var addPlanet = false;
var angleY = 0.0;
var angleX = 0.0;

var numPlanets = 5;

//array for planets because who needs to put them all in manually am i right?
var planets = [];
var planetsTotal = 0;

var osc;

//setup()
//setting up the universe
//and other things that I don't want to repeat for every single frame

function setup() {
  createCanvas(1500,800, WEBGL);

  //adding while loop that pushes planets into planet array
  //because im effecient (read: lazy) and no one should have to manually code in
  //every single planet, when the code can do it for you!
  while ( planetsTotal < numPlanets) {
    planets.push(new Planet((planetsTotal*80) + 150,0,50,random(10,50)));
    planetsTotal++;
  }

  //adding in oscillating sound
  osc = new p5.Oscillator();
  osc.setType("sine");
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
  //implementing the sun
  background(0);
  // push();
  rotateY(angleY);
  noStroke();
  //orangeish colour
  fill(255,210,99);
  sphere(100);

  // implementing the rest of the planets
  //they look sort of trippy and will 100% cause epilepsy
  //when you press the mouse, the planets appear
  //when you releat the mouse, poof! they vanish
  if (mouseIsPressed) {
    // draws the planets in until there are no more planets to draw in
    for (var i = 0; i < planets.length; i++) {
      var angleR = 0.0;
      //angleR += 0.005;
      //having the angle of rotation be connected to the mouse
      angleR = map(mouseX,0,width,30,0);
      rotateY(angleR);
      planets[i].display();
      //while the mouse is pressed, there is an oscillating sound connected to both the x and y of the mouse
      // it sounds really trippy
      osc.freq(constrain(map(mouseY,0,height,1000,0),0,1000));
      osc.amp(constrain(map(mouseX,0,width,100,1),1,100));
    }
  }

  angleX -= 0.005;
  angleY += 0.005;
}
