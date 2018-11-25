// Percy Dragon
// Prototype 2
// A project about
// pushing stars into a galaxy
// when you click on a button
// and the stars are connected
// to the position of the mouse

//variables
//array for the white trailing stairs
var babyStars = [];

//angle for oscillation
var angle = 0;

//var for it statement
var meteor = false;

//array for whatever the frick the stars/planets/meteors are.
//how about I just call them epilepsy warning
var planets = [];

//radius for osciallating ellipses. Easy enough
var radius;

//fancy font
var instructionFont;

//instructions on what to do
var instructions = "Drag Mouse to create Stars\nPress any button to add flickering Stars"

//preload()
//i want to use a fancy font
//so i need to load it in

function preload() {
  instructionFont = loadFont("assets/fonts/QubioShadow.ttf")
}

//setup()
//let's set up the galaxy
function setup() {
  createCanvas(800,500);
  background(0);
  //space was lame before it got hot
  //comedy is my passion *insets bad graphic design is my passion meme*

  //instructions
  //ive just realized no one will understand this..... what it is
  //if i don't put any instructions
  push();
  textFont(instructionFont);
  textAlign(CENTER)
  textSize(29);
  fill(222,88,99);
  noStroke();
  text(instructions,width/2,100);



}

//draw()
//let's make it do shit
function draw() {
  nebula();

  if (meteor) {
    meteorite();
  }
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
  for (var i = 0; i < planets.length; i++) {
    planets[i].display();
  }
}


//mouseDragged()
//having the stars be created everytime the mouse is dragged
function mouseDragged() {
  babyStars.push(new Star(mouseX + random(-10, 10),mouseY,random(2,5),random(2,5)));
}

//keyPressed()
//having the screen reset itself to black
//ive also added the adding more stars/meteorites/planets WHATEVER
//this is very confusing and I'm very sorry
//keyPressed()
function keyPressed() {
  fill(0);
  rect(0, 0, width, height);
  meteor = true;
  radius = random(50);
  planets.push(new Planet(random(width), random(height), radius * 2 ));
}

//there we go our universe is born and once again, MASSIVE EPILEPSY WARNING
