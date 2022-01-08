var last_position_of_x;
 var last_position_of_y;

 var line_width = " ";
 var line_color = " ";

 Mouse_Event = " "

    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    line_color = "blue";
    width_of_line = 2;
    height_of_line = 4;
var width = screen.width;
new_width = screen.width - 70;
new_height = screen.height - 300;
if(width < 992)
{
    document.getElementById("myCanvas").width = new_width;
    document.getElementById("myCanvas").height = new_height;
    document.body.style.overflow = "hidden";
}

canvas.addEventListener("touchstart", my_touchstart);
function my_touchstart(e)
{
    console.log("my_touchstart");

   console.log(e);
   
   last_position_of_x = e.touches[0].clientX - canvas.offsetLeft;
   last_position_of_y = e.touches[0].clientY - canvas.offsetTop;

   line_width = document.getElementById("input2").value;
 line_color = document.getElementById("input1").value;
}
canvas.addEventListener("touchmove", my_touchmove);
function my_touchmove(e)
{
    console.log("my_touchmove");
    current_position_of_touch_x = e.touches[0].clientX - canvas.offsetLeft;
    current_position_of_touch_y = e.touches[0].clientY - canvas.offsetTop;
    ctx.beginPath();
    ctx.strokeStyle = line_color;
    ctx.lineWidth = line_width;
    console.log("Last posotion of x and y coordinates =");
    console.log("x =" + last_position_of_x + "y =" +  last_position_of_y);
    ctx.lineTo(last_position_of_x, last_position_of_y);
    ctx.moveTo(last_position_of_x, last_position_of_y);

console.log("Current posotion of x and y coordinates =");
    console.log("x =" + current_position_of_touch_x + "y =" +  current_position_of_touch_y);
    ctx.lineTo(current_position_of_touch_x, current_position_of_touch_y);
    ctx.stroke();

    last_position_of_x = current_position_of_touch_x;
    last_position_of_y = current_position_of_touch_y;
}
canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e)
{
    Mouse_Event = mousedown;
}
canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e)
{
    Mouse_Event = mouseup;
}
function erase()
{
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}