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

var instructionIMG;

//instructions on what to do
var instructions = "Drag Mouse to create Stars\nPress any button to add flickering Stars\nDrag the mouse left to right\n to change the amplitude of the sound\nDrag the mouse up and down \nto change the frequency of the sound"

//i wanted to add in sound
var osc;

//preload()
//i want to use a fancy font
//so i need to load it in

function preload() {
  instructionFont = loadFont("assets/fonts/QubioShadow.ttf")
  instructionIMG = loadImage("assets/images/instructions.png");
}


function setup() {
  createCanvas(1500,800, WEBGL);

  //adding while loop that pushes planets into planet array
  //because im effecient (read: lazy) and no one should have to manually code in
  //every single planet, when the code can do it for you!

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
  background(0);
  image(instructionIMG,width/2,height/2);
}
