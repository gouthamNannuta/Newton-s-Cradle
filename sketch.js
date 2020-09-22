
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5;
var roof;
var chain;
var bobDiameter,bobDiameter1;

function preload()
{
	
}

function setup() {
	createCanvas(800,700);
    

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof=new Log(400,100,400,30);

	bobObject1=new Bob(500,300,30);
	bobObject2=new Bob(450,300,30);
	bobObject3=new Bob(400,300,30);
	bobObject4=new Bob(350,300,30);
	bobObject5=new Bob(300,300,30);
	bobDiameter=00;
	Engine.run(engine);
	 
	chain1=new Rope(bobObject1.body,roof.body,-bobDiameter+120,0);
	chain2=new Rope(bobObject2.body,roof.body,-bobDiameter+60,0);
	chain3=new Rope(bobObject3.body,roof.body,-bobDiameter,0);
	chain4=new Rope(bobObject4.body,roof.body,-bobDiameter-60,0);
	chain5=new Rope(bobObject5.body,roof.body,-bobDiameter-120,0);
}


function draw() {
  rectMode(CENTER);
  background(192);
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  roof.display();
  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();


  drawSprites();
 
}
function keyPressed(){
	if (keyCode === UP_ARROW) {
		// Look at the hints in the document and understand how to make the package body fall only on
        Matter.Body.setPosition(bobObject5.body,{x:100,y:80})
		bobObject5.velocityY=4;

	
	  }
}




