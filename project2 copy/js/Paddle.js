// Paddle
//
// A class that defines how a paddle behaves, including the ability
// to specify the input keys to move it up and down

// Paddle constructor
//
// Sets the properties with the provided arguments or defaults
function Paddle(x,y,w,h,speed,downKey,upKey,paddleColours) {
  this.x = x;
  this.y = y;
  this.vx = 0;
  this.vy = 0;
  this.w = w;
  this.h = h;
  this.speed = speed;
  this.downKey = downKey;
  this.upKey = upKey;
  this.colour = paddleColours[0];
}

// handleInput()
//
// Check if the up or down keys are pressed and update velocity
// appropriately
Paddle.prototype.handleInput = function() {
  if (keyIsDown(this.upKey)) {
    this.vy = -this.speed;
  }
  else if (keyIsDown(this.downKey)) {
    this.vy = this.speed;
  }
  else {
    this.vy = 0;
  }
}

// update()
// Update y position based on velocity
// Constrain the resulting position to be within the canvas
Paddle.prototype.update = function() {
  this.y += this.vy;
  this.y = constrain(this.y,0,height-this.h);
}

// display()
//
// Draw the paddle as a rectangle on the screen
Paddle.prototype.display = function(paddleColours) {
  // NEW //
  this.scoreDisplay(paddleColours);
  // END NEW //
  rect(this.x,this.y,this.w,this.h);
}

// NEW //
//NOTE im adding in a function to change the colour of the paddles accourding to the points
Paddle.prototype.scoreDisplay = function(paddleColours) {
  if (scoreLeft) {
    var index = paddleColours.findIndex((elem) => leftPaddle.color == elem )
    if (index < paddleColours.length) {
      leftPaddle.color = paddleColours[index + 1];
    } else {
      leftPaddle.color = paddleColours[index];
    }
  }
  if (scoreRight) {
    var index = paddleColours.findIndex((elem) => rightPaddle.color == elem )
    if (index < paddleColours.length) {
      rightPaddle.color = paddleColours[index + 1];
    } else {
      rightPaddle.color = paddleColours[index];
    }
  }
}
