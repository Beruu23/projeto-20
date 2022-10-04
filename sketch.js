
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var plane;
var block1, block2, block3;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos Aqui.
	var plane_options={
		isStatic:true
	}
	var block1_options={
		restitution: 0.5,
		friction:0.02,
		frictionAir:0
	}
	var block2_options={
		restitution:0.7,
		friction:0.01,
		frictionAir:0.1
	}
	var block3_options={
		restitution:0.01,
		friction:1,
		frictionAir:0.3
	}

	Engine.run(engine);
	
	plane = Bodies.rectangle(10, 690, 1600, 10, plane_options);
	World.add(world,plane);

	block1 = Bodies.circle(220,10,60,block1_options);
	World.add(world, block1);
	block2 = Bodies.rectangle(110,50,60,60,block2_options);
	World.add(world,block2);
	block3 = Bodies.rectangle(350,50,100,60,block3_options);
	World.add(world, block3);
}


function draw() {
  	rectMode(CENTER);
  	background(0);
  
  	drawSprites();
	rect(plane.position.x, plane.position.y, 1600, 10);

	ellipse(block1.position.x, block1.position.y,60,60);
	rect(block2.position.x, block2.position.y,60,60);
	rect(block3.position.x, block3.position.y,100,60);
}



