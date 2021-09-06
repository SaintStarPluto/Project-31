const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
 var raindrops = [];

function setup() {
  engine = Engine.create();
  world = engine.world;
  var canvas = createCanvas(400,800);

}

function draw() {
  background("black"); 

  if(frameCount % 1 === 0){
    var raindrop = new Raindrops(random(0, windowWidth), -100,10);
    raindrops.push(raindrop);
  }

  for(var i = 0; i < raindrops.length; i++){
    raindrops[i].fall(40);
    raindrops[i].velocityY++
    raindrops[i].display();
  }
}

