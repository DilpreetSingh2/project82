var mouseevent = "empty";
var lastx,lasty;

canvas = document.getElementById('mycanvas');
ctx = canvas.getContext("2d");
color = "red";
width = 2;

canvas.addEventListener("mousedown",my_mousedown);


function my_mousedown(e){ 
   mouseevent = "mouseDown";
color = document.getElementById("color").value;
width = document.getElementById("width").value;
radius = document.getElementById("radius").value;
}

canvas.addEventListener("mousemove",my_mousemove);

function my_mousemove(e){
    current_position_of_mouse_x = e.clientX - canvas.offsetLeft; 
    current_position_of_mouse_y = e.clientY - canvas.offsetTop;

    if(mouseevent=="mouseDown") {
        console.log("mouseDown");
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width;
        ctx.arc(current_position_of_mouse_x,current_position_of_mouse_y, radius , 0 , 2* Math.PI);
        ctx.stroke();
    }
    
    }
    canvas.addEventListener("mouseup",my_mouseup);

    function my_mouseup(e){
        mouseevent = "mouseUP";
        console.log("mouseUP");
    }
    canvas.addEventListener("mouseleave",my_mouseleave);
    function my_mouseleave(e){
        mouseevent = "mouseleave";
    }


function clearArea(){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}