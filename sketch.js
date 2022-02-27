

var paddle, paddleImg, ball, ballImg, brick, brickImg;
var lives = 3;
var score = 0;
var gameState = 0;
var i;
var brick, brickGroup;


function preload() {
  paddleImg = loadImage ("images/paddle 2.png");
  ballImg = loadImage ("images/ball.png");
  brickImg = loadImage ("images/brickk.png");
}

function setup() {
  createCanvas(1200, 500);

  paddle = new Paddle(160,20);
  ball = new Ball (40);
  border1 = new Border (1,1,1,500);
  border3 = new Border (1198,1,1,500);
  border4 = new Border (1,499,1200,1);

}

function draw() {
  background(200, 200, 200);

  //detectCollision();


  textSize (30);
    fill ("white");
    text("Press Enter to Start the game", 390, 300);

ball.display(); 
paddle.display();
//border1.display();
//border3.display();
//border4.display();

drawSprites();

  textSize (20);
  fill ("white");
  text ("Score: "+ score, 10,30);

  textSize (20);
  fill ("white");
  text ("Lives: "+ lives, 10,60);
}