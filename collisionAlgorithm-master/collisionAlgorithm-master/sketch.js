var fixedrect, movingrect;

function setup(){
	createCanvas(1200,800);
	fixedrect = createSprite(600,400,80,50);
	fixedrect.shapeColor = "green"
	fixedrect.debug = true

	movingrect = createSprite(400,600,50,80);
	movingrect.shapeColor = "green"
	movingrect.debug = true

	fixedrect.velocityX = -5
} 
    

function draw(){
background(0,0,0)
	movingrect.x = World.mouseX
	movingrect.y = World.mouseY


	Bounceoff();
	

	drawSprites();
}
function Bounceoff(){
if(movingrect.isTouching(fixedrect)){
	fixedrect.velocityX = fixedrect.velocityX*-1
	}
	}