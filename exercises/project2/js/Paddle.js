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
  this.pc = paddleColours;
  // NEW //
  this.color = this.pc[0];
  // END NEW //
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
Paddle.prototype.display = function() {
  // NEW //
  //NOTE adding in fill w/ this.color so that the paddles change colours appropriately
  // depending on score
  fill(this.color);
  // NEW //
  rect(this.x,this.y,this.w,this.h);
}

// NEW //
//NOTE this function updates the colours of the paddles depending on their score

Paddle.prototype.scoreDisplay = function (score) {
  if (this.pc[score]) {
    this.color = this.pc[score];
  }
  else {
    return;
  }
}

// END NEW //
