// Percy Dragon
// Prototype 2
// A project about
// pushing stars into a galaxy
// when you click on a button
// and the stars are connected
// to the position of the mouse

//variables

var babyStars = [];
var starsTotal = 0;
var numStars = 100;

//setup()
//let's set up the galaxy
function setup() {
  console.log(new Date)
  createCanvas(800,500);
  background(0);
}

//draw()
//let's make it do shit
function draw() {
  nebula();
}

//im gonna be creating an array to push points
//to create stars
//nebula()
function nebula() {
  // while (starsTotal < numStars) {
  //   babyStars.push(new Star(mouseX,mouseY,random(2,5),random(2,5)));
  //   starsTotal++;
  // }
  for (var i = 0; i < babyStars.length; i++) {
    babyStars[i].display();
  }
}

function mouseDragged() {
  babyStars.push(new Star(mouseX + random(-10, 10),mouseY,random(2,5),random(2,5)));
}
