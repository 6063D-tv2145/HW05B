// let = MoleEye;

function setup() {
  createCanvas(800, 1020);
  background(223, 242, 243);
  // MoleEyes = new MoleEyes();
  rectMode(CENTER)
  ellipseMode(CENTER)
}

function draw() {
// Mole
  fill("black")
 rect(width/2, height/2, 350, 565, 180)

// Eye
fill("white")
strokeWeight(0)
ellipse(350, 366, 98, 130)
ellipse(350+98, 366, 98, 130)

// Retina
fill("black")
strokeWeight(0)
ellipse(350, 366, 30)
ellipse(350+98, 366, 30 )

// Cheeks
fill(217)
ellipse (329, 493, 180)
ellipse (329+150, 493, 180)

//belly
rect()
rect(width/2, 600, 320, 260, 180)

//nose
fill("red")
ellipse (397,430,95,60)

//dirt pile
fill("brown")
fill(127, 82, 42); 
}

// class MoleEyes{
//   constructor() {
//     this.eyeColor= ("white")
//     this.retinaColor = ("black")
//     this.eyeX= ex
//     this.eyeY= ey
//     this.eyeW= ew
//     this.eyeH= eh
//     this.retinaX= rx
//     this.retinaY= ry
//     this.retinaW= rw
//   }
// }