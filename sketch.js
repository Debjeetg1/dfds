
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var  box1, box2 , box3;
var paper;
var ground;

function setup() {
	createCanvas(1500, 600);


	engine = Engine.create();
	world = engine.world;

	box1 = new DustBin(1200 , 550 , 200 , 20);
	box2 = new DustBin(1290 , 510 , 20 , 100);
	box3 = new DustBin(1090 , 510 , 20 , 100);

	paper = new PaperBall(100 , 565, 30);

	ground = new Ground(750 , 570);

	Engine.run(engine)
  
}


function draw() {
  
  background(0);
  
  box1.display();
  box2.display();
  box3.display();

  ground.display();

  paper.display();
 
 
 
	keyPressed();
	Engine.update(engine)
 
}
  
 
function keyPressed()
{
  if(keyCode === UP_ARROW)
  {
	  Matter.Body.applyForce(paper.body , paper.body.position , { x:10 , y:-15 })
	  Engine.update(engine)
  }

  
}



