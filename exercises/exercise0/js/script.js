
// Excerise 0 Spiritual Self
// Septermber 8th 2018
//Percy Dragon
//I guess I'm gonna make my spiritual self????
//idk I'm doing something I guess
//so originally I was gonna be an edgy prep and make a skull with flames
// but i really hate spiritual self portrait projects
//just because I don't like thinking of myself in a spiritual way i guess
//im just a giant blob
//guess I'll make an owl?
//

// setup()
//
// Description of setup

function setup() {
  //so like changing the canvas size, and then adding bright red bg
  createCanvas(1000,1000);
  background(204, 93, 121);
  //ears
  stroke(252, 127, 50);
  fill(252, 127, 50);
  triangle(350,290,300,150,450,200);
  triangle(550,200,700,150,650,290);
  //feet
  stroke(244, 119, 66);
  fill(244, 119, 66);
  triangle(380,800,330,840,470,820);
  triangle(621,800,690,840,560,820);
  // time to make a blob of a body
  stroke(252, 127, 50);
  fill(252, 127, 50);
  //big bode
  ellipse(500,600,400,500);
  stroke(255, 174, 68);
  fill(255, 174, 68);
  //middle bode
  ellipse(500,650,300,390);
  //head
  ellipse(500,300,320,300);
  //eyes
  noFill();
  strokeWeight(10);
  stroke(252, 127, 50);
  arc(410, 290, 80, 80, .1, HALF_PI + QUARTER_PI);
  arc(590, 290, 80, 80, .5, PI);
  line(400,330,400,340);
  line(600,330,600,340);
  //beak
  stroke(252, 127, 50);
  strokeWeight(5);
  fill(252, 127, 50);
  triangle(470,370,500,430,530,370);
  //wings
  stroke(255, 174, 68);
  fill(255,174,68);
  curve(600, 450, 341, 450, 300, 790, 1000, 790);
  curve(200, 450, 661, 450, 720, 790, 100, 790);






}


// draw()
//
// Description of draw()

function draw() {

}
