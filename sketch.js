var ship,sea,seaimg,shipimg

function preload(){
shipimg.loadAnimation("ship-1.png,ship-2.png,ship-3.png,ship-4.png")
seaimg.loadImage("sea.png")
}

function setup(){
  createCanvas(400,400)
  ship= createSprite(50,160,20,50);
  ship.addAnimation( shipimg);
  
  ship.scale = 0.5;
  ship.x = 50

  sea= createSprite(200,180,400,20)
  sea.velocityX=-2
  sea.addImage(seaimg)
}

function draw() {
  background("blue");
  if(sea.x<0){
    sea.x=200
}
}