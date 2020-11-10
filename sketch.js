function setup() {
  createCanvas(800,400);
  fixedrect=createSprite(200, 200, 50, 80);
  movingrect=createSprite(200, 200, 70, 40);
  fixedrect.shapeColor="green";
  movingrect.shapeColor="green";

  object1=createSprite(100,100,50,50);
  object1.shapeColor="blue";
  object2=createSprite(200,100,50,50);
  object2.shapeColor="blue";

  fixedrect.velocityY=-3;
  object2.velocityY=3;
}

function draw() {
  background(0);
  movingrect.x=mouseX;
  movingrect.y=mouseY;
 if(isTouching(movingrect,object1)){
  object1.shapeColor="yellow";
  movingrect.shapeColor="yellow";
 }
 else{
  object1.shapeColor="blue";
  movingrect.shapeColor="green";
 }
 
  bounceOff(object2,fixedrect);
  drawSprites();
}

