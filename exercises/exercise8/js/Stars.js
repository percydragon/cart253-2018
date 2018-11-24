//babyStars
// im creating dots
// and stuff
// im sorry my brain is dead

function Star(x,y,size) {
  this.x = x;
  this.y = y;
  this.size = size;
}

Star.prototype.display = function () {
  //oscillation effect
  //var growth = sin(this.angle) * (24/2);
  //stars displaying as rectangles
  rect(this.x,this.y,this.size,this.size);
  fill(255);
  noStroke();
  //mapping the movement to milliseconds
  this.x += map(noise(millis()) / 2, 0, 1, -1, 1);
  this.y += map(noise(millis()) / 2, 0, 1, -1, 1);
}
