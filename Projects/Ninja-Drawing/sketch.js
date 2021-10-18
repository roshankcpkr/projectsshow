function setup()
{
	createCanvas(700, 700);
}

function draw()
{
	background(255);
	push();
	//Heading
	push();
	textSize(30);
	text("Ninja Game Character Positions", 20, 40);
	pop();

	//Standing, facing frontwards
	
	text("1. standing front facing", 20, 160);
	standingFront(55,140);

	//Jumping facing forwards
	text("2. jumping facing forwards", 210, 160);
	jumpForward(245,140);

	//Walking, turned left
	text("3. Walking left", 20, 360);
	walkLeft(55,334);

	//Walking, turned right
	text("4. Walking right", 220, 360);
 	walkRight(245, 334);

	//Jumping right
	text("5. Jumping to the right", 20, 560);
	jumpRight(55, 537);
	
	//Jumping to the left
	text("6. Jumping to the left", 220, 560);
	jumpLeft(245, 537);
	pop();

};

function standingFront(gameChar_x,gameChar_y){
push();
rectMode(CENTER);
angleMode(DEGREES);
//ROD
push();
	translate(gameChar_x,gameChar_y-37);
	rotate(135);
	fill(139,69,19); //saddle brown
	ellipse(gameChar_x-gameChar_x,gameChar_y-gameChar_y,70,5);
pop();
//BODY
fill(27, 18, 18); //licorice
rect(gameChar_x,gameChar_y-27,24,25);
//HANDS 
	//left
	push();
		translate(gameChar_x-15,gameChar_y-37);
		rotate(135);
		fill(27, 18, 18); //licorice
		ellipse(gameChar_x-gameChar_x,gameChar_y-gameChar_y,20,9);
	pop();
	//right
	push();
		translate(gameChar_x+15,gameChar_y-37);
		rotate(45);
		fill(27, 18, 18); //licorice
		ellipse(gameChar_x-gameChar_x,gameChar_y-gameChar_y,20,9);
	pop();
//HEAD
fill(27, 18, 18); //licorice
ellipse(gameChar_x,gameChar_y-47,30,25);
//FACE
fill(255,222,173); //navojwhite
ellipse(gameChar_x,gameChar_y-47,20,13);
//EYES 
	//left brow
	push();
		translate(gameChar_x-4,gameChar_y-47);
		rotate(30);
		fill(27, 18, 18); //licorice
		rect(gameChar_x-gameChar_x,gameChar_y-gameChar_y,6,2);
	pop();
	//left ball
	fill(27, 18, 18); //licorice
	ellipse(gameChar_x-5, gameChar_y-44,2)
	//right brow
	push();
		translate(gameChar_x+4,gameChar_y-47);
		rotate(150);
		fill(27, 18, 18); //licorice
		rect(gameChar_x-gameChar_x,gameChar_y-gameChar_y,6,2);
	pop();
	//right ball
	fill(27, 18, 18); //licorice
	ellipse(gameChar_x+5, gameChar_y-44,2,2)
//LEGS
fill(27, 18, 18); //licorice
ellipse(gameChar_x-8,gameChar_y-17,9,35);
fill(27, 18, 18); //licorice
ellipse(gameChar_x+8,gameChar_y-17,9,35);
//BELT
fill(200, 0, 0); //brick red
rect(gameChar_x,gameChar_y-27,24,3);
pop();


};



function jumpForward(gameChar_x,gameChar_y){
push();
rectMode(CENTER);
angleMode(DEGREES);
//BODY
fill(27, 18, 18); //licorice
rect(gameChar_x,gameChar_y-40,24,25);

//HANDS
	//left
	push();
		translate(gameChar_x-15,gameChar_y-50);
		rotate(135);
		fill(27, 18, 18); //licorice
		ellipse(gameChar_x-gameChar_x,gameChar_y-gameChar_y,20,9);
	pop();
	//right
	push();
		translate(gameChar_x+15,gameChar_y-50);
		rotate(45);
		fill(27, 18, 18); //licorice
		ellipse(gameChar_x-gameChar_x,gameChar_y-gameChar_y,20,9);
	pop();

//HEAD
fill(27, 18, 18); //licorice
ellipse(gameChar_x,gameChar_y-60,30,25);

//FACE
fill(255,222,173); //navojwhite
ellipse(gameChar_x,gameChar_y-60,20,13);

//EYES 
	//left brow
	push();
		translate(gameChar_x-4,gameChar_y-60);
		rotate(30);
		fill(27, 18, 18); //licorice
		rect(gameChar_x-gameChar_x,gameChar_y-gameChar_y,6,2);
	pop();
	//left ball
	fill(27, 18, 18); //licorice
	ellipse(gameChar_x-5, gameChar_y-57,2,2)
	//right brow
	push();
		translate(gameChar_x+4,gameChar_y-60);
		rotate(150);
		fill(27, 18, 18); //licorice
		rect(gameChar_x-gameChar_x,gameChar_y-gameChar_y,6,2);
	pop();
	//right ball
	fill(27, 18, 18); //licorice
	ellipse(gameChar_x+5, gameChar_y-57,2,2)

//LEGS
fill(27, 18, 18); //licorice
ellipse(gameChar_x-8,gameChar_y-25,9,20);
fill(27, 18, 18); //licorice
ellipse(gameChar_x+8,gameChar_y-25,9,20);

//BELT
fill(200, 0, 0); //brick red
rect(gameChar_x,gameChar_y-40,24,3);
triangle();

pop();

};



