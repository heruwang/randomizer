//fruits I love

let fruits = ["strawberry", "blueberry", "cherry", "grape", "mango"];

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
