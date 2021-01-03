const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var boy,boyImage,mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10,stone,tree,treeImage
var launch,ground;
function preload()
{
	boyImage = loadImage("boy.png");
	treeImage = loadImage("tree.png");
	
}

function setup() {
	createCanvas(1300,600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
mango1 = new Mango(1000,120,30);
mango2 = new Mango(950,150,30);
mango3 = new Mango(900,100,30);
mango4 = new Mango(730,150,30);
mango5 = new Mango(750,200,31);
mango6 = new Mango(800,134,30);
mango7 = new Mango(900,40,30);
mango8 = new Mango(1000,180,30);
mango9 = new Mango(1000,250,30);
mango10 = new Mango(1050,300,30);
mango11 = new Mango(800,300,30);
mango12 = new Mango(900,200,30);
stone = new Stone(145,420,20);
launch = new Launch(stone.body,{x:145, y:420});
ground = new Ground(650,height,1300,10)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  image(boyImage,100,340,200,300);
  image(treeImage,650,-10,450,600);
  drawSprites();
 mango1.display();
 mango2.display();
 mango3.display();
 mango4.display();
 mango5.display();
 mango6.display();
 mango7.display();
 mango8.display();
 mango9.display();
 mango10.display();
 mango11.display();
 mango12.display();
 stone.display();
 ground.display();
 detectollision(stone,mango1);
 detectollision(stone,mango2);
 detectollision(stone,mango3);
 detectollision(stone,mango4);
 detectollision(stone,mango5);
 detectollision(stone,mango6);
 detectollision(stone,mango7);
 detectollision(stone,mango8);
 detectollision(stone,mango9);
 detectollision(stone,mango10);
 detectollision(stone,mango11);
 detectollision(stone,mango12);
}
function keyPressed(){
    if(keyCode === 32){
        launch.attach(stone.body);
    }
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    launch.fly();
}
function detectollision(stone,mango){
	var mangoPosition = mango.body.position;
	var stonePosition = stone.body.position;
	var distance = dist(stonePosition.x,stonePosition.y,mangoPosition.x,mangoPosition.y);
	if (distance<=mango.radius+stone.radius){
		Matter.Body.setStatic(mango.body,false);
	}
}