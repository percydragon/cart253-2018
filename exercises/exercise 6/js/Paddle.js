// Paddle
//
// A class that defines how a paddle behaves, including the ability
// to specify the input keys to move it up and down

//NOTE paddle constructor was not commented it out

//Paddle constructor

//NOTE forgot to comment out what you were saying about the paddles

//Sets the properties with the provided arguments or defaults

//NOTE pladdle was written instead of paddle
//NOTE upKey and downKey are reversed, so im unreversing them
function Paddle(x,y,w,h,speed,upKey,downKey) {
  this.x = x;
  this.y = y;
  //NOTE vy and vx are inversed here.
  this.vx = 0;
  this.vy = 0;
  this.w = w;
  this.h = h;
  //NOTE speeed was written instead of speed
  this.speed = speed;
  this.downKey = downKey;
  this.upKey = upKey;
}

// handleInput()
//
// Check if the up or down keys are pressed and update velocity
// appropriately
//NOTE proto was written instead of prototype
Paddle.prototype.handleInput = function() {
  //NOTE both functions are written badly. It is keyIsDown and not keyDown
  //NOTE changed upKey and downKey to this.upKey and this.downKey
  if (keyIsDown(this.upKey)) {
    this.vy = -this.speed;
  }
  else if (keyIsDown(this.downKey)) {
    //NOTE there shouldn't put a minus because you don't want to reverse the speed, so removing that minus
    this.vy = this.speed;
  }
}

// update()
// Update y position based on velocity
// Constrain the resulting position to be within the canvas
Paddle.prototype.update = function() {
  this.y += this.vy;
  //NOTE typos: constraint instead of constrain and hight instead of height
  this.y = constrain(this.y,0,height-this.h);
}

// display()
//
// Draw the paddle as a rectangle on the screen
//NOTE typo: display is written as disploy
//NOTE syntax error: removed extra parenthisis for the function
Paddle.prototype.display = function() {
  //NOTE it's rect and not rectangle
  rect(this.x,this.y,this.w,this.h);
}
