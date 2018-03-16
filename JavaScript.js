var x=250;
var y=250;
var xstep=5;
var ystep=5;
var r=0;
var g=0;
var b=0;
var radius=200;
var img;
function change_colour(){
  r=random(255);
  g=random(255);
  b=random(255);
}
function setup() {
  img = loadImage("monster_hunter_world_5k-2880x1800.png");
  createCanvas(2880,1800);
}
function draw(){
  background(img);
  fill(r,g,b);
  ellipse(x,y,radius,radius);
  x+=xstep;
  y+=ystep;
  if(x>width-radius/2 || y >height-radius/2){
    xstep =-1*random(10);
    ystep =-1*random(10);
  change_colour();
  }
  if(x<0+100|| y<0+100){
    xstep=random(10);
    ystep=random(10);
  change_colour();
  }
}
