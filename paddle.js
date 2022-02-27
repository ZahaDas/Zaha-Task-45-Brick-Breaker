class Paddle{
constructor(w,h,pos){
  this.width = w;
  this.height = h;
  this.pos = createVector(width / 2, 450);
  this.image = loadImage ("images/paddle 2.png")


  this.display = function() {
    rectMode (CENTER);
    rect(this.pos.x, this.pos.y, this.width, this.height);
    imageMode (CENTER);
    image(this.image, this.pos.x, this.pos.y, 190, 50);
  }


}
}