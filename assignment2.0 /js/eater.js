class Eater extends Agent {
  constructor (x,y,size,sizeLoss) {
    super(x,y,size,'#123456');
    this.maxSize = size;
    this.sizeLoss = sizeLoss;
  }

  update() {
    this.x = mouseX;
    this.y = mouseY;

    this.size = constrain(this.size - this.sizeLoss,0,this.maxSize);

    if (this.size === 0) {
      this.alive = false;
    }
  }

//other = dummy variable
//food becomes the variable because we put it in the parenthesis
  eat(other) {
    if (!this.alive) {
      return;
    }
    this.size = constrain(this.size + other.size,0,this.maxSize);
    other.reset();
  }
}
