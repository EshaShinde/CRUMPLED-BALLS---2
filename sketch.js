
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground
var base
var side1
var side2
var paper



function setup() {
	createCanvas(1200, 600);

	engine = Engine.create();
	world = engine.world;

    ground = new Ground(600,height,1300,20);

	paperObject=new Paper(200,450,40);
	//paper.addImage(paperImage)

	base = new Dustbin(1000,575 , 200,20)
	//base.shapecolor(225)

	side1 = new Dustbin(910,520,20,90)
	//side1.shapeColor("red")

	side2 = new Dustbin(1090,520,20,90)
	//side2.shapeColor("red")

	

	Engine.run(engine);
  
}


function draw() {
 // rectMode(CENTER);
  Engine.update(engine);
  background(225);

  //function keyPressed(){
	//	if (keyCode === UP_ARROW){

	//		Matter.Body.applyForce(paperObject.Body,paperObject.Body.position,{x: 85, y: 85})
	//	}

  //}

  
  drawSprites();
 
ground.display();
paperObject.display();
base.display();
side1.display();
side2.display();
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:75,y:-75});

	}
}

