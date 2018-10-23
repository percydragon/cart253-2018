// Pong
// by Percy Dragon
//
// A primitive implementation of Pong with no scoring system
// just the ability to play the game with the keyboard.

// Game colors
var bgColor = 0;
var fgColor = 255;

// NEW //
var colourRight = 255;
var colourLeft = 255;

var sadMusic;

var leftScored;
var rightScored;
// END NEW //

// BALL

// Basic definition of a ball object with its key properties of
// position, size, velocity, and speed
var ball = {
  x: 0,
  y: 0,
  size: 20,
  vx: 0,
  vy: 0,
  speed: 5
}

// NEW //
// NOTE adding in scoring system for both rightPaddle and leftPaddle and scored flag

var leftScore = 0;
var rightScore = 0;
// END NEW //

// PADDLES

// How far in from the walls the paddles should be drawn on x
var paddleInset = 50;

// LEFT PADDLE

// Basic definition of a left paddle object with its key properties of
// position, size, velocity, and speed
var leftPaddle = {
  x: 0,
  y: 0,
  w: 20,
  h: 70,
  vx: 0,
  vy: 0,
  speed: 5,
  color: 255,
  upKeyCode: 87, // The key code for W
  downKeyCode: 83 // The key code for S
}

// RIGHT PADDLE

// Basic definition of a left paddle object with its key properties of
// position, size, velocity, and speed
var rightPaddle = {
  x: 0,
  y: 0,
  w: 20,
  h: 70,
  vx: 0,
  vy: 0,
  speed: 5,
  color: 255,
  upKeyCode: 38, // The key code for the UP ARROW
  downKeyCode: 40 // The key code for the DOWN ARROW
}

// A variable to hold the beep sound we will play on bouncing
var beepSFX;

// preload()
//
// Loads the beep audio for the sound of bouncing
function preload() {
  beepSFX = new Audio("assets/sounds/beep.wav");
  sadMusic = new Audio("assets/sounds/funeral_march.mp3");
}

// setup()
//
// Creates the canvas, sets up the drawing modes,
// Sets initial values for paddle and ball positions
// and velocities.
function setup() {
  // Create canvas and set drawing modes
  createCanvas(640,480);
  background(bgColor);
  rectMode(CENTER);
  noStroke();
  fill(fgColor);

  setupPaddles();
  setupBall();
}

// setupPaddles()
//
// Sets the positions of the two paddles
function setupPaddles() {
  // Initialise the left paddle
  leftPaddle.x = paddleInset;
  leftPaddle.y = height/2;

  // Initialise the right paddle
  rightPaddle.x = width - paddleInset;
  rightPaddle.y = height/2;
}

// setupBall()
//
// Sets the position and velocity of the ball
function setupBall() {
  ball.x = width/2;
  ball.y = height/2;
  ball.vx = ball.speed;
  ball.vy = ball.speed;
}

// draw()
//
// Calls the appropriate functions to run the game
function draw() {
  sadMusic.play();

  // Handle input
  // Notice how we're using the SAME FUNCTION to handle the input
  // for the two paddles!
  handleInput(leftPaddle);
  handleInput(rightPaddle);

  // Update positions of all objects
  // Notice how we're using the SAME FUNCTION to handle the input
  // for all three objects!
  updatePosition(leftPaddle);
  updatePosition(rightPaddle);
  updatePosition(ball);

  // Handle collisions
  handleBallWallCollision();
  handleBallPaddleCollision(leftPaddle);
  handleBallPaddleCollision(rightPaddle);

  // Handle the ball going off screen
  handleBallOffScreen();

  // Display the paddles and ball
  displayPaddle(leftPaddle);
  displayPaddle(rightPaddle);
  displayBall();

  // NEW //
  resetBall();
  handlePaddleWrap(leftPaddle);
  handlePaddleWrap(rightPaddle);
  // END NEW //
}


// handleInput(paddle)
//
// Updates the paddle's velocity based on whether one of its movement
// keys are pressed or not.
// Takes one parameter: the paddle to handle.
function handleInput(paddle) {

  // Set the velocity based on whether one or neither of the keys is pressed

  // NOTE how we can change properties in the object, like .vy and they will
  // actually CHANGE THE OBJECT PASSED IN, this allows us to change the velocity
  // of WHICHEVER paddle is passed as a parameter by changing it's .vy.

  // UNLIKE most variables passed into functions, which just pass their VALUE,
  // when we pass JAVASCRIPT OBJECTS into functions it's the object itself that
  // gets passed, so we can change its properties etc.

  // Check whether the upKeyCode is being pressed
  // NOTE how this relies on the paddle passed as a parameter having the
  // property .upKey
  if (keyIsDown(paddle.upKeyCode)) {
    // Move up
    paddle.vy = -paddle.speed;
  }
  // Otherwise if the .downKeyCode is being pressed
  else if (keyIsDown(paddle.downKeyCode)) {
    // Move down
    paddle.vy = paddle.speed;
  }
  else {
    // Otherwise stop moving
    paddle.vy = 0;
  }
}

// updatePosition(object)
//
// Sets the position of the object passed in based on its velocity
// Takes one parameter: the object to update, which will be a paddle or a ball
//
// NOTE how this relies on the object passed in have .x, .y, .vx, and .vy
// properties, which is true of both the two paddles and the ball
function updatePosition(object) {
  object.x += object.vx;
  object.y += object.vy;
}

