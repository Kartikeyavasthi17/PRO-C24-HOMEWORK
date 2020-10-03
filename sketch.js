
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;

var ground;

function preload()
{
	
}

function setup() {
	createCanvas(1200,800);


	engine = Engine.create();
	world = engine.world;
  
    paper =new Paper(200,200,20);

   ground =new Ground(600,700,1200,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  Engine.update(engine);

  paper.display();

  ground.display();

  drawSprites();
 
}

function keyPressed()
{

if(keyCode === UP_ARROW)
{

Matter.Body.applyForce(paper.Body,paper.body.position,{x:85,y:-85});

}

}

