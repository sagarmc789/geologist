
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var hammer;
var ground;
var paper;
var stone;
var rubber;
var iron;





function preload()
{
	
}

function setup() {
	createCanvas(800, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
hammer=new Hammer(200,200)

ground=new Ground(400,750,800,50)
	
paper=new Paper(200,700,80,120)

stone=new Stone(300,700,60,50)

rubber=new Rubber(400,700,20)

iron=new Iron(500,700,70,50)

Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("cyan");
  
    Engine.update(engine);
  
	hammer.display();
	ground.display();
	paper.display();
	stone.display();
	rubber.display();
	iron.display();
	

	circle(400, 720, 15);  
	circle(410, 720, 15);  
	circle(390, 720, 15);  
	circle(370, 720, 15);  
	circle(330, 720, 15);  
	circle(100, 720, 15);  
	circle(150, 720, 15);  
	circle(700, 720, 15);  
 
	fill("darkblue")
	circle(750, 700, 50);  

	drawSprites();
 
}



