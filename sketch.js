const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world;
var ground;
var ball;
var slab;
var ballg;
var ballimg,hitsound;
function preLoad(){
ballimg=loadImage("sprites/ball.jpg");
hitsound=loadSound("sprites/hit.mp3");
}
function setup() {
  createCanvas(800,500);
  engine=Engine.create();
  world=engine.world;
  ground=new Ground(0,480,800,20);
 //for(i=0;i<10;i++){
 // ball=new Ball(random(100,500),10,10);
 // slab=new Slab(200,430,70,20);
 slab=createSprite(200,430,70,20);
 ballg=new Group();
 
}

function draw() {
  background(255,255,255);  
  Engine.update(engine);
  ground.display();
  //ball.display();
 // slab.display();
// move();
if (slab.isTouching(ballg)){
  hitsound.play();
  ball.visible=false;

}
 hello();
 drawSprites();
}
function keyPressed(){
  if(keyCode===RIGHT_ARROW){
    slab.x=slab.x+50;
  }
  if(keyCode===LEFT_ARROW){
    slab.x=slab.x-50;
  }
}
/*function move(){
  if(ball.isTouching(slab)){
    ball.visible=false;
  }
}*/
function hello(){
  if(frameCount%60===0){
    ball=createSprite(random(100,500),10,10);
    //ball.addImage("ballpick",ballimg);
    ball.velocityY=10;
    ballg.add(ball);

    

  }
}
