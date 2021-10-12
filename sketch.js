var ball;
function setup() {
  createCanvas(1000,1000);
  ball= createSprite(200,200,75,100)
}
function draw() 
{
  background(30);
  if(keyDown("up"))
  {
    ball.y+= -0.5

  }
  if(keyDown("down"))
  {
    ball.y-= -0.5
  }
  drawSprites()

}




