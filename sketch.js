const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var snow = [];
var maxSnow = 100
var village;

function preload(){
    village = loadImage("snow2.jpg");
}

function setup(){
  createCanvas(1200, 700);
	rectMode(CENTER);

	for(var i=0; i < maxSnow; i++){
	snow.push(new Snow(random(0,400), random(0,400)));
	}

	engine = Engine.create();
	world = engine.world;
	

	Engine.run(engine); 
}

function draw(){
	background(village);
	for(var i = 0; i < maxSnow; i++){
		snow[i].display();
		snow[i].display();
	}
}   