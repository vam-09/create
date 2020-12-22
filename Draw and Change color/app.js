var canvas = document.getElementById("mycanvas");
var context = canvas.getContext("2d");
//here we are adding event
canvas.addEventListener("click", mouseclick, false);
//input element radius of circle & length if side of square
var t1 = document.getElementById('t1');
var t2 = document.getElementById('t2');
var t3 = document.getElementById('t3');
//boundry of canvas
var rect = canvas.getBoundingClientRect();
//to obtain plain canvas
var geo = "none";
//container in which we can place onjects
var circlecontainer = [];
//var sqcontainer:{rect:Square}[]=[];
var reccontainer = [];
//function to draw circle
function drawcircle() {
    geo = "circle";
}
//function to draw rectangle
function drawrect() {
    geo = "rect";
}
//function to change color
function changecolor() {
    geo = "changecolor";
}
//mouseclick function
function mouseclick(e) {
    //for circle
    if (geo == "circle") {
        let c1 = new Point(e.clientX - rect.left, e.clientY - rect.top);
        let cir1 = new Circle(c1, +t1.value, context);
        cir1.draw();
        circlecontainer.push({ circle: cir1 });
    }
    //for rectangle
    else if (geo == "rect") {
        let c1 = new Point(e.clientX - rect.left, e.clientY - rect.top);
        let rec = new Rectangle(c1, +t2.value, +t3.value, context);
        rec.draw();
        reccontainer.push({ rec: rec });
    }
    //for changing color
    else if (geo == "changecolor") {
        for (let i = 0; i < circlecontainer.length; i++) {
            //to check clicking point is inside or outside of circle
            if (circlecontainer[i].circle.isinside(new Point(e.clientX - rect.left, e.clientY - rect.top))) {
                //to set color
                circlecontainer[i].circle.color = "yellow";
                break;
            }
        }
        //context.clearRect(0,0,canvas.width,canvas.height);----------------//to clear rectangles
        for (let i = 0; i < circlecontainer.length; i++) {
            circlecontainer[i].circle.draw(); //to draw circle
        }
        //for square
        for (let j = 0; j < reccontainer.length; j++) {
            //to check clicking point is inside or outside of square
            if (reccontainer[j].rec.isinside(new Point(e.clientX - rect.left, e.clientY - rect.top))) {
                //to set color
                reccontainer[j].rec.color = "yellow";
                break;
            }
        }
        //context.clearRect(0,0,canvas.width,canvas.height);----------------//to clear rectangles
        for (let j = 0; j < reccontainer.length; j++) {
            reccontainer[j].rec.draw(); //to draw circle
        }
    }
}
//# sourceMappingURL=app.js.map