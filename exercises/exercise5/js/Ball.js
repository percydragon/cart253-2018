// Ball
//
// A class to define how a ball behaves. Including bouncing on the top
// and bottom edges of the canvas, going off the left and right sides,
// and bouncing off paddles.

// Ball constructor
//
// Sets the properties with the provided arguments
function Ball(x,y,vx,vy,size,speed) {
  this.x = x;
  this.y = y;
  this.vx = vx;
  this.vy = vy;
  this.size = size;
  this.speed = speed;
}

// update()
//
// Moves according to velocity, constrains y to be on screen,
// checks for bouncing on upper or lower edgs, checks for going
// off left or right side.
Ball.prototype.update = function () {
  // Update position with velocity
  this.x += this.vx;
  this.y += this.vy;

  // Constrain y position to be on screen
  this.y = constrain(this.y,0,height-this.size);

  // Check for touching upper or lower edge and reverse velocity if so
  if (this.y === 0 || this.y + this.size === height) {
    this.vy = -this.vy;
  }
}

// isOffScreen()
//
// Checks if the ball has moved off the screen and, if so, returns true.
// Otherwise it returns false.
Ball.prototype.isOffScreen = function () {
  // Check for going off screen and reset if so
  if (this.x + this.size < 0 || this.x > width) {

    // NEW //
    var ballLeft = this.x - this.size/2;
    var ballRight = this.x + this.size/2;

    var leftScored = false;
    var rightScored = false;
    ball.updateScoreRightBall(ballLeft);
    ball.updateScoreLeftBall(ballRight);
    // END NEW //

    return true;
  }
  else {
    return false;
  }
}

// display()
//
// Draw the ball as a rectangle on the screen
Ball.prototype.display = function () {
  fill(255);
  rect(this.x,this.y,this.size,this.size);
}

// handleCollision(paddle)
//
// Check if this ball overlaps the paddle passed as an argument
// and if so reverse x velocity to bounce
Ball.prototype.handleCollision = function(paddle) {
  // Check if the ball overlaps the paddle on x axis
  if (this.x + this.size > paddle.x && this.x < paddle.x + paddle.w) {
    // Check if the ball overlaps the paddle on y axis
    if (this.y + this.size > paddle.y && this.y < paddle.y + paddle.h) {
      // If so, move ball back to previous position (by subtracting current velocity)
      this.x -= this.vx;
      this.y -= this.vy;
      // Reverse x velocity to bounce
      this.vx = -this.vx;

      //NOTE FOR SHAME THE BEEPS WERE LEFT OUT SO IM ADDING THEM IN
      // M Y S E L F

      // NEW //
      beepSFX.currentTime = 0;
      beepSFX.play();
      // END NEW //
    }
  }
}

// NEW //
// NOTE im adding in wall collision for the BEEPS

Ball.prototype.handleWallCollision = function() {
  var ballTop = this.y - this.size/2;
  var ballBottom = this.y + this.size/2;

  // Check for ball colliding with top and bottom
  if (ballTop < 0 || ballBottom > height) {
    // If it touched the top or bottom, reverse its vy
    this.vy = -this.vy;
    // Play our bouncing sound effect by rewinding and then playing
    beepSFX.currentTime = 0;
    beepSFX.play();
 }
}

// END NEW //


// NEW //

//NOTE we are attempting to update the ball score with OOP

Ball.prototype.updateScoreLeftBall = function(ballRight) {
  var ballRight = this.x + this.size/2;

  if (ballRight > width) {
    leftScore++;
    this.speed++;
    this.vx = -this.speed;
    this.vy = -this.speed;
    console.log(this.speed, "left");
    var leftScored = true;

    }
}

Ball.prototype.updateScoreRightBall = function(ballLeft) {
  var ballLeft = this.x - this.size/2;
  if (ballLeft < 0) {
    rightScore++;
    var rightScored = true;
    this.speed++
    this.vx = this.speed;
    this.vy = this.speed;
    console.log(this.speed, "right");
    }
}

// END NEW //

// NEW //
Ball.prototype.resetBallSpeed = function() {
  if (this.speed === 30) {
    this.speed = 2;
}
}

// END NEW //

// reset()
//
// Set position back to the middle of the screen
Ball.prototype.reset = function () {
  this.x = width/2;
  this.y = height/2;
}
