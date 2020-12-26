var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"
var rect;
var bullet;
var score;
var rect3;
var bulletImage;
var bballon;
var bballonImage;
var ballon1;
var ballon2;
var ballon3;
var ballon4;
var yellowballonImage;
var redballonImage;
var ballon5;
var ballon6;
var rect5;
var jokerImage;
var ballon7;
var ballon8;
var ballon9;
var ballon10;
var ballon11;
var ballon12;
var ballon13;
var ballon14;



function preload(){
  towerImg = loadImage("usegwallpaper.jpg");
  doorImg = loadImage("usedoor.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("scommander.png");
  bulletImage= loadImage("usearrow.png")
bballonImage=loadImage("rbballon.png")
yellowballonImage= loadImage("useyballon.png")
redballonImage= loadImage("userballon.png")
jokerImage= loadImage("rjoker.png")
  //spookySound = loadSound("spooky.wav");
}

function setup(){
  createCanvas(windowWidth,windowHeight);
  //spookySound.loop();
   //ghost.addImage("ghost", ghostImg);
  
  tower=createSprite(windowWidth-410,windowHeight);
  tower.addImage("tower", towerImg);
  //tower.scale=.8
  
  ghost=createSprite(200,200,50,50);
  ghost.addImage("ghost",ghostImg);
  ghost.scale=.42;
  
  rect=createSprite(200,400,4000,1000)
   rect.visible=false;
   //rect.shapeColor="blue"
bullet=createSprite(200,200,15,5)
bullet.addImage("bullet", bulletImage)
bullet.scale=.3
//bullet.shapeColor="yellow"
/*bballon=createSprite(880,200)
bballon.addImage("bballon",bballonImage)
bballon.scale=.2

ballon1=createSprite(880,-100)
ballon1.addImage("yellowballon",yellowballonImage)
ballon1.scale=.3

//rect5=createSprite(100,500,100,100)

ballon2=createSprite(680,-350)
ballon2.addImage("redballon",redballonImage)
ballon2.scale=.4

ballon3=createSprite(580,-450)
ballon3.addImage("bballon",bballonImage)
ballon3.scale=.2

ballon4=createSprite(980,-700)
ballon4.addImage("yellowballon",yellowballonImage)
ballon4.scale=.24

ballon5=createSprite(1080,-850)
ballon5.addImage("redballon",redballonImage)
ballon5.scale=.29

ballon6=createSprite(650,-1050)
ballon6.addImage("bballon",bballonImage)
ballon6.scale=.2

ballon7=createSprite(850,-1250)
ballon7.addImage("yellowballon",yellowballonImage)
ballon7.scale=.2


ballon8=createSprite(550,-1450)
ballon8.addImage("redballon",redballonImage)
ballon8.scale=.2*/

  tower.velocityY=5;
  
  doorsGroup=new Group();
  climbersGroup=new Group();
  
  invisibleBlockGroup=new Group();
  score=0
}

function draw(){
  background(250);
  if(keyDown("space")){
  bullet.velocityX=10
  }
  if(keyDown("space")){
    bullet.x=ghost.x
  }
  if(score>1){
    tower.velocityY=6;
  }
  if(score>3){
    tower.velocityY=8;
  }
  if(score>6){
    tower.velocityY=10;
  }
  /*if(keyDown("shift")){
    score=200
  }
  if(score>199){
    alert("gameover")
    /*gameState="play"
    ghost.x=200
    ghost.y=200

  }*/

   
  bullet.setCollider("rectangle",0,0,0,bullet.width/6);
  bullet.debug=false;

  if(gameState==="play"){
    if(keyDown("space")){
      bullet.velocityX=10
      }
      if(keyDown("space")){
        bullet.x=ghost.x
      }
      if(score>1){
        tower.velocityY=6;
      }
      if(score>3){
        tower.velocityY=8;
      }
      if(score>6){
        tower.velocityY=12;
      }
    /*if(bullet.isTouching(bballon)){
      score=score+1
    }
    if(bullet.isTouching(ballon1)){
      score=score+1
    }
    if(bullet.isTouching(ballon2)){
      score=score+1
    }
    if(bullet.isTouching(ballon3)){
      score=score+1
    }
    if(bullet.isTouching(ballon4)){
      score=score+1
    }
    if(bullet.isTouching(ballon5)){
      score=score+1
    }
    if(bullet.isTouching(ballon6)){
      score=score+1
    }
    if(bullet.isTouching(ballon7)){
      score=score+1
    }
    if(bullet.isTouching(ballon8)){
      score=score+1
    }*/
    //text("Coins:"+score,1000,100);
    if(score>6){
    ghost.scale=.6
    }

  
 if(tower.y>400){
 tower.y=300;
 }
 /*bballon.velocityY=1;
 ballon1.velocityY=1.5;
 ballon2.velocityY=1.5;
 ballon3.velocityY=1.8;
 ballon4.velocityY=1.8;
 ballon5.velocityY=1.8;
 ballon6.velocityY=1.9;
 ballon7.velocityY=2.1;
 ballon8.velocityY=2.1;*/



//if(bullet.isTouching(bballon)){
  //bballon.x=-200;
  //bballon.y=-200;
//}
/*if(bullet.isTouching(ballon1)){
  ballon1.x=-200;
  ballon1.y=-200;
}
if(bullet.isTouching(ballon2)){
  ballon2.x=-200;
  ballon2.y=-200;
}
if(bullet.isTouching(ballon3)){
  ballon3.x=-200;
  ballon3.y=-200;
}
if(bullet.isTouching(ballon4)){
  ballon4.x=-200;
  ballon4.y=-200;
}
if(bullet.isTouching(ballon5)){
  ballon5.x=-200;
  ballon5.y=-200;
}
if(bullet.isTouching(ballon6)){
  ballon6.x=-200;
  ballon6.y=-200;
}
if(bullet.isTouching(ballon7)){
  ballon7.x=-200;
  ballon7.y=-200;
}
if(bullet.isTouching(ballon8)){
  ballon8.x=-200;
  ballon8.y=-200;
}*/


if(touches.length > 0) {
  ghost.velocityY = -7;
   touches = [];
}
if(touches.length > 0) {
  bullet.velocityX = 10;
   touches = [];
}
  if(mousePressedOver(rect)||keyDown("w")){
     ghost.velocityY=-7;
     }
  if(keyDown("a")){
     ghost.x=ghost.x-5;
     }
  if(keyDown("d")){
     ghost.x=ghost.x+5;
     }
  ghost.velocityY=ghost.velocityY+.3;
  
    if(climbersGroup.isTouching(ghost)){
      ghost.velocityY=0
      
    }

  
  if(invisibleBlockGroup.isTouching(ghost)|| ghost.y>600){
      ghost.destroy();
    gameState="end";
      
    }
    bullet.y=ghost.y
    //bullet.x=ghost.x
    spawnDoors();
  
    spawnBallons()

    drawSprites();
}
  if(gameState==="end"){
    background("blue")
    textSize(80);
    fill("black")
    text("Gameover- Reload The game To play",11,300);
    fill("yellow")
    textSize(36)
    text("Coins:"+score,1000,100);
   
  }
}
  
  
function spawnDoors() {
  //write code here to spawn the doors in the tower
  if(frameCount%200===0){
    door=createSprite(210,-50);
    door.addImage("door",doorImg)
    door.scale=.3
    door.velocityY=1.8
    door.x=Math.round(random(150,400))
    door.lifetime=700
    doorsGroup.add(door);
    
    climber=createSprite(200,10)
    climber.addImage("climber",climberImg);
    climber.velocityY=1.8
    climber.x=door.x;
    
    
    invisibleBlock=createSprite(200,15);
    invisibleBlock.width=climber.width;
    invisibleBlock.height=2;
    invisibleBlock.x=door.x;
    invisibleBlock.velocityY=1.8;
    invisibleBlock.lifetime=700;
    invisibleBlockGroup.add(invisibleBlock);
    
   
    
    climber.lifetime=700
    climbersGroup.add(climber);
    
    ghost.depth=door.depth;
    ghost.depth  +=1
     
     
     }
}
function spawnBallons(){
  if(frameCount%200===0){
    bballon=createSprite(500,10)
    bballon.addImage("bballon",bballonImage);
    bballon.scale=.2
    bballon.velocityY=6
    //climber.x=door.x;
    bballon.x=Math.round(random(500,1000))
    bballon.lifetime=700
    //doorsGroup.add(door);
 }
}
