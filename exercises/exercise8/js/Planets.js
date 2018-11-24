// planet
// CREATING A PLANET WITH OOP
// LET'S GO

function Planet (x,y,size) {
  this.x = x;
  this.y = y;
  this.size = size;

}
//creating the display for the planets to show what they look like
//well actually they're 'stars' but im just copy-pasting code from ex7 bc
//well im lazy and didn't want to make another file?
//actually no i tried to intergrate 2d and 3d together
//it didn't exactly go as planned
//so here's this.

//display()
//we're displaying the stars
//btw epilepsy tw
//bc speed of growth increases
Planet.prototype.display = function() {
  push();
  noStroke();
  //i wanted to randomize the colours....
  //it didn't have the intended effect, but it's still visual interesting
  //though again epilepsy warning
  fill(random(255),random(255),random(255));
  angle += 0.05;
  //instead of having it in the script, i decided to put the growth here, to see if i could do it
  //i can
  //i am god
  //but also i just vaguely copy-pasted the code ofr oscillation 
  var growth = sin(angle) * (this.size/2);
  ellipse(this.x,this.y,this.size + growth);
  pop();
}
