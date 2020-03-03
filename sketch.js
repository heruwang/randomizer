//fruits I love

let fruits = [{
  name: "strawberry",
  color: "red"
},{
  name: "blueberry",
  color: "blue"
}, {
  name: "cherry",
  color: "dark red"
},{
  name: "grape",
  color: "purple"
}, {
  name: "mango",
  color: "yellow"
}];

let randomIndex
let animating = true;

function setup() {
  createCanvas(600, 600);
  background(200);
  textSize(32);
  text("click to randomizer",50,50);

}

function draw() {
  if(animating == true){
    ellipse(random(width), random(height), random(50, 200));
  }
}

function randomizer(){
  animating = false;
   if(fruits[0]){
   background(random(200,255));
   randomIndex = int(random(fruits.length));
     console.log(fruits[randomIndex].name);
     text(`${fruits[randomIndex].name}'s color is ${fruits[randomIndex].color}`,50,50);
     fruits.splice(randomIndex,1)
   }else{
     background(random(200,255));
     text("nothing left!", 50,50);
   }
}
function mousePressed(){

  animating = true;
  setTimeout(randomizer, 2000);

}
