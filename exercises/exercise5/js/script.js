// Basic OO Pong
// by Percy Dragon
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
// NOTE adding in scoring system for both rightPaddle and leftPaddle and scored flag

var leftScore = 0;
var rightScore = 0;

var colourRight = 255;
var colourLeft = 255;

var sadMusic;
var beepSFX;

// END NEW //

// setup()
//
// Creates the ball and paddles

// NOTE loading in the SFX
// NEW //
function preload() {
  beepSFX = new Audio("assets/sounds/beep.wav");
  sadMusic = new Audio("assets/sounds/funeral_march.mp3");
}
// END NEW //

function setup() {
  createCanvas(640,480);
  // Create a ball
  ball = new Ball(width/2,height/2,5,5,10,5);
  // Create the right paddle with UP and DOWN as controls
  rightPaddle = new Paddle(width-10,height/2,10,60,10,DOWN_ARROW,UP_ARROW);
  // Create the left paddle with W and S as controls
  // Keycodes 83 and 87 are W and S respectively
  leftPaddle = new Paddle(0,height/2,10,60,10,83,87);
}

// draw()
//
// Handles input, updates all the elements, checks for collisions
// and displays everything.
function draw() {
  background(0);
  sadMusic.play();

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
  leftPaddle.display();
  rightPaddle.display();
}
