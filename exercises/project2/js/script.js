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

// score tracking variable
var updateScoreLeft = 0;
var updateScoreRight = 0;

// NOTE array variably for increasing colours depending on points of player
var paddleColours;

// variable that allows us to decide if the array index increases or not in an if statement
var scoreLeft = false;
var scoreRight = false;

// variable for sounds

var onePoint;
var twoPoints;
var threePoints;
var fourPoints;
var fivePoints;
var sixPoints;
var sevenPoints;
var eightPoints;
var ninePoints;
var tenPoints;
var elevenPoints;
var twelvePoints;
var thirteenPoints;

// preload()

//loading in sound effects

function preload() {
  onePoint = new Audio("assets/sounds/1_p.mp3");
  twoPoints = new Audio("assets/sounds/2_p.mp3");
  threePoints = new Audio("assets/sounds/3_p.mp3");
  fourPoints = new Audio("assets/sounds/4_p.mp3");
  fivePoints = new Audio("assets/sounds/5_p.mp3");
  sixPoints = new Audio("assets/sounds/6_p.mp3");
  sevenPoints = new Audio("assets/sounds/7_p.mp3");
  eightPoints = new Audio("assets/sounds/8_p.mp3");
  ninePoints = new Audio("assets/sounds/9_p.mp3");
  tenPoints = new Audio("assets/sounds/10_p.mp3");
  elevenPoints = new Audio("assets/sounds/11_p.mp3");
  twelvePoints = new Audio("assets/sounds/12_p.mp3");
  thirteenPoints = new Audio("assets/sounds/13_p.mp3");
}

// setup()
//
// Creates the ball and paddles
function setup() {
  createCanvas(640,480);

  // NEW //
  paddleColours = [
    color(246, 255, 237),
    color(233, 252, 214),
    color(220, 255, 186),
    color(209, 255, 165),
    color(194, 255, 137),
    color(179, 255, 109),
    color(171, 255, 94),
    color(164, 255, 81),
    color(158, 255, 71),
    color(146, 255, 50),
    color(138, 255, 35),
    color(130, 255, 20),
    color(120, 255, 2)
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
  background(0);

  leftPaddle.handleInput();
  rightPaddle.handleInput();

  ball.update();
  leftPaddle.update();
  rightPaddle.update();

  if (ball.isOffScreen()) {

    // NEW //
    leftPaddle.scoreDisplay();
    rightPaddle.scoreDisplay();
    // END NEW //

    ball.reset();
  }

  ball.handleCollision(leftPaddle);
  ball.handleCollision(rightPaddle);

  ball.display();
  leftPaddle.display();
  rightPaddle.display();
}
