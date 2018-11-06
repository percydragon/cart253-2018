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

  // NEW //
  if (this.x + this.size < 0) {
    updateScoreRight++;
    scoreRight = true;
    this.soundEffectRight();
    //console.log(updateScoreRight, "right");
    // // NEW //
    rightPaddle.scoreDisplay(updateScoreRight);
    // // END NEW //

  }

  if (this.x > width) {
    updateScoreLeft++;
    scoreLeft = true;
    this.soundEffectLeft();
    leftPaddle.scoreDisplay(updateScoreLeft);
    //console.log(updateScoreLeft, "left");
  }

  // Check for going off screen and reset if so
  if (this.x + this.size < 0 || this.x > width) {
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
    }
  }
}

// NEW //
//soundEffect to indicate the player's score has increased
Ball.prototype.soundEffectRight = function () {
  if (updateScoreRight === 1) {
    onePoint.play();
  }
  if (updateScoreRight === 2) {
    twoPoints.play();
  }
  if (updateScoreRight === 3) {
    threePoints.play();
  }
  if (updateScoreRight === 4) {
    fourPoints.play();
  }
  if (updateScoreRight === 5) {
    fivePoints.play();
  }
  if (updateScoreRight === 6) {
    sixPoints.play();
  }
  if (updateScoreRight === 7) {
    sevenPoints.play();
  }
  if (updateScoreRight === 8) {
    eightPoints.play();
  }
  if (updateScoreRight === 9) {
    ninePoints.play();
  }
  if (updateScoreRight === 10) {
    tenPoints.play();
  }
  if (updateScoreRight === 11) {
    elevenPoints.play();
  }
  if (updateScoreRight === 12) {
    twelvePoints.play();
  }
}

Ball.prototype.soundEffectLeft = function() {
  if (updateScoreLeft === 1) {
    onePoint.play();
  }
  if (updateScoreLeft === 2) {
    twoPoints.play();
  }
  if (updateScoreLeft === 3) {
    threePoints.play();
  }
  if (updateScoreLeft === 4) {
    fourPoints.play();
  }
  if (updateScoreLeft === 5) {
    fivePoints.play();
  }
  if (updateScoreLeft === 6) {
    sixPoints.play();
  }
  if (updateScoreLeft === 7) {
    sevenPoints.play();
  }
  if (updateScoreLeft === 8) {
    eightPoints.play();
  }
  if (updateScoreLeft === 9) {
    ninePoints.play();
  }
  if (updateScoreLeft === 10) {
    tenPoints.play();
  }
  if (updateScoreLeft === 11) {
    elevenPoints.play();
  }
  if (updateScoreLeft === 12) {
    twelvePoints.play();
  }
}


// reset()
//
// Set position back to the middle of the screen
Ball.prototype.reset = function () {
  this.x = width/2;
  this.y = height/2;

  // NEW //
  scoreLeft = false;
  scoreRight = false;
  // END NEW //
}
