var brickImg,cementImg,flowerPotImg,nailCutterImg,trowelImg,utensilImg
var brick,cement,flowerPot,nailCutter,trowel,utensil

function preLoad(){
  brickImg = loadImage("images/brick.jpg")
  cementImg = loadImage('images/cement.jpg')
  flowerPotImg = loadImage('images/flowerPot.jpg')
  nailCutterImg = loadImage('images/nailCutter.png')
  trowelImg = loadImage('images/trowel.jpg')
  utensilImg = loadImage('images/utensil.png')
}


function setup() {
  createCanvas(1350,650);
  brick = createSprite (500,500,10,10)
  cement = createSprite (540,590,10,10)
  flowerPot = createSprite(700,600,10,10)
  nailCutter = createSprite(950,900,10,10)
  trowel = createSprite(560,800,10,10)
  utensil = createSprite(580,570,10,10)
}



function draw() {
  background(0,0,0);  
 brick.addImage("brick",brickImg);
 cement.addImage("cement",cementImg);
 flowerPot.addImage("flowerPot",flowerPotImg);
 nailCutter.addImage("nailCutter",nailCutterImg);
 trowel.addImage("trowel",trowelImg);
 utensil.addImage("utensil",utensilImg);
  drawSprites();
}