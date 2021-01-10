const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
const Constraint = Matter.Constraint

var engine, world
var bg
var ground
var box1, box2, box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18,box19,box20;
var hero
var monster

function preload() {
//preload the images here
bg=loadImage("GamingBackground.png")
}

function setup() {
  createCanvas(3000, 800);
  engine=Engine.create();
  world = engine.world
  // create sprites here
ground=new Ground(100, 380, 1300, 10)
box1 = new Box(650, 150, 50, 50);
box2 = new Box(650, 200, 50, 50);
box3 = new Box(650, 250, 50, 50);
box4 = new Box(650, 300, 50, 50);
box5 = new Box(650, 350, 50, 50);
box6 = new Box(600, 150, 50, 50);
box7 = new Box(600, 200, 50, 50);
box8 = new Box(600, 250, 50, 50);
box9 = new Box(600, 300, 50, 50);
box10 = new Box(600, 350, 50, 50);
box11 = new Box(550, 150, 50, 50);
box12 = new Box(550, 200, 50, 50); 
box13 = new Box(550, 250, 50, 50); 
box14 = new Box(550, 300, 50, 50); 
box15 = new Box(550, 350, 50, 50); 
box16 = new Box(500, 150, 50, 50); 
box17 = new Box(500, 200, 50, 50); 
box18 = new Box(500, 250, 50, 50); 
box19 = new Box(500, 300, 50, 50); 
box20 = new Box(500, 350, 50, 50);
hero = new Hero(200, 400, 10);
monster = new Monster(500,400, 20);
}

function draw() {
  background(bg);


ground.display();
box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();
box7.display();
box8.display();
box9.display();
box10.display();
box11.display();
box12.display();
box13.display();
box14.display();
box15.display();
box16.display();
box17.display();
box18.display();
box19.display();
box20.display();
hero.display();
monster.display();
}

