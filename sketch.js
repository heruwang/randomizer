//years in the future

let years = [];
let randomIndex
let animating = false;
let futures = [];
let imageCounter = 0;
let button;
let cnv;
let inps = [];
let addMoreButton;
let firstTime = true;

function preload() {
  for (let i = 0; i <= 6; i++) {
    futures[i] = loadImage('assets/future' + i + '.jpeg');
  }
}

function setup() {
  cnv = createCanvas(800, 800);
  background(200);
  cnv.parent("#canvasDiv");
  textSize(36);
  imageMode(CENTER);
  textAlign(CENTER);
  textStyle(BOLD);
  frameRate(3);


  button = select('#randButton');
  button.mousePressed(buttonPressed);

  addMoreButton = select('#addMoreButton');
  addMoreButton.mousePressed(addAnotherInput);

  for (let i = 0; i < 3; i++) {
    inps.push(createInput());
    inps[inps.length - 1].parent("#inputFields");
  }
}


function draw() {


  if (animating == true) {
    clear();
    image(futures[imageCounter], width / 2, height / 2)
  };

  if (imageCounter < futures.length - 1) {
    imageCounter++;
  } else {
    imageCounter = 0;
  }
}

function addAnotherInput() {
  inps.push(createInput());
  inps[inps.length - 1].parent("#inputFields");
}

function randomizer() {
  animating = false;
  if (years[0]) {
    //background(random(200,255));
    clear();
    randomIndex = int(random(years.length));
    text(years[randomIndex], width / 2, height - 55);
    image(random(futures), width / 2, height / 2);
    years.splice(randomIndex, 1)
  } else {
    background(20, 40, 200);
    text("nothing left!", width / 2, height / 2);
  }
}

function buttonPressed() {
  if (firstTime == true) {
    for (let i = 0; i < inps.length; i++) {
      years.push(inps[i].value());
    }
    firstTime = false;
  }
  animating = true;
  setTimeout(randomizer, 2000);

}
