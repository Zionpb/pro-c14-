var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;

var cloud, cloudsGroup, cloudImage;

var obstacleImg1, obstacleImg2, obstacleImg3, obstacleImg4, obstacleImg5, obstacleImg6;

var newImage;

var gamestate, score

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  trex_collided = loadAnimation("trex_collided.png");
  
  groundImage = loadImage("ground2.png");
  
  cloudImage = loadImage("cloud.png");
 obstacleImg1 = loadImage("obstacle1.png");
 obstacleImg2 = loadImage("obstacle2.png");
 obstacleImg3 = loadImage("obstacle3.png");
 obstacleImg4 = loadImage("obstacle4.png");
 obstacleImg5 = loadImage("obstacle5.png");
 obstacleImg6 = loadImage("obstacle6.png");

}

function setup() {
  createCanvas(600, 200);

  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  // trex.adicionarAnimação("colidiu",trex_colidiu)
  trex.scale = 0.5;
  
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -4;
  
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  
  console.log("Hello"+ 5)

  gamestate="play";

}

function draw() {
  background(180);
  createobstacles();
  if(gamestate=="play"){
  if(keyDown("space")&& trex.y >= 100) {
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.8
}
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  trex.collide(invisibleGround);
  
  //gerar as nuvens
  spawnClouds();
  
  drawSprites();


function spawnClouds() {
  //escreva o código aqui para gerar as nuvens
  if (frameCount % 60 === 0) {
    cloud = createSprite(600,100,40,10);
    cloud.addImage(cloudImage)
    cloud.y = Math.round(random(10,100))
    cloud.scale = 0.6;
    cloud.velocityX = -3;
  
    
    //atribua tempo de vida à variável
    cloud.lifetime = 200
    
    //ajustar a profundidade
    cloud.depth = trex.depth
    trex.depth = trex.depth + 1;
    }
  }

  
function createobstacles (){
  if(frameCount % 60 === 0){
var obstacle = createSprite(600, 170, 50, 20)
var randomobstacle = Math.round(random(1,6))
obstacle.lifetime = 200;
obstacle.scale=0.4
obstacle.velocityX=-4
switch(randomobstacle){
  case 1: obstacle.addImage(obstacleImg1);
  break;

  case 2: obstacle.addImage(obstacleImg2);
  break;

  case 3: obstacle.addImage(obstacleImg3);
  break;

  case 4: obstacle.addImage(obstacleImg4);
  break;

  case 5: obstacle.addImage(obstacleImg5);
  break;

  case 6: obstacle.addImage(obstacleImg6);
  break;
  default:break;
}
  }
}




  


}

