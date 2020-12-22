class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}
class Circle {
    constructor(cenpt, radius, context) {
        this._color = "red";
        this.cenpt = cenpt;
        this.radius = radius;
        this.context = context;
    }
    draw() {
        this.context.beginPath();
        this.context.arc(this.cenpt.x, this.cenpt.y, this.radius, 0, 2 * Math.PI, false);
        this.context.fillStyle = this._color;
        //console.log(this._color)
        this.context.fill();
        this.context.strokeStyle = "black";
        this.context.stroke();
    }
    //to set color
    set color(value) {
        this._color = value;
    }
    //to set center point
    set cenpoint(pt) {
        this.cenpt = pt;
    }
    isinside(pt) {
        let r = Math.sqrt(Math.pow(pt.x - this.cenpt.x, 2) + Math.pow(pt.y - this.cenpt.y, 2));
        if (r < this.radius) {
            return (true);
        }
        else {
            return (false);
        }
    }
}
class Rectangle {
    constructor(stpt, length, height, context) {
        this._color = "blue";
        this.stpt = stpt;
        this.length = length;
        this.height = height;
        this.context = context;
    }
    draw() {
        this.context.beginPath();
        this.context.rect(this.stpt.x, this.stpt.y, this.length, this.height);
        this.context.fillStyle = this._color;
        this.context.strokeStyle = "black";
        this.context.fill();
        this.context.stroke();
    }
    set color(value) {
        this._color = value;
    }
    set stpoint(pt) {
        this.stpt = pt;
    }
    isinside(pt) {
        if (pt.x > this.stpt.x - this.length && pt.x < this.stpt.x + this.length && pt.y > this.stpt.y - this.length && pt.y < this.stpt.y + this.length) {
            return true;
        }
    }
}
/*-----------------------------------for square--------------------//
class Square{
    private stpt:Point;
    private length:number;
    private _color:string="black";
    private context:CanvasRenderingContext2D;
    constructor(stpt:Point,length:number,context:CanvasRenderingContext2D){
       this.stpt=stpt;
       this.length=length;
       this.context=context;
    }

    draw()
    {
        this.context.beginPath();
        this.context.rect(this.stpt.x-this.length/2,this.stpt.y-this.length/2,this.length,this.length);
        this.context.fillStyle= this._color;
        this.context.strokeStyle= "black";
        this.context.fill();
        this.context.stroke();
    }
    set color(value:string){
        this._color=value;
    }

    set stpoint(pt:Point){
        this.stpt=pt;
    }
     
    isinside(pt:Point):boolean{

    if(pt.x>this.stpt.x-this.length/2 && pt.x<this.stpt.x+this.length/2 && pt.y>this.stpt.y-this.length/2 && pt.y<this.stpt.y+this.length/2){
        return true
    }
    }

}*/ 
//# sourceMappingURL=framework.js.map