// Defining global variables in order to draw the Mole
let x;
let y;
let w;
let h;


function moleRetina (x,y){
fill ("black")
ellipse(x-48, y-(y/2.35), 30)
ellipse(x+48, y-(y/2.35), 30)
}

function drawMole (x,y,w,h) {
  rectMode(CENTER)
  ellipseMode(CENTER)
  rectMode()

  //Mole Body
  fill("black")
  rect(x, y, w, h, w)

  //Mole Eyes
  fill("white")
  strokeWeight(0)
  ellipse(x-48, y-(y/2.05), 100, 130)
  ellipse(x+48, y-(y/2.05), 100, 130)

  //Mole Belly
  fill(217)
  strokeWeight(0)
  ellipse(x-64, y-(y/10), 200)
  ellipse(x+64, y-(y/10), 200)
  rect (x,y+(y/3.8),w-(w/12),h-(h/1.8),w)

  //Mole Feet
  fill (255,173,162)
  strokeWeight (0)
  arc(x-(x/3.5), y + (y/1.5), 130, 130, PI, 0, CHORD);
  arc(x+(x/3.5), y + (y/1.5), 130, 130, PI, 0, CHORD);

  //Nose
  fill("red")
  ellipse (x,y-(y/3),95,60)
}


function setup() {
  createCanvas(800, windowHeight);
  background(223, 242, 243);
}

function draw() {
  //Drawing the Mole + Retina
  drawMole (width/2, height/2, 350, 600)
  moleRetina (width/2, height/2)


}