getName(); //Accessing function before declaration
console.log(x); //Accessing variable before declaration

var x = 5;

function getName() {
  console.log("This is Hoisting"); 
}