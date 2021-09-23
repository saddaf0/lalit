var spongebob;
var obstacle;
var path;
var END = 0;
var PLAY = 1;
var gameState = PLAY;
var distance = 0;
var distance = 0;
var gameOver, restart;


function preload(){
spongebobIMG = loadImage("spongebob.png");
pathIMG = loadImage("path.png")
obstacleIMG = loadImage("obstacle.png")
}

function setup() {
 createCanvas(1200,400);

 spongebob = createSprite(200,200,50,50);
 spongebob.scale = 0.3;
 spongebob.addImage(spongebobIMG);

 path = createSprite(100,200)
 path.addImage(pathIMG)
 path.velocityX = -5


obstacle =createSprite(1100,Math.round(random(50, 250)));
obstacle.scale =0.06;
obstacle.addImage(obstacleIMG)
}

function draw() {
 
    
    
        distance = distance + Math.round(getFrameRate()/50);
        path.velocityX = -(6 + 2*distance/150);
       
    


    if(path.x < 0 ){
        path.x = width/2;
      }

      obstacle.setLifetime=(-1);
      
      if(obstacle.isTouching(spongebob)){
          gameState = END;
          sponggebob.velocityX = 0;
      }

drawSprites()

    }