function walkRight(gameChar_x,gameChar_y){
push();
rectMode(CENTER);
angleMode(DEGREES);
//ROD
push();
	translate(gameChar_x+18,gameChar_y-37);
	rotate(100);
	fill(139,69,19); //saddle brown
	ellipse(gameChar_x-gameChar_x,gameChar_y-gameChar_y,50,5);
pop();

//BODY
fill(27, 18, 18); //licorice
rect(gameChar_x,gameChar_y-27,24,25);

//HANDS
	//left
	push();
		translate(gameChar_x-15,gameChar_y-37);
		rotate(135);
		fill(27, 18, 18); //licorice
		ellipse(gameChar_x-gameChar_x,gameChar_y-gameChar_y,20,9);
	pop();
	//right
	push();
		translate(gameChar_x+15,gameChar_y-37);
		rotate(45);
		fill(27, 18, 18); //licorice
		ellipse(gameChar_x-gameChar_x,gameChar_y-gameChar_y,20,9);
	pop();

//HEAD
fill(27, 18, 18); //licorice
ellipse(gameChar_x,gameChar_y-47,30,25);

//FACE
fill(255,222,173); //navojwhite
ellipse(gameChar_x+5,gameChar_y-47,20,13);

//EYES 
	//left brow
	push();
		translate(gameChar_x+10,gameChar_y-47);
		rotate(30);
		fill(27, 18, 18); //licorice
		rect(gameChar_x-gameChar_x,gameChar_y-gameChar_y,8,2);
	pop();
	//left ball
	fill(27, 18, 18); //licorice
	ellipse(gameChar_x+10, gameChar_y-44,3,3)
	
	//LEGS
	fill(27, 18, 18); //licorice
	ellipse(gameChar_x-8,gameChar_y-17,9,35);
	fill(27, 18, 18); //licorice
	ellipse(gameChar_x+8,gameChar_y-17,9,35);

//BELT
fill(200, 0, 0); //brick red
rect(gameChar_x,gameChar_y-27,24,3);
triangle();

pop();
};



function walkLeft(gameChar_x, gameChar_y){
push();
rectMode(CENTER);

//ROD
push();
	translate(gameChar_x-18,gameChar_y-37);
	rotate(83);
	fill(139,69,19); //saddle brown
	ellipse(gameChar_x-gameChar_x,gameChar_y-gameChar_y,50,5);
pop();

//BODY
fill(27, 18, 18); //licorice
rect(gameChar_x,gameChar_y-27,24,25);

//HANDS
	//left
	push();
		translate(gameChar_x-15,gameChar_y-37);
		rotate(135);
		fill(27, 18, 18); //licorice
		ellipse(gameChar_x-gameChar_x,gameChar_y-gameChar_y,20,9);
	pop();
	//right
	push();
		translate(gameChar_x+15,gameChar_y-37);
		rotate(45);
		fill(27, 18, 18); //licorice
		ellipse(gameChar_x-gameChar_x,gameChar_y-gameChar_y,20,9);
	pop();

//HEAD
fill(27, 18, 18); //licorice
ellipse(gameChar_x,gameChar_y-47,30,25);

//FACE
fill(255,222,173); //navojwhite
ellipse(gameChar_x-5,gameChar_y-47,20,13);

//EYES 
	//right brow
	push();
		translate(gameChar_x-9,gameChar_y-47);
		rotate(150);
		fill(27, 18, 18); //licorice
		rect(gameChar_x-gameChar_x,gameChar_y-gameChar_y,8,2);
	pop();
	//right ball
	fill(27, 18, 18); //licorice
	ellipse(gameChar_x-9, gameChar_y-44,3,3)

//LEGS
fill(27, 18, 18); //licorice
ellipse(gameChar_x-8,gameChar_y-17,9,35);
fill(27, 18, 18); //licorice
ellipse(gameChar_x+8,gameChar_y-17,9,35);

//BELT
fill(200, 0, 0); //brick red
rect(gameChar_x,gameChar_y-27,24,3);
triangle();

pop();
};

