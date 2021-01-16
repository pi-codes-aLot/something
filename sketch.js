
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var grass;
var oak;
var oakTree;
var boy;
var boyImg;
var m1, m2, m3;
var rock;
var glue;
var xPOS = [530, 600, 340];
var yPOS = [200, 235, 330];
var i = 0;


function preload()
{
  oak = loadImage("tree.png");
  boy = loadImage("boy.png");
}

function setup() {
	createCanvas(800,700);
  background(0)

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  grass = new GROUND(400, 690, 800, 20);
  oakTree = createSprite(570, 450);
  oakTree.addImage(oak);
  oakTree.scale = 0.5;
  boyImg = createSprite(100, 620)
  boyImg.addImage(boy);
  boyImg.scale = 0.1;
  m1 = new MANGO(530, 200);
  m2 = new MANGO(600, 235);
  m3 = new MANGO(340, 330);
  rock = new STONE(340, 200);
  glue = new SlingShot(rock.body, {x: 200, y: 330});
  Matter.Body.setStatic(rock.body, isStatic = true);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  grass.display()
  m1.display();
  m2.display();
  m3.display();
  rock.display();
  glue.display();
}

function mouseDragged(){
     Matter.Body.setPosition(rock.body, {x: mouseX , y: mouseY});
  
}


function mouseReleased(){
  glue.fly();

}

function keyPressed(){
  if (keyDown("space")){
    Matter.Body.setPosition(rock.body, {x: 200, y: 640});
    Matter.Body.setStatic(rock.body, isStatic = true);
  }
  if (keyDown(DOWN_ARROW)){
    Matter.Body.setStatic(rock.body, isStatic = false);
    Matter.Body.setPosition(rock.body, {x: xPOS[i], y: yPOS[i]})
    i += 1;
  }
}




