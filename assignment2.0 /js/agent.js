class Agent {
  constructor (x,y,size,c,alive) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.c = c;
    this.alive = true;
  }

  display() {
    if (!this.alive) {
      return
    }

    push();
    noCursor();
    noStroke();
    fill(this.c);
    ellipse(this.x,this.y,this.size,this.size);
    pop();
  }

  update() {
    //nothing goes here yet
  }

  collide(other) {
    if (!this.alive) {
      return false
    }

    let d = dist(other.x,other.y,this.x,this.y);
    if (d < other.size/2 + this.size/2) {
      return true;
    }
    else {
      return false;
    }
  }


}