function jumpRight(gameChar_x, gameChar_y){
push();
noStroke();
rectMode(CENTER);
angleMode(DEGREES);
push();
rectMode(CENTER);
angleMode(DEGREES);

//BODY
fill(27, 18, 18); //licorice
rect(gameChar_x,gameChar_y-40,24,25);

//HANDS
	//left
	push();
		translate(gameChar_x-15,gameChar_y-50);
		rotate(135);
		fill(27, 18, 18); //licorice
		ellipse(gameChar_x-gameChar_x,gameChar_y-gameChar_y,20,9);
	pop();
	//right
	push();
		translate(gameChar_x+15,gameChar_y-50);
		rotate(45);
		fill(27, 18, 18); //licorice
		ellipse(gameChar_x-gameChar_x,gameChar_y-gameChar_y,20,9);
	pop();

//HEAD
fill(27, 18, 18); //licorice
ellipse(gameChar_x,gameChar_y-60,30,25);

//FACE
fill(255,222,173); //navojwhite
ellipse(gameChar_x+5,gameChar_y-60,20,13);

//EYES 
	//left brow
	push();
		translate(gameChar_x+10,gameChar_y-62);
		rotate(30);
		fill(27, 18, 18); //licorice
		rect(gameChar_x-gameChar_x,gameChar_y-gameChar_y,8,2);
	pop();
	//left ball
	fill(27, 18, 18); //licorice
	ellipse(gameChar_x+10, gameChar_y-59,3,3)

//LEGS
	//left
	push();
		translate(gameChar_x-8,gameChar_y-30);
		rotate(110);
		fill(27, 18, 18); //licorice
		ellipse(gameChar_x-gameChar_x,gameChar_y-gameChar_y,30,9);
	pop();
	//right
	push();
		translate(gameChar_x+8,gameChar_y-30);
		rotate(95);
		fill(27, 18, 18); //licorice
		ellipse(gameChar_x-gameChar_x,gameChar_y-gameChar_y,30,9);
	pop();
	//BELT
	fill(200, 0, 0); //brick red
	rect(gameChar_x,gameChar_y-40,24,3);
	triangle();

pop();

};

function jumpLeft(gameChar_x, gameChar_y){
push();
noStroke();
rectMode(CENTER);
angleMode(DEGREES);
push();
rectMode(CENTER);
angleMode(DEGREES);

//BODY
fill(27, 18, 18); //licorice
rect(gameChar_x,gameChar_y-40,24,25);

//HANDS
	//left
	push();
		translate(gameChar_x-15,gameChar_y-50);
		rotate(135);
		fill(27, 18, 18); //licorice
		ellipse(gameChar_x-gameChar_x,gameChar_y-gameChar_y,20,9);
	pop();
	//right
	push();
		translate(gameChar_x+15,gameChar_y-50);
		rotate(45);
		fill(27, 18, 18); //licorice
		ellipse(gameChar_x-gameChar_x,gameChar_y-gameChar_y,20,9);
	pop();

//HEAD
fill(27, 18, 18); //licorice
ellipse(gameChar_x,gameChar_y-60,30,25);

//FACE
fill(255,222,173); //navojwhite
ellipse(gameChar_x-5,gameChar_y-60,20,13);

//EYES 
	//right brow
	push();
		translate(gameChar_x-9,gameChar_y-62);
		rotate(150);
		fill(27, 18, 18); //licorice
		rect(gameChar_x-gameChar_x,gameChar_y-gameChar_y,8,2);
	pop();
	//right ball
	fill(27, 18, 18); //licorice
	ellipse(gameChar_x-9, gameChar_y-58,3,3)
	
//LEGS
	//left
	push();
		translate(gameChar_x-8,gameChar_y-30);
		rotate(85);
		fill(27, 18, 18); //licorice
		ellipse(gameChar_x-gameChar_x,gameChar_y-gameChar_y,30,9);
	pop();
	//right
	push();
		translate(gameChar_x+7,gameChar_y-30);
		rotate(70);
		fill(27, 18, 18); //licorice
		ellipse(gameChar_x-gameChar_x,gameChar_y-gameChar_y,30,9);
	pop();

//BELT
fill(200, 0, 0); //brick red
rect(gameChar_x,gameChar_y-40,24,3);
triangle();

pop();

};