var num
var cenX, cenY; 
var counter = 10;
var Dist = 5; 
var sign = 1; 
var move = true;
var button; 
var slider
var rad = Diameter/2; //radius
var ang = 50; //angle
var Diameter =300;
var otherslider

function setup() {
	createCanvas(windowWidth, windowHeight);
	cenX = windowWidth/2; 
	cenY = windowHeight/2;
		background(50,148,245)
	button = createButton("stop / go"); 
	button.position(200,50); 
	button.size(80,40);
	button.mousePressed(Pause); 
//slider = createSlider(0,5,0)
//slider.position(20, 20);
//slider.size(200,20);
	
otherslider = createSlider(0,800,0,5)
otherslider.position(30,100)
otherslider.size(500,30)
fill(255,0,0);
	noStroke();
  textSize(18);
	text("move the jelly",70,80)

		
}

function draw() {
			angleMode(DEGREES); 
	//sign = slider.value()
		if (move) { 
		counter = counter + sign*Dist; 
	}
	
	if (counter>windowWidth || counter<0) {
		sign = sign*-1; 
	}
//sign = slider.value()
	stroke(1)
background(50,148,245)
jelly(mouseX, mouseY)
	fill(255,254,76)
	rect(600,20, 500, 700)
	rect(680,700,30,200)
	rect(980,700,30,200)
	rect(450,500,150,25)
	rect(1100,500,150,25)
	fill(255,255,255)
	strokeWeight(4)
	ellipse(750,150,200,200)
	ellipse(950,150,200,200)
	fill(57,188,232)
	ellipse(750,165,60,60)
	ellipse(950,165,60,60)
	fill(0,0,0)
	ellipse(750,170,20,20)
	ellipse(950,170,20,20)
	strokeWeight(2)
	fill(255,254,97)
	ellipse(850,250,40,80)
	strokeWeight(4)
	//smile
	noFill()
	bezier(630,300,680,400,1000,400,1060,300)
	line(750,50,750,30)
	line(700,60,700,30)
	line(800,60,800,30)
	line(950,50,950,30)
	line(900,60,900,30)
	line(1000,60,1000,30)
	strokeWeight(0)
	fill(214,79,52)
	//dimples
	ellipse(631,290,5,5)
	ellipse(624,280,5,5)
	ellipse(638,280,5,5)
	ellipse(1060,290,5,5)
	ellipse(1053,280,5,5)
	ellipse(1067,280,5,5)
	strokeWeight(2)
	fill(255,255,255)
	rect(790,375,40,60)
	rect(860,375,40,60)
	rect(600,450,500,100)
	fill(212,128,33)
	rect(600,550,500,170)
	strokeWeight(0)
	fill(164,177,58)
	ellipse(700,300,32,75)
	ellipse(1058,54,25,64)
	ellipse(643,62,23,69)
	ellipse(620,93,17,48)
	ellipse(950,405,24,67)
	ellipse(990,420,17,53)
	strokeWeight(1)
	//tie
	fill(247,0,32)
	//rect(810,450,70,150)
	quad(840,450,860,450,790,580,900,580)
	triangle(790,580,845,630,900,580)
	
	fill(0,0,0)
	rect(620,580,70,30)
	rect(710,580,70,30)
	rect(910,580,70,30)
	rect(1000,580,70,30)

//var x = rad * cos(ang);
//var y = rad * sin(ang);
//translate(cenX, cenY); //specifies an amount to diplace objects within the display window, starts in the center 

	
//var xpos = cenX + rad*cos(frameCount%360);
//var ypos = cenY + rad*sin(frameCount%360);
	//jelly(400+frameCount%360,100,100,rad)
	num = otherslider.value()
	jellymove(cenX+800,cenY)
	jellycircle(frameCount%360,num)
	jellycircle(frameCount%360,50)
	jellycircle(frameCount%360,200)
	jellycircle(frameCount%360,350)
	jellycircle(frameCount%360,500)
	
	
	//fill(255,0,0)
	//ellipse(frameCount%300, cenY, Diameter, Diameter);
//var number = slider.value();
}

function Pause() {
	move = !move;
}

function jellymove(X,Y) { //old jelly
	strokeWeight(1)
fill(208,122,220)
ellipse(X-counter,Y,120,90)
line(X-counter+25,Y+42,X-counter+25,Y+70)
line(X-counter,Y+45,X-counter,Y+70)
line(X-counter-25,Y+42,X-counter-25,Y+70)
strokeWeight(0)
fill(144,53,159)
ellipse(X-counter-27,Y-12,20,17)
ellipse(X-counter,Y,17,15)
ellipse(X-counter+30,Y+5,17,22)
//var Xpos = cenX + rad*cos(ang);   
//var Ypos = cenY + rad*sin(ang);
	
//var xpos = cenX + rad*cos(frameCount%360);
//var ypos = cenY + rad*sin(frameCount%360);
//ellipse(Xpos,Ypos, Diameter/3,Diameter/3)
//sign = slider.value()
}
function jelly(X,Y){
strokeWeight(1)
fill(208,122,220)
ellipse(X,Y,120,90)
line(X+25,Y+42,X+25,Y+70)
line(X,Y+45,X,Y+70)
line(X-25,Y+42,X-25,Y+70)
strokeWeight(0)
fill(144,53,159)
ellipse(X-27,Y-12,20,17)
ellipse(X,Y,17,15)
ellipse(X+30,Y+5,17,22)
}

function jellycircle(ang,rad){
	var Xpos = cenX + rad*cos(ang);   //Get the X and Y value of ellipse
	var Ypos = cenY + rad*sin(ang);
	
	jelly(Xpos,Ypos, 50,50);
}



//function mousePressed() {
//fill(255,20,20)
//rect(200,300,399,30)
	
//}

//function mouseReleased() {
//redraw()
//}
