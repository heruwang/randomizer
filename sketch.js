//fruits I love

let fruits = [{name:"strawberry", color:"red"},{name: "blueberry", color: "blue"}{name:"cherry", color:"dark red"} {name: "grape", color:"purple"}{name: "mango", color:"yellow"}];

function setup() {
  createCanvas(600, 600);
  background(200);

  console.log("initial array is");
  console.log(fruits);


  fruits.splice(2, 2);
  console.log("array after splice");
  console.log(fruits);


}

function draw() {

}
