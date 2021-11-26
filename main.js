var last_X , last_Y ;
colour = "black";
width = 2;

canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

var width_screen = screen.width;

new_width = screen.width-70;
new_height = screen.height-300;

if ( width_screen < 992)

{
    document.getElementById("myCanvas").width = new_width;
    document.getElementById("myCanvas").height = new_height;
    document.body.style.overflow = "hidden";
}

canvas.addEventListener("touch_start",touch);

function touch(e) {
    console.log("touch event started")
    last_X = e.touches[0].clientX - canvas.offsetLeft;
    last_Y = e.touches[0].clientY - canvas.offsetTop; 
}
canvas.addEventListener("move", moving);

function moving(e) {
    console.log("moving event started")
    current_X = e.touches[0].clientX - canvas.offsetLeft;
    current_Y = e.touches[0].clientY - canavs.offsetTop;
 
        ctx.beginPath();
        ctx.strokecolour = colour;
        ctx.lineWidth = width;
        ctx.moveTo(last_X , last_Y)
        console.log(last_X,last_Y);

        ctx.lineTo(current_X,current_Y);
        console.log(current_X,current_Y);
        ctx.stroke();
    
    last_X = current_X;
    last_Y = current_Y;
}

