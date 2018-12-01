//varibals
//var addPlanet = false;
var angleY = 0.0;
var angleX = 0.0;

var numPlanets = 5;

//array for planets because who needs to put them all in manually am i right?
var planets = [];
var planetsTotal = 0;

//setup()
//setting up the universe
//and other things that I don't want to repeat for every single frame
//variables
//array for the white trailing stairs
var babyStars = [];

//angle for oscillation
var angle = 0;

//var for it statement
var meteor;

var spaceKey = false;

//array for whatever the frick the stars/planets/meteors are.
//how about I just call them epilepsy warning
var meteors = [];

//radius for osciallating ellipses. Easy enough
var radius;

//fancy font
var instructionFont;

//instructions on what to do
var instructions = "Drag Mouse to create Stars\nPress any button to add flickering Stars\nDrag the mouse left to right\n to change the amplitude of the sound\nDrag the mouse up and down \nto change the frequency of the sound"

//i wanted to add in sound
var osc;

//preload()
//i want to use a fancy font
//so i need to load it in

function preload() {
  instructionFont = loadFont("assets/fonts/QubioShadow.ttf")
}


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

  nebula();

  if (spaceKey) {
    meteorite();
  }
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

//im gonna be creating an array to push points
//to create stars
//nebula()
function nebula() {
  for (var i = 0; i < babyStars.length; i++) {
    babyStars[i].display();
  }
}

//here's the stars
//or meteorites or whatever
//man i didn't exactly name these properly
//but going back and changging them would be a REAL hassle
//meteorite()
function meteorite() {
  for (var i = 0; i < meteors.length; i++) {
    meteors[i].display();
  }
}


//mouseDragged()
//having the stars be created everytime the mouse is dragged
function mouseDragged() {
  babyStars.push(new Star(mouseX + random(-10, 10),mouseY,random(2,5),random(2,5)));
  //while the mouse is dragged, there is an oscillating sound connected to both the x and y of the mouse
  // it sounds really trippy
  osc.freq(constrain(map(mouseY,0,height,1000,0),0,1000));
  osc.amp(constrain(map(mouseX,0,width,100,1),1,100));
}

//keyPressed()
//having the screen reset itself to black
//ive also added the adding more stars/meteorites/planets WHATEVER
//this is very confusing and I'm very sorry
//keyPressed()
function keyPressed() {
  fill(0);
  rect(0, 0, width, height);
  spaceKey = true;
  radius = random(50);
  meteors.push(new Meteor(random(width), random(height), radius * 2 ));

}
