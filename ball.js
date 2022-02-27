class Ball{
  constructor(r,pos){
  this.pos = createVector(width / 2, 220);
  this.radius = r;
  this.direction = createVector(1,-2);
  this.speed = 5;
  this.paddleCollide = false;
  this.image = loadImage ("images/ball.png")

  this.display = function() {
    ellipseMode (CENTER);
    ellipse (this.pos.x, this.pos.y, this.r, this.r);
    imageMode (CENTER);
    image(this.image, this.pos.x, this.pos.y, 55, 55);
  }

}
}
