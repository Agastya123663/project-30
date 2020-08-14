
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


function preload()
{
gemImage = loadImage("sprites/gem.jpg");
}

function setup() {
  createCanvas(800, 400);
  


        
	engine = Engine.create();
	world = engine.world;

  gem = createSprite(380,220,10,10);
  gem.addImage("gem",gemImage);
  gem.scale = 0.09;

	box1 = new Box(330,235,30,40);
	box2 = new Box(360,235,30,40);
	box3 = new Box(390,235,30,40);
	box4 = new Box(420,235,30,40);
	box5 = new Box(450,235,30,40);
	box6 = new Box(360,195,30,40);
	box7 = new Box(390,195,30,40);
	box8 = new Box(420,195,30,40);
  box9 = new Box(390,155,30,40);

  stand = new Ground(390,270,400,10);
  ground = new Ground(400,380,800,10);

  striker = new Striker(100,250,30,30);

  sling = new SlingShot(striker.body,{x:100,y:250});

  


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  text("FIND THE HIDDEN GEM",340,70);
  text("Press space to strike again",140,100);
  text("Kill the enemys blocking the gem" , 390,100)


  drawSprites();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  stand.display();
  ground.display();
  striker.display();
  sling.display();
 

}

function mouseDragged(){
  Matter.Body.setPosition(striker.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  sling.fly();
}

function keyPressed(){
  if(keyCode === 32){
    Matter.Body.setPosition(striker.body,{x:100,y:250});
    sling.attach(striker.body)

  }
}