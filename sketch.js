
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var helicopter;
var helicopterImg;
var background, backgroundImg;
var boat1, boat1Img;
var boat2, boat2Img;
var firstAid, firstAidImg;
var food, foodImg;
var rope_cutSound

var food_con;
var food_con2;
var aid_con;
var aid_con2;


function preload() {
  helicopterImg = loadImage("helicopter.png");
  backgroundImg = loadImage("bk.png");
  boat1Img = loadImage("boat1.png");
  boat2Img = loadImage("boat2.png");
  firstAidImg = loadImage("first_aid.png");
  foodImg = loadImage("food_baggage.png");

  rope_cutSound = loadSound("rope_cut.mp3");
}


function setup() {
  createCanvas(800,600);

  engine = Engine.create();
  world = engine.world;

  helicopter = Bodies.rectangle(400,70,10,10,{isStatic:true});
  World.add(world,helicopter);
  
  
}


function draw() 
{
  background(51);
  Engine.update(engine);

  push();
  imageMode(CENTER);
  image(backgroundImg,400,300,800,600);
  image(helicopterImg,helicopter.position.x, helicopter.position.y,125,110);
  pop();
  
  if(keyDown == LEFT_ARROW){
    helicopterImg.x = helicopterImg.x + 5;
  }
}

