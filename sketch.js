var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;
var cloud, cloudimg; 
var obsticle, obsticle1, obsticle2, obsticle3, obsticle4, obsticle5, obsticle6;

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  trex_collided = loadImage("trex_collided.png");
  cloudimg = loadImage ("cloud.png");
  obsticle1=loadImage ("obstacle1.png")
  obsticle2=loadImage ("obstacle2.png")
  obsticle3=loadImage ("obstacle3.png")
  obsticle4=loadImage ("obstacle4.png")
  obsticle5=loadImage ("obstacle5.png")
  obsticle6=loadImage ("obstacle6.png")
  groundImage = loadImage("ground2.png");
}

function setup() {
  createCanvas(600, 200);
  
  trex = createSprite(50,180,20,50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;          
  
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -2;
  
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
}

function draw() {
  background(0);
  
  if(keyDown("space")) {
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  clouds();
  obsticles(); 
  trex.collide(invisibleGround);
  drawSprites();
}

function clouds(){
  if(frameCount%80===0){
    
  cloud= createSprite(600,130,10,10);
  cloud.addImage (cloudimg); 
  cloud.velocityX= -5;
  cloud.y= Math.round (random(80,130));
  cloud.scale= 0.5;
    
  trex.depth= cloud.depth;
  trex.depth= trex.depth+1;
  }
}

function obsticles(){
   if(frameCount%100===0){
     obsticle= createSprite(600,170,10,10);
     obsticle.velocityX= -5;
     
     var rand = Math.round(random(1,6));
     switch(rand) { 
       case 1: obsticle.addImage(obsticle1); 
       break;
       case 2: obsticle.addImage(obsticle2);
       break;
       case 3: obsticle.addImage(obsticle3);
       break; 
       case 4: obsticle.addImage(obsticle4); 
       break; 
       case 5: obsticle.addImage(obsticle5); 
       break; 
       case 6: obsticle.addImage(obsticle6); 
       break; 
       default: break;
     }
     obsticle.scale= 0.6;
     obsticle.x= Math.round (random(525,600));
   }
}