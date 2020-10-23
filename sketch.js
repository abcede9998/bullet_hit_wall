var car;
var wall;

var speed;
var weight;
var thickness;
function setup() {
  createCanvas(1600,400);

  speed=random(5,60);
  weight=random(300,1600);
  thickness=random(22,83);
  car=createSprite(50,200, 75, 35);
    car.velocityX=speed;
      car.shapeColor="white";
  wall=createSprite(1500,200,thickness,height/2);
    wall.shapeColor=color(80);
}

function draw() {
  background(0);
  
  if(hasCollided(car,wall)) {
      car.velocityX=0;
      var damage=0.5 * weight * speed * speed/(thickness * thickness * thickness) 
  
      if(damage>10){
        wall.shapeColor="red";
      }
  
      if(damage<10){
        wall.shapeColor="green";
      }
  }


  drawSprites();
}

function hasCollided(car,wall) {
  if(wall.x-car.x < (car.width+wall.width)/2) {
      return true; } else { return false; }
}