// handleBallWallCollision()
//
// Checks if the ball has overlapped the upper or lower 'wall' (edge of the screen)
// and is so reverses its vy
function handleBallWallCollision() {

  // Calculate edges of ball for clearer if statement below
  var ballTop = ball.y - ball.size/2;
  var ballBottom = ball.y + ball.size/2;
  var ballLeft = ball.x - ball.size/2;
  var ballRight = ball.x + ball.size/2;

  // Check for ball colliding with top and bottom
  if (ballTop < 0 || ballBottom > height) {
    // If it touched the top or bottom, reverse its vy
    ball.vy = -ball.vy;
    // Play our bouncing sound effect by rewinding and then playing
    beepSFX.currentTime = 0;
    beepSFX.play();
  }
}

// handleBallPaddleCollision(paddle)
//
// Checks if the ball overlaps the specified paddle and if so
// reverses the ball's vx so it bounces
function handleBallPaddleCollision(paddle) {

  // Calculate edges of ball for clearer if statements below
  var ballTop = ball.y - ball.size/2;
  var ballBottom = ball.y + ball.size/2;
  var ballLeft = ball.x - ball.size/2;
  var ballRight = ball.x + ball.size/2;

  // Calculate edges of paddle for clearer if statements below
  var paddleTop = paddle.y - paddle.h/2;
  var paddleBottom = paddle.y + paddle.h/2;
  var paddleLeft = paddle.x - paddle.w/2;
  var paddleRight = paddle.x + paddle.w/2;

  // First check it is in the vertical range of the paddle
  if (ballBottom > paddleTop && ballTop < paddleBottom) {
    // Then check if it is touching the paddle horizontally
    if (ballLeft < paddleRight && ballRight > paddleLeft) {
      // Then the ball is touching the paddle so reverse its vx
      ball.vx = -ball.vx;
      // Play our bouncing sound effect by rewinding and then playing
      beepSFX.currentTime = 0;
      beepSFX.play();
    }
  }
}

// handleBallOffScreen()
//
// Checks if the ball has gone off screen to the left or right
// and moves it back to the centre if so
function handleBallOffScreen() {

  // Calculate edges of ball for clearer if statement below
  var ballLeft = ball.x - ball.size/2;
  var ballRight = ball.x + ball.size/2;

  // Check for ball going off the sides
  if (ballRight < 0 || ballLeft > width) {
    // If it went off either side, reset it to the centre
    var leftScored = false;
    var rightScored = false;
    ball.x = width/2;
    ball.y = height/2;
    // NEW //
    updateScoreRight(ballLeft);
    updateScoreLeft(ballRight);
    // END NEW //

    // NOTE that we don't change its velocity here so it just
    // carries on moving with the same velocity after its
    // position is reset.
    // This is where we would count points etc!
  }
/* /// DEBOUNCING
you need a var to determine whether one can score
if (canscore) {
  canscore is false
  score++
}

when ball is respawned => canscore = true
*/

}

// displayBall()
//
// Draws ball on screen based on its properties
function displayBall() {
  // NEW //
  fill(random(255));
  // END NEW //
  rect(ball.x,ball.y,ball.size,ball.size);
}

// displayPaddle(paddle)
//
// Draws the specified paddle on screen based on its properties
function displayPaddle(paddle) {
  // fill here
  // NEW //
  push();
  fill(paddle.color);
  // END NEW //
  rect(paddle.x,paddle.y,paddle.w,paddle.h);
  pop();
}
// NEW //
// NOTE adding in function that shows player how score increased + adds stuff
function updateScoreRight(ballLeft) {
  //var ballLeft = ball.x - ball.size/2;
  //if (ballLeft < 0) {
  if (ballLeft < 0) {
    rightScore++;
    var rightScored = true;
    ball.speed++
    ball.vx = ball.speed;
    ball.vy = ball.speed;
    console.log(ball.speed, "right");
    }

    if (rightScored) {
      rightPaddle.speed += 2;
      rightPaddle.speed = constrain(rightPaddle.speed,0,15);
      //rightPaddle.vx = constrain(rightPaddle.vx,rightPaddle.speed,17);
      //print(rigthPaddle.vx);
      //rightPaddle.vy = constrain(rightPaddle.vy,rightPaddle.speed,17);
      rightPaddle.color = constrain(rightPaddle.color-rightScore,0,255);
    }


      // NOTE so it looks like that the player who scored first, but
      //didn't make a score a second time keeps loosing -5 to their color,
      //so what might be happening is that every single frame it does it,
  //}
  }
function updateScoreLeft(ballRight) {
  //var ballRight = ball.x + ball.size/2;
  //if (ballRight > width) {

  if (ballRight > width) {
    leftScore++;
    ball.speed++;
    ball.vx = -ball.speed;
    ball.vy = -ball.speed;
    console.log(ball.speed, "left");
    var leftScored = true;

    }
    if (leftScored) {
      leftPaddle.speed += 2;
      //leftPaddle.speed = constrain(leftPaddle.vx,leftPaddle.speed,17);
      //leftPaddle.speed = constrain(leftPaddle.vy,leftPaddle.speed,100);
      leftPaddle.speed = constrain(leftPaddle.speed,0,15);
      leftPaddle.color = constrain(leftPaddle.color - leftScore,0,255);
  }

//}
}

function resetBall() {
  if (ball.speed === 30) {
    ball.speed = 2;
  }
}
// NOTE i just screen wrapped it bc it was getting REALLY annoying when the paddle just vanished
// into nothingness
function handlePaddleWrap(paddle) {
  if (paddle.y < 0 ) {
    paddle.y = height;
  }
  if (paddle.y > height) {
    paddle.y = 0;
  }
}
// END NEW //
