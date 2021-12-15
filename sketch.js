var PLAY = 1
var END = 0
var score = 0
var gameState = PLAY
var track 
var Mycar,car2
var carImg,car2Img
var trackImg 
var car3,car4,car5,car6,car7
var restartImg,gameoverImg
var gameover
var restart  


function preload(){

carImg = loadImage("images/f2.png");
car2Img = loadImage("ford.png");
trackImg = loadImage("ttt.jpg");
restartImg = loadImage("restart.png");
gameoverImg = loadImage("gameover.png");

}

function setup(){
 createCanvas(1250,800); 



track = createSprite(500,300);
track.addImage(trackImg)
track.scale = 1.5;

gameover = createSprite(400,200);
gameover.addImage(gameoverImg)

restart = createSprite(400,500);
restart.addImage(restartImg)

Mycar = createSprite(600,600,25,20);
Mycar.addImage(carImg)
Mycar.scale = 0.5;

car2Group= new Group();
car3Group= new Group();
car4Group= new Group();
car5Group= new Group();
//car6Group= new Group();
//car7Group= new Group();
}

function draw(){
background(0);

if(gameState===PLAY){

if(keyDown(UP_ARROW)){
    Mycar.velocityY = -6
  }
  if(keyDown(DOWN_ARROW)){
    Mycar.velocityY = 6
  }
if(keyDown(RIGHT_ARROW)){
    Mycar.velocityX = 6
}
if(keyDown(LEFT_ARROW)){
    Mycar.velocityX = -6
}

spawnCar2();
spawnCar3();
spawnCar4();
spawnCar5();
//spawnCar6();
//spawnCar7();

}

if(Mycar.isTouching(car2Group)||Mycar.isTouching(car3Group)||Mycar.isTouching(car4Group)||Mycar.isTouching(car5Group)){
    gameState = END 


}
gameover.visible = false
restart.visible = false
if(gameState===END){

 
    
    car2Group.destroyEach();
    car3Group.destroyEach();
    car4Group.destroyEach();
    car5Group.destroyEach();
   // car6Group.destroyEach();
   // car7Group.destroyEach();

   

    Mycar.visible = false

    gameover.visible = true
    restart.visible = true

    score = 0;

    if(mousePressedOver(restart)){
   reset();

    }
}
    drawSprites();

  

    stroke("black");
    textSize(20);
    fill("white");
    score = score + Math.round(getFrameRate()/60);
     text("Score "+ score , 100,50);

}
function reset (){
    gameState = PLAY;
    gameover.visible = false
    restart.visible = false
    Mycar.visible = true
    Mycar.x = 600;
    Mycar.y = 600;
    
}
function spawnCar2(){
    if(frameCount%320===0){
        car2 = createSprite(200,800,25,20); 
        car2.addImage(car2Img)
        car2.scale = .5;
        car2.velocityY = -10;
        car2.lifetime = 300;
        car2Group.add(car2);
        
    
    }
}
function spawnCar3(){
    if(frameCount%350===0){
        car3 = createSprite(120,200,25,20); 
        car3.addImage(car2Img)
        car3.scale = .5;
        car3.velocityY = -10;
        car3.lifetime = 300;
        car3Group.add(car3);
        
    }
}
function spawnCar4(){
    if(frameCount%280===0){
        car4 = createSprite(120,120,25,20); 
        car4.addImage(car2Img)
        car4.scale = .5;
        car4.velocityX = 10;
        car4.lifetime = 300;
        car4Group.add(car4);
    }
}
function spawnCar5(){
    if(frameCount%220===0){
        car5 = createSprite(120,250,25,20); 
        car5.addImage(car2Img)
        car5.scale = .5;
        car5.velocityY = 10;
        car5.lifetime = 300;
        car5Group.add(car5);
    }
}
/*
function spawnCar6(){
    if(frameCount%300===0){
        car6 = createSprite(650,250,25,20); 
        car6.addImage(car2Img)
        car6.scale = .5;
        car6.velocityY = 10;
        car6.lifetime = 300;
        car6Group.add(car6);
    }
}
/*
function spawnCar7(){
    if(frameCount%210===0){
        car7 = createSprite(400,400,25,20); 
        car7.addImage(car2Img)
        car7.scale = .5;
        car7.velocityY = -10;
        car7.lifetime = 300;
        car7Group.add(car7);
    }
}
*/
