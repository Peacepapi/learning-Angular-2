// import module - class
import {Points} from './points';

function log(message) {
  console.log(message);
}
var messageStr = "Hello";
log(messageStr);
//-------------Declaring variable--------------
var number = 1;
let count = 2;

function doSomething() {
  // variable var i is availible in the whole function
  // not just the for loop
  // let doesn't do this. It exist only in loop scope
  // let is 
  for(let i = 0; i < 5; i++ ) {
    console.log(i);
  }
  console.log("Finally: " + count);
}

doSomething();

let a: number;
let b: boolean;
let c: string;
let d: any;
let e: number[];

const ColorRed = 0;
const ColorGreen = 1;

// container
enum Color { Red, Green, Blue};
let backgroundColor = Color.Red;

//------------------type assertion------------------

// by default this create a variable of any type
// so code assistance in not enable because the type
// is not specify
let message: string;
message = 'abc';
// this is type assertion. It helps access the intellegence 
// let endWithC = (message as string).endsWith('c');

//------------------Arrow---------------------------

// similar to lamda, in typescript Arrow function
let doNotLog = () => console.log();
let doLog = (message) => console.log(message);

//---------------------interfaces - for decoration-------------------
interface Point {
  x: number,
  y: number;
}
let drawPoint = (point: Point) => {
  console.log(point.x + point.y);  
}

drawPoint({x:1, y: 2})

let points = new Points(1,2);
points.draw();



