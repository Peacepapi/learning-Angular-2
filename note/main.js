function log(message) {
    console.log(message);
}
var messageStr = "Hello";
log(messageStr);
//-------------Declaring variable--------------
var number = 1;
var count = 2;
function doSomething() {
    // variable var i is availible in the whole function
    // not just the for loop
    // let doesn't do this. It exist only in loop scope
    // let is 
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
    console.log("Finally: " + count);
}
doSomething();
var a;
var b;
var c;
var d;
var e;
var ColorRed = 0;
var ColorGreen = 1;
// container
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var backgroundColor = Color.Red;
//------------------type assertion------------------
// by default this create a variable of any type
// so code assistance in not enable because the type
// is not specify
var message;
message = 'abc';
// this is type assertion. It helps access the intellegence 
// let endWithC = (message as string).endsWith('c');
//------------------Arrow---------------------------
// similar to lamda, in typescript Arrow function
var doNotLog = function () { return console.log(); };
var doLog = function (message) { return console.log(message); };
var drawPoint = function (point) {
    console.log(point.x + point.y);
};
drawPoint({ x: 1, y: 2 });
//---------Cohesion - things that are related should go together
// ----------------Classes
var Points = /** @class */ (function () {
    function Points(x, y) {
        this.x = x;
        this.y = y;
    }
    Points.prototype.draw = function () {
        //----logic
        console.log(this.x + this.y);
    };
    Points.prototype.getDistant = function (ano) {
        //----
    };
    return Points;
}());
// allocate with initialization
var points = new Points(8, 6);
points.draw();
