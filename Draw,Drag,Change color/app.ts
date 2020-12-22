var canvas = <HTMLCanvasElement>document.getElementById("mycanvas");
var context: CanvasRenderingContext2D = canvas.getContext("2d");

//here we are adding event
canvas.addEventListener("click",mouseclick,false);
canvas.addEventListener("mousemove",mousemove,false);
canvas.addEventListener("mouseup",mouseup,false);
canvas.addEventListener("mousedown",mousedown,false);

//input element radius of circle & length if side of square
var t1: HTMLInputElement = <HTMLInputElement> document.getElementById('t1');
var t2: HTMLInputElement = <HTMLInputElement> document.getElementById('t2');
var t3: HTMLInputElement = <HTMLInputElement> document.getElementById('t3');

//boundry of canvas
var rect=canvas.getBoundingClientRect();
//to obtain plain canvas
var geo:string="none";
//container in which we can place onjects
var circlecontainer:{circle:Circle}[]=[];
//var sqcontainer:{rect:Square}[]=[];
var reccontainer:{rec:Rectangle}[]=[];

//function to draw circle
function drawcircle(){
    geo="circle"
    }
//function to draw rectangle
function drawrect(){
    geo="rect"
    }
//function to change color
function changecolor(){
    geo="changecolor"
    }
//function to drag
function drag(){
       geo="drag"
    }
var enabledrag:boolean=false;
//function of mousedown
function mousedown(e:MouseEvent){
    if(geo=="drag"){
       enabledrag=true;
    }
}
//function of mouseup
function mouseup(e:MouseEvent){
    if(geo=="drag"){
       enabledrag=false;
    }
}

//mouseclick function
function mouseclick(e: MouseEvent)
{
    //for circle
   if(geo=="circle"){
   let c1=new Point(e.clientX-rect.left,e.clientY-rect.top);
   let cir1=new Circle(c1,+t1.value,context);
   cir1.draw();
   circlecontainer.push({circle:cir1})
   }
   //for rectangle
   else if(geo=="rect"){
   let c1=new Point(e.clientX-rect.left,e.clientY-rect.top);
   let rec=new Rectangle(c1,+t2.value,+t3.value,context);
   rec.draw();
   reccontainer.push({rec :rec})
   }
   //for changing color
   else if(geo=="changecolor"){
       for(let i=0;i<circlecontainer.length;i++){
           //to check clicking point is inside or outside of circle
           if(circlecontainer[i].circle.isinside(new Point(e.clientX-rect.left,e.clientY-rect.top))){
               //to set color
               circlecontainer[i].circle.color="yellow";
               break;
           }
       }
        //context.clearRect(0,0,canvas.width,canvas.height);----------------//to clear rectangles
        for(let i=0;i<circlecontainer.length;i++){
            circlecontainer[i].circle.draw();               //to draw circle
        }

        //for square
        for(let j=0;j<reccontainer.length;j++){
            //to check clicking point is inside or outside of square
            if(reccontainer[j].rec.isinside(new Point(e.clientX-rect.left,e.clientY-rect.top))){
                //to set color
                reccontainer[j].rec.color="yellow";
                break;
            }
        }
         //context.clearRect(0,0,canvas.width,canvas.height);----------------//to clear rectangles
         for(let j=0;j<reccontainer.length;j++){
            reccontainer[j].rec.draw();               //to draw circle
         }
   }
}
//mousemove function
function mousemove(e:MouseEvent){
    //if drag function is enabled
    if(enabledrag){
        for(let i=0;i<circlecontainer.length;i++){
            if(circlecontainer[i].circle.isinside(new Point(e.clientX-rect.left , e.clientY-rect.top))){
                circlecontainer[i].circle.cenpoint=new Point(e.clientX-rect.left , e.clientY-rect.top)         //to set center point
                break;
            }

        }
        for(let i=0;i<reccontainer.length;i++){
            if(reccontainer[i].rec.isinside(new Point(e.clientX-rect.x , e.clientY-rect.y))){
                reccontainer[i].rec.stpoint=new Point(e.clientX-rect.x , e.clientY-rect.y)              //to set start point
                break;
            }

        }
        context.clearRect(0,0,canvas.width,canvas.height);
        for(let i=0;i<circlecontainer.length;i++){

            circlecontainer[i].circle.draw();             //to draw circle with new position

        }
        //context.clearRect(0,0,canvas.width,canvas.height);
        for(let i=0;i<reccontainer.length;i++){

            reccontainer[i].rec.draw();                   //to draw square with new position

        }
    }
}
