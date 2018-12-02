/*****************

Project 3
Percy Dragon

I'm considering making a creative interactive space
using various techniques we learned in class
I might use the switch state that michael showed me to switch between
concepts
so i'll have the moving planets from proto1
the nebula from proto2
and i'll be cleaning it up
to make a nice and clean project

******************/

//adding in all of the variables
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

//adding in the switch state variable
var state = "TITLE";

//preload()
//i want to use a fancy font
//so i need to load it in

// function preload() {
//   instructionFont = loadFont("assets/fonts/QubioShadow.ttf")
// }

//i don't think i'll be able to use the font w/ WEBGL so yeah, I'm
//commenting it out for now.

// setup()
//
// Description of setup

function setup() {
  //creating canvas
  createCanvas(1500,800, WEBGL);
  translate(width/2,height/2)
  background(0)

  //this was originally in set up in the prototype 1
  //so ill leave it here for now
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

//adding in a title titleScreen
//so that the player is immediately brought to that, than shown how to change from one to the other
//since I can't use text w/ WEBGL
//i'll need to find new and innovative ways to create the titleScreen
//i'll probably just make an image lol
//titleScreen()
function titleScreen() {
  //so here is where we'll tell the player how to navigate between the prototypes
  // right arrow is the protoype 1
  // left arrow is the prototype 2
  if (keyCode === RIGHT_ARROW) {
    state = "PROTO1"
  }
  if (keyCode === LEFT_ARROW) {
    state = "PROTO2"
  }

  //ive decided to add the sun in at the beginning
  //because I feel like it would be visuall interesting
  noStroke();
  //orangeish colour
  fill(255,210,99);
  sphere(100);

}


// draw()
//
// Description of draw()

function draw() {
  switch (state) {
    case "TITLE": titleScreen(); break;
    case "PROTO1": proto1(); break;
    case "PROTO2": proto2(); break;
   }
}
//putting prototype 1 into it's own function
//so that i can properly divide everything up
//so that when I put the switch case into the draw loop
//everything will be nice and clean

//proto1()
function proto1() {
  universe();

  if (keyCode === UP_ARROW) {
    state = "TITLE"
  }
  if (keyCode === LEFT_ARROW) {
    state = "PROTO2"
  }
}

//putting protoype 2 into it's own function
//so that I can properly divide everything up
//into those seperate things I wanted to do
//so everything that was in draw in proto2
//is now in this new function
//so that there can only be switch cases in the draw loop

//proto2()
function proto2() {
  nebula();

  if (spaceKey) {
    meteorite();
  }

  if (keyCode === UP_ARROW) {
    state = "TITLE"
  }
  if (keyCode === RIGHT_ARROW) {
    state = "PROTO1"
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
  for (var i = 0; i < meteors.length; i++) {
    meteors[i].display();
  }
}

//universe()
//creating code for the universe
// it draws the planets in, such as the sun, and adds the variable to show
//when the other planets should be shown
//this is the code that basically has that rotating solar system thing
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


//mouseDragged()
//having the stars be created everytime the mouse is dragged
function mouseDragged() {
  babyStars.push(new Star(mouseX - random(width/1.8, 780),mouseY - height/2,random(2,5),random(2,5)));
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
  rect(-width/2, -height/2, width, height);
  spaceKey = true;
  radius = random(50);
  meteors.push(new Meteor(random(width), random(height), radius * 2 ));
}
