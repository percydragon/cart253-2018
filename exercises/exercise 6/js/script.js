// Broken Basic OO Pong
// by Pippin Barr
//
// A broken primitive implementation of Pong with no scoring system
// just the ability to play the game with the keyboard.
//
// Arrow keys control the right hand paddle, W and S control
// the left hand paddle.
//
// Written with JavaScript OOP.

// Variable to contain the objects representing our ball and paddles
//NOTE var ball is written incorrectly and missing an l
var ball;
var leftPaddle;
var rightPaddle;

// setup()
//
// Creates the ball and paddles
function setup() {
  //NOTE wrote crateCanvas instead of createCanvas
  createCanvas(640,480);
  //NOTE adding colour to ball and paddles
  fill(255);
  noStroke();
  // Create a ball
  ball = new Ball(width/2,height/2,50,50,10,50);
  // Create the right paddle with UP and DOWN as controls
  rightPaddle = new Paddle(width-10,height/2,10,600,10,UP_ARROW,DOWN_ARROW);
  // Create the left paddle with W and S as controls
  // Keycodes 83 and 87 are W and S respectively
  //NOTE missing a parenthisis at the end
  leftPaddle = new Paddle(0,height/2,10,60,10,83,87);
//NOTE added missing curly bracket to close the function
}


// draw()
//
// Handles input, updates all the elements, checks for collisions
// and displays everything.
function draw() {
  background(0);

  leftPaddle.handleInput();
  rightPaddle.handleInput();
//NOTE parenthisis are missing for this function (ball.update)
  ball.update();
  leftPaddle.update();
  rightPaddle.update();
//NOTE function name is not written correctly
//NOTE forgot curly bracket for if function
  if (ball.isOffScreen()) {
    reset();
  }

  ball.handleCollision(leftPaddle);
  ball.handleCollision(rightPaddle);

  ball.display();
  leftPaddle.display();
  //NOTE missing parenthisis; syntax error
  rightPaddle.display();
}
