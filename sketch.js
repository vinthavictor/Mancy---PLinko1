const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Body=Matter.Body;
var ground,engine,world;
var particles=[];
var plinkos=[];
var divisions=[];

var divisionHeight=300;

function setup(){ 

  createCanvas(800 ,800);
engine=Engine.create();
world=engine.world; 
for (k=0;k<=width;k=k+80){
  divisions.push(new Divisions(k,height-divisionHeight/2,10,divisionHeight));
 }
 
 for(var j=75;j<=width;j=j+50){
  plinkos.push(new Plinko(j,75));
 }
 for(var j=50;j<=width-10;j=j+50){
   plinkos.push(new Plinko(j,175));
 }
 for (var j=75;j<=width;j=j+50){
  plinkos.push(new Plinko(j,275));
 } 
 for (var j=50;j<=width;j=j+50){
  plinkos.push(new Plinko(j,375)); 
 }


  ground=new Ground(width/2,height-11,1900,20);
}


function draw() {
  background("black");
  Engine.update(engine);  
  for(var k=0;k<divisions.length;k++){
    divisions[k].display();
   }
   for(i=0;i<plinkos.length;i++){
     plinkos[i].display();
   }
   if (frameCount%60===0){
    particles.push(new Particle(random(width/2-10,width/2+10),10,10));
    }
    for (var m=0;m<particles.length;m++){
      particles[m].display();
    }
  ground.display();
  
}




