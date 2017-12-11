//---------Cohesion - things that are related should go together
// ----------------Classes
//------export let other files to use things in this file
export class Points {
    // typescript doesnt allow multiple constructor
      constructor(private _x: number, private _y: number) {
    // ? indicates optional
    // constructor(x?: number, y?: number) {
    
        this._x = _x;
        this._y = _y;
      }
      draw(){
        //----logic
        console.log(this._x + this._y);
      }
    //----------------properties - getters and setters
      set x(value) {
        this._x = value;
      }
    
      get x() {
        return this._x;
      }
    }
    // allocate with initialization
    let points = new Points(8, 6);
    let x = points.x;
    points.draw();
    
    //--------------Access Modifier
    // default public
    // public, private, protected

