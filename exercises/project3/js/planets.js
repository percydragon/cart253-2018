// planet
// CREATING A PLANET WITH OOP
// LET'S GO

function Planet (x,y,z,size) {
  this.x = x;
  this.y = y;
  this.z = z;
  this.size = size;
}
//creating the display for the planets to show what they look like
Planet.prototype.display = function() {
  push();
  translate(this.x,0,this.z);
  noStroke();
  fill(random(255),random(255),random(255));
  sphere(this.size);
  pop();
}
