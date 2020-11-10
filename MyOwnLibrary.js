function isTouching(gameobject1,gameobject2){
    if(gameobject1.x-gameobject2.x<gameobject1.width/2+gameobject2.width/2 &&
      gameobject2.x-gameobject1.x<gameobject1.width/2+gameobject2.width/2 &&
      gameobject1.y-gameobject2.y<gameobject1.height/2+gameobject2.height/2 &&
      gameobject2.y-gameobject1.y<gameobject1.height/2+gameobject2.height/2 ){
        return true;
         
    }
    else{
     
      return false;
    }
  }
  
  function bounceOff(gameobject3,gameobject4){
    if (gameobject3.x - gameobject4.x < gameobject4.width/2 + gameobject3.width/2
      && gameobject4.x - gameobject3.x < gameobject4.width/2 + gameobject3.width/2) {
        gameobject3.velocityX = gameobject3.velocityX * (-1);
        gameobject4.velocityX = gameobject4.velocityX * (-1);
  }
  if (gameobject4.y - gameobject4.y < gameobject4.height/2 + gameobject3.height/2
    && gameobject4.y - gameobject3.y < gameobject4.height/2 + gameobject3.height/2){
      gameobject3.velocityY = gameobject3.velocityY * (-1);
      gameobject4.velocityY = gameobject4.velocityY * (-1);
  }
  
  
  
  }
  
  