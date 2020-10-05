var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png");
	packageIMG=loadImage("package.png");
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite( width/2, 200, 10,10);
	packageSprite.addImage(packageIMG);
	packageSprite.scale=0.2;
	packageSprite.visible = false;

	redBox = createSprite(200,650,200,20,);
	redBox.shapeColor = "red";

	redBox1 = createSprite(100,620,20,100,);
	redBox1.shapeColor = "red";

	redBox2 = createSprite(300,620,20,100,);
	redBox2.shapeColor = "red";

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG);
	helicopterSprite.scale=0.9;

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(139,69,19);


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.rectangle( 200 , 200 , 5 , 5 , {restitution:1, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {

	background("lightBlue");
 
	packageSprite.x = packageBody.position.x ;
	packageSprite.y = packageBody.position.y ;

	console.log(helicopterSprite.x);
	
	if(keyDown("right")){
		helicopterSprite.x = helicopterSprite.x + 2;
			
		}
	 
	 if(keyDown("left")){
		helicopterSprite.x = helicopterSprite.x - 2;
			
		}

  drawSprites();
 
}

function keyPressed() {

 if (keyCode === DOWN_ARROW && helicopterSprite.x === redBox.x ) {
    // Look at the hints in the document and understand how to make the package body fall only on
	Matter.Body.setStatic(packageBody, false);
	packageSprite.visible = true; 

  }


}



