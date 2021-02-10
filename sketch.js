var hr,mn,sc;

function setup() {
  createCanvas(800,800);
}

function draw() {
  background(0);
  
  hr=hour();
  mn=minute();
  sc=second();

  angleMode(DEGREES);

  scAngle=map(sc,0,60,0,360);
  mnAngle=map(mn,0,60,0,360);
  hrAngle=map(hr,0,12,0,360);

  push()
  translate(400,400);
  rotate(scAngle)
  stroke(255,0,0);
  strokeWeight(7);
  line(0,100,0,0);
  pop();

  push()
  translate(400,400);
  rotate(mnAngle)
  stroke(5,239,7);
  strokeWeight(7);
  line(0,90,0,0);
  pop();

  push()
  translate(400,400);
  rotate(hrAngle)
  stroke(8,2,224);
  strokeWeight(7);
  line(0,70,0,0);
  pop();

  drawSprites();
}