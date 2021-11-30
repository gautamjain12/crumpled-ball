
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper=new Paper(100,600,10);

	ground=new Ground(400,680,800,20);

	leftSide=new Dustbin(550,620,20,100);
	rightside=new Dustbin(610,660,100,20);
	middle=new Dustbin(670,620,20,100);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper.display();
  ground.display();
  leftSide.display();
  rightside.display();
  middle.display();
  
 
}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.postion,{x:15,y:-15})
	}
}



