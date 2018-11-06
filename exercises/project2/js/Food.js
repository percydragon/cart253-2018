// Food
//
// A class that acts as food for the ball and increases the
// speed of the ball and changes it's colour
//
// Food Constructor

//sets the properties of the argument or the provided default
function Food(x,y,tx,ty,size) {
  this.x = x;
  this.y = y;
  this.tx = tx;
  this.ty = ty;
  this.size = size;
}

//update()
// update the x and y position based on perlin noise
// constrain food to canvas
Food.prototype.update = function() {
  this.x = width * noise(this.tx);
  this.y = height * noise(this.ty);
  this.tx += 0.02;
  this.ty += 0.02;

  this.x = constrain(this.x,0,width);
  this.y = constrain(this.y,0,height);
}

//display()
//draw the food as a rectangle on the screen
Food.prototype.display = function() {
  var foodColor = color(map(sin(angle),-1,1,0,255),map(cos(angle),-1,1,0,255,0),100);
  fill(foodColor);
  rect(this.x,this.y,this.size,this.size);
  angle += 0.07;
}

//ballSpeedIncrease()
// increases the speed of the ball if intercepts with the food
Food.prototype.ballSpeedIncrease = function() {
  if (this.x + this.size > ball.x && this.x < ball.x + ball.size) {
    // Check if the ball overlaps the paddle on y axis
    if (this.y + this.size > ball.y && this.y < ball.y + ball.size) {
    console.log(ball.vx, ball.vy);
    ball.vx++;
   }
  }
}
