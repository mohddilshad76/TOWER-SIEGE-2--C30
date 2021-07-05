const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,polygon,ground,backgroundImg;
var stand1,stand1Img,stand2,stand2Img;
var car,carImage,carSound,hornSound,carCrash,carEnginStop;
var car1,car1Image,car1Sound;
var car2,car2Image;
var polygon;
var slingShot;
var polygon_img;
var bracker;


function preload(){
  polygon_img=loadImage("polygon.png");
  backgroundImg=loadImage("bg.png");
  carImage=loadImage("truck.png")
  car1Image=loadImage("m1.png");
  hornSound=loadSound("horn.wav")
  carSound=loadSound("truckRunning.wav")
  car1Sound=loadSound("mtruck.mp3");
  car2Image=loadImage("am.png")

}
function setup() {
  createCanvas(1500,600);
  engine = Engine.create();
  world = engine.world;
 
  ground = new Ground();
  stand1 = new Stand(390,300,250,10);
  stand2 = new Stand(700,200,200,10);
 
  //level one
  block1 = new Block(300,275,30,40);
  block2 = new Block(330,275,30,40);
  block3 = new Block(360,275,30,40);
  block4 = new Block(390,275,30,40);
  block5 = new Block(420,275,30,40);
  block6 = new Block(450,275,30,40);
  block7 = new Block(480,275,30,40);
  //level two
  block8 = new Block(330,235,30,40);
  block9 = new Block(360,235,30,40);
  block10 = new Block(390,235,30,40);
  block11 = new Block(420,235,30,40);
  block12 = new Block(450,235,30,40);
  //level three
  block13 = new Block(360,195,30,40);
  block14 = new Block(390,195,30,40);
  block15 = new Block(420,195,30,40);
  //top
  block16 = new Block(390,155,30,40);

  //set 2 for second stand
  //level one
  blocks1 = new Block(640,175,30,40);
  blocks2 = new Block(670,175,30,40);
  blocks3 = new Block(700,175,30,40);
  blocks4 = new Block(730,175,30,40);
  blocks5 = new Block(760,175,30,40);
  //level two
  blocks6 = new Block(670,135,30,40);
  blocks7 = new Block(700,135,30,40);
  blocks8 = new Block(730,135,30,40);
  //top
  blocks9 = new Block(700,95,30,40);

  //polygon holder with slings
  polygon = Bodies.circle(50,200,20);
  World.add(world,polygon);
  
  slingShot = new Slingshot(this.polygon,{x:100,y:200});




  car = createSprite(1630,525,40,50);
  car.addImage(carImage);
  car.scale=0.3;
  car.lifetime = 320;
  car.velocityX = -5;
  carSound.play();


  
  car1 = createSprite(10,525,40,50);
  car1.addImage(car1Image);
  //car1Sound("false")
  car1.scale=0.3;
  car1.lifetime = 320;
  car1.velocityX = 4.5;
   

  car2 = createSprite(-2000,520,42,52);
 // car2.addImage(car2Image);
  car2.addImage(car2Image);
  car2.scale=0.7;
  car2.lifetime = 600;
  car2.velocityX = 7;


  bracker = createSprite(50,540,10,30)



  Engine.run(engine);  
}
function draw() {
  background(backgroundImg); 

 
 

 
  Engine.update(engine);

  if(car.isTouching(car1)){
    car.collide(car1);
    hornSound.play();
    
  }

  if(car1.isTouching(bracker)){
    car1Sound.play();
  }
  
  textSize(20);
  fill("lightyellow");
  text("Drag the polygon to destroy the blocks",300,30);
  textSize(10);
  text("Press Space to get a second Chance to Play!!",650 ,350);

  car.display();
  car1.display();
  car2.display();
  bracker.display();

  ground.display();
  stand1.display();
  stand2.display();
  strokeWeight(2);
  stroke(15);
  fill("skyblue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  fill("pink");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  fill("turquoise");
  block13.display();
  block14.display();
  block15.display();
  fill("grey");
  block16.display();
  fill("skyblue");
  blocks1.display();
  blocks2.display();
  blocks3.display();
  blocks4.display();
  blocks5.display();
  fill("turquoise");
  blocks6.display();
  blocks7.display();
  blocks8.display();
  fill("pink")
  blocks9.display();
  fill("gold");
  imageMode(CENTER)
  image(polygon_img ,polygon.position.x,polygon.position.y,40,40);

  slingShot.display();
  
}
function mouseDragged(){
  Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  slingShot.fly();
}
function keyPressed(){
  if(keyCode===32){
     slingShot.attach(this.polygon);
  }
}