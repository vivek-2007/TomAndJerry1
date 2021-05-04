var cat ,catImg1 ,catImg2 ,catImg3;
var garden ,gardenImg;
var mouse ,mouseImg1 ,mouseImg2 ,mouseImg3;

function preload() {
    //load the images here
    gardenImg = loadImage("garden.png");
    mouseImg = loadImage("mouse1.png");
    catImg = loadImage("cat1.png");
    catImg2 = loadAnimation("cat2.png","cat3.png");
    mouseImg2 = loadAnimation("mouse2.png","mouse3.png");
    mouseImg3 = loadImage("mouse4.png");
    catImg3 = loadImage("cat4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    garden = createSprite(500,400);
    garden.addImage("garden", gardenImg);
    
    mouse = createSprite(200,600);
   mouse.addImage("mouse",mouseImg);
    mouse.scale = 0.1;

   cat = createSprite(800,600);
    cat.addImage("cat", catImg);
    cat.scale = 0.15;


    cat.setCollider("circle",0 ,0 ,500);
    mouse.setCollider("circle",0 ,0 ,500);
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
if(cat.x-mouse.x<cat.width/2+mouse.width/2){
    cat.addAnimation("catMoving",catImg3);
    cat.changeAnimation("catMoving",catImg3);
    mouse.addAnimation("mouse",mouseImg3);
    mouse.changeAnimation("mouse",mouseImg3);
}
   
      keyPressed();
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyDown("left_arrow")){
    cat.x = cat.x-8;
    cat.addAnimation("catMoving",catImg2);
    cat.changeAnimation("catMoving",catImg2);
    mouse.addAnimation("mouse",mouseImg2);
    mouse.changeAnimation("mouse",mouseImg2);
}

if(keyDown("right_arrow")){
    cat.x = cat.x+8;
    cat.addAnimation("catMoving",catImg2);
    cat.changeAnimation("catMoving",catImg2);
    mouse.addAnimation("mouse",mouseImg2);
    mouse.changeAnimation("mouse",mouseImg2);
}
  
}
