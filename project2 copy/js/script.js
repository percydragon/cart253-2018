// Basic OO Pong
// by Pippin Barr
//
// A primitive implementation of Pong with no scoring system
// just the ability to play the game with the keyboard.
//
// Arrow keys control the right hand paddle, W and S control
// the left hand paddle.
//
// Written with JavaScript OOP.

// Variable to contain the objects representing our ball and paddles
var ball;
var leftPaddle;
var rightPaddle;

// NEW //
var updateScoreLeft = 0;
var updateScoreRight = 0;

//NOTE to change the colour of the paddles according to the score

//NOTE this is for the for function in paddle scoreDisplay(), allowing us to know which paddle is changing colour
var scoreLeft = false;
var scoreRight = false;

// setup()
//
// Creates the ball and paddles
function setup() {
  createCanvas(640,480);
  // NEW //
  //NOTE WON'T LET ME ASSIGN COLOURS BEFORE SET UP
  var paddleColours = [
    fill(246, 255, 237),
    fill(233, 252, 214),
    fill(220, 255, 186),
    fill(209, 255, 165),
    fill(194, 255, 137),
    fill(179, 255, 109),
    fill(171, 255, 94),
    fill(164, 255, 81),
    fill(158, 255, 71),
    fill(146, 255, 50),
    fill(138, 255, 35),
    fill(130, 255, 20),
    fill(120, 255, 2)
  ]
  // END NEW //
  // Create a ball
  ball = new Ball(width/2,height/2,5,5,10,5);
  // Create the right paddle with UP and DOWN as controls
  rightPaddle = new Paddle(width-10,height/2,10,60,10,DOWN_ARROW,UP_ARROW,paddleColours);
  // Create the left paddle with W and S as controls
  // Keycodes 83 and 87 are W and S respectively
  leftPaddle = new Paddle(0,height/2,10,60,10,83,87,paddleColours);
}

// draw()
//
// Handles input, updates all the elements, checks for collisions
// and displays everything.
function draw() {
  var paddleColours = [
    fill(246, 255, 237),
    fill(233, 252, 214),
    fill(220, 255, 186),
    fill(209, 255, 165),
    fill(194, 255, 137),
    fill(179, 255, 109),
    fill(171, 255, 94),
    fill(164, 255, 81),
    fill(158, 255, 71),
    fill(146, 255, 50),
    fill(138, 255, 35),
    fill(130, 255, 20),
    fill(120, 255, 2)
  ]

  background(0);

  leftPaddle.handleInput();
  rightPaddle.handleInput();

  ball.update();
  leftPaddle.update();
  rightPaddle.update();

  if (ball.isOffScreen()) {
    ball.reset();
  }

  ball.handleCollision(leftPaddle);
  ball.handleCollision(rightPaddle);

  ball.display();
  leftPaddle.display(paddleColours);
  rightPaddle.display(paddleColours);
}
