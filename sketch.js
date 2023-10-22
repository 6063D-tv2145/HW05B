// Defining global variables in order to draw the Mole
let x;
let y;
let w;
let h;

let speckDiam=40;

let pX0 = 260;
let pY0 = 500;
let pW0 = 70;
let pH0 = 300;

let pX1 = 540;
let pY1 = 500;
let pW1 = 70;
let pH1 = 300;

let pX2 = 400;
let pY2 = 530;
let pW2 = 225;
let pH2 = 270;

let validPants = [];


function pantRectangleValidity(pantX, pantY, pantW, pantH) {
  if (
    mouseX > pantX && 
    mouseX < pantX + pantW && 
    mouseY > pantY && 
    mouseY < pantY + pantH
    ) {
    return true;
  } else {
    return false;
  }
}

function drawFlower (flowerXpos, flowerYpos){
  strokeWeight (9)
  stroke (143, 225, 150,15)
  line (flowerXpos, flowerYpos, flowerXpos, 800)

  strokeWeight (0)
  fill(240,165,170)
  ellipse(flowerXpos+20, flowerYpos,40)
  ellipse(flowerXpos-20, flowerYpos,40)
  ellipse(flowerXpos, flowerYpos-20,40)
  ellipse(flowerXpos, flowerYpos+20,40)

  fill(255,217,16)
  ellipse(flowerXpos, flowerYpos,30)
}

function drawPlant (plantXpos, plantYpos, plantLength,plantAlpha){
  ellipseMode(CENTER, BOTTOM)
  //stem
  strokeWeight (9)
  stroke (152, 232, 159, plantAlpha)
  line(plantXpos, plantYpos, plantXpos, plantLength);

  //leaf fill
  strokeWeight (0)
  fill (152, 232, 159, plantAlpha)

  //top leaf
  ellipse (plantXpos, plantYpos, 48, 100)

  //right side leaves
  push();
  translate (plantXpos, plantYpos)
  rotate(-130)
  ellipse (-100, -30, 48, 100);
  ellipse (-160, -80, 48, 100);
  ellipse (-220, -130, 48, 100);
  ellipse (-280, -180, 48, 100);
  ellipse (-340, -230, 48, 100);
  pop();

  //left side leaves
  push();
  translate (plantXpos, plantYpos)
  rotate(130)
  ellipse (100, -30, 48, 100);
  ellipse (160, -80, 48, 100);
  ellipse (220, -130, 48, 100);
  ellipse (280, -180, 48, 100);
  ellipse (340, -230, 48, 100);
  pop();
}

function moleRetina (retinaCenterX, retinaCenterY){
  fill ("black")
  let distance = 10

  let eye1Xmap = map(mouseX, 0, width, retinaCenterX - 48 - distance, retinaCenterX - 48 + distance);
  let eye2Xmap = map(mouseX, 0, width, retinaCenterX + 48 - distance, retinaCenterX + 48 + distance);

  // Map the mouse position to a new y-coordinate for both eyes
  let yMap = map(mouseY, 0, height, retinaCenterY - distance, retinaCenterY + distance);

  // Draw the retinas at the mapped positions
  fill("black");
  ellipse(eye1Xmap, yMap - (yMap / 2.35), 30);
  ellipse(eye2Xmap, yMap - (yMap / 2.35), 30);
}

function drawMole (x,y,w,h) {
  rectMode(CENTER)
  ellipseMode(CENTER)
  angleMode(DEGREES)
  strokeWeight(0)

  //Mole Body
  fill("black")
  rect(x, y, w, h, w)

  //Mole Eyes
  fill("white")
  ellipse(x-48, y-(y/2.05), 100, 130)
  ellipse(x+48, y-(y/2.05), 100, 130)

  //Mole Belly
  fill(217)
  ellipse(x-64, y-(y/10), 200)
  ellipse(x+64, y-(y/10), 200)
  rect (x,y+(y/3.8),w-(w/12),h-(h/1.8),w)

  //Mole Feet
  fill (255,173,162)
  arc(x-(x/3.5), y + (y/1.5), 130, 130, 180, 0, CHORD);
  arc(x+(x/3.5), y + (y/1.5), 130, 130, 180, 0, CHORD);

  //Nose
  fill("red")
  ellipse (x,y-(y/3),95,60)
}

function drawGround(groundX,groundY){
rectMode(TOP,LEFT)

fill(98,45,7)
rect(groundX,groundY,windowWidth*2,height-(height/1.5))
}

function setup() {
  createCanvas(800, windowHeight);
  background(232, 240, 255);
}

function draw() {

  //plant for-loop
  randomSeed(601)
  for (let flowerXpos = 50; flowerXpos < width; flowerXpos += 100) {
    let flowerYpos= random (20,280)
    drawFlower(flowerXpos, flowerYpos, 800);
  }

  //flower for-loop
  for (let plantXpos = 80; plantXpos < width; plantXpos += 80) {
    let plantYpos= random (0,280)
    let plantAlpha= random(1,8);
    drawPlant(plantXpos, plantYpos, 800, plantAlpha);
  }
 
  //Drawing the Mole + Retina
  drawMole (width/2, height/2, 350, 600);

  //Ground
  drawGround(0,height)

  //dirt specks 
  for (let speckX = 0; speckX < width; speckX += speckDiam + 10) {
    for (let speckY = height-(height/7); speckY < height; speckY += speckDiam + random(17, speckDiam/2)) {
      let speckYwiggle = random (0,35)
      let speckXwiggle = random (0,35)
      let speckSize= random(25,speckDiam);

        fill(73,31,0)
        strokeWeight(0)
        ellipse((speckX + speckXwiggle), (speckY + speckYwiggle), speckSize);
      }
    }
  
  //Triangles to cover overflowing ground 
  fill(152, 232, 159)
  triangle (0,800,250,800)
  triangle (0, height-(height/5.95), width-(width/1.38), height-(height/5.95),0,height)
  triangle (width, height-(height/5.95), width-(width/3.62), height-(height/5.95),width,height)

  moleRetina (width/2, height/2 - 20);  
 
  if (pantRectangleValidity(pX0, pY0, pW0, pH0) || pantRectangleValidity(pX1, pY1, pW1, pH1) || pantRectangleValidity(pX2, pY2, pW2, pH2)) {
    strokeWeight(0);
    fill("blue");
    ellipse(mouseX, mouseY, 30, 30);
  }
 
  //sample pant rectangles
  fill(0,20)
  rect(260,500,70,300,100)

  fill(0,20)
  rect(540,500,70,300,100)

  fill(0,20)
  rect(400,530,225,270)
}

function mouseDragged() {
  noFill();
  strokeWeight(0);
  validPants.push({ x: mouseX, y: mouseY })
  rect(pX0, pY0, pW0, pH0);
  rect(pX1, pY1, pW1, pH1);
  rect(pX2, pY2, pW2, pH2);
}