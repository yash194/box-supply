var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine,world;
var box1,box2,box3,box4,box5;
function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	engine = Engine.create();
	world = engine.world;

	createCanvas(800, 700);
	rectMode(CENTER);
	box3=new Box(400,650,220,19);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

   
	
	box1=new Box(280,600,30,130);
	box2=new Box(507,600,30,130);

  box4=createSprite(395,640,220,15);
 box4.shapeColor=("red");
  box4=Bodies.rectangle(400,630,160,15,{isStatic:true});
  
  World.add(world,box4);

  box5=createSprite(395,650,220,15);
  box5.shapeColor=("red");

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

    
	
	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:3, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  box1.display();
  box3.display();
  box2.display();
 collide(packageBody,box3);
  click();
  drawSprites();
 
}

function click() {
 if (keyCode === DOWN_ARROW) {
	// Look at the hints in the document and understand how to make the package body fall only on
	Matter.Body.setStatic(packageBody,false)
	packageBody.restitution=0;
	packageBody.friction=10;
helicopterSprite.velocityX=2;
    
  }
}

function collide(body1,body2){
if (body1.y - body2.y < body2.height/16+ body1.height/16
	) {
	body1.velocityX=0;
}	
}







 
   