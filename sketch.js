//years in the future

let years = [{
  name: "2022",
},{
  name: "2025",
}, {
  name: "2028",
},{
  name: "2030",
}, {
  name: "2033",
}];

let randomIndex
let animating = true;
let futures = [];
let imageCounter=0;
let button;
function preload(){
  for(let i = 0; i<=6; i++){
    futures[i] = loadImage('assets/future' + i + '.jpeg');
  }
}

function setup() {
   createCanvas(1000, 1000);
  textSize(36);
  imageMode(CENTER);
  textAlign(CENTER);
  textStyle(BOLD);
  frameRate(8);
  text("click to randomizer",50,50);

  button = createButton('click to see your future');
  button.mousePressed(buttonPressed);
  button.class("randomizerButton");

}

function draw() {
  background(220);


  // background(bg);
  // stroke(226, 204, 0);
  // eclipse(width/2, height/2,x)
  // x++;
  // if(x > height)
  // {
  //   x=0;
  // }

  if(animating == true){
    clear();
    image(futures[imageCounter],width/2, height/2)};

    if(imageCounter < futures.length-1)
    {imageCounter++;}
    else{imageCounter = 0;}
  }

function randomizer(){
  animating = false;
   if(years[0]){
   //background(random(200,255));
   clear();
   randomIndex = int(random(years.length));

    image(random(futures),width/2, height/2);
     text(`year = ${years[randomIndex].name}`,width/2, height - 25);
     years.splice(randomIndex,1)
   }else{
     background(random(200,255));
     text("nothing left!", 50,50);
   }
}

function buttonPressed(){

  animating = true;
  setTimeout(randomizer, 2000);

}
