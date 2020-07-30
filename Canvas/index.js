// 1 //
let canvas = document.getElementById('canvas'); // get canvas element
let ctx = canvas.getContext('2d'); // get the drawing context
ctx.lineWidth = 4;
ctx.strokeRect(5,0, 20, 20); // head
ctx.beginPath(); // start crete body, hands, legs
ctx.moveTo(15, 20); // start body
ctx.lineTo(15, 50); // end body
ctx.moveTo(15, 20); // start left hand
ctx.lineTo(5, 40); // end left hand
ctx.moveTo(15, 20); // start right hand
ctx.lineTo(25, 40); // end right hand
ctx.moveTo(15, 50); // start left leg
ctx.lineTo(5, 90); // end left let
ctx.moveTo(15, 50); // start right leg
ctx.lineTo(25, 90); // end right leg
ctx.stroke(); // show body, hands, legs


// 2 //
let canvas2 = document.getElementById('canvas2'); // get second canvas element
let ctx2 = canvas2.getContext('2d'); // get the drawing context

function circle(x,y, radius, fillCircle) { // function to create circle
    ctx2.beginPath(); // start
    ctx2.arc(x, y, radius, 0, Math.PI *2, false); // parameters for circle
    if(fillCircle == true){ // if fillCircle equal true the circle will be filled
        ctx2.fill();
    }
    else { // if fillCircle equal true the circle will be stroked
        ctx2.stroke();
    }
}

ctx2.lineWidth = 4;

function drawSnowman(x,y) {
    circle(x, y, 20, false); // head
    circle(x, y+65, 40, false); // body
    circle(x-10, y+5, 5, true); // left eye
    circle(x+10, y+5, 5, true); // right eye
    ctx2.fillStyle = "Orange";
    circle(x, y+10, 5, true); // nose
    ctx2.fillStyle = "Black";
    circle(x, y+35, 5, true); // button
    circle(x, y+65, 5, true); // button
    circle(x, y+85, 5, true); // button
}

drawSnowman(100,30);

// 3 //
let canvas3 = document.getElementById('canvas3'); // get third canvas element
let ctx3 = canvas3.getContext('2d'); // get the drawing context
let points = [[50, 50], [50, 100], [100, 100], [100, 50], [50, 50]]; // array of points for drawing
let mysteryPoints = [[50, 50], [50, 100], [25, 120],[100, 50], [70, 90], [100, 90], [70, 120]]; // array of points for drawing

function drawPoints(points) { // function to draw
    ctx3.beginPath(); // start
    ctx3.moveTo(points[0][0], points[0][1]); // start point for drawing
    for (let i = 0; i < 5; i++){
        for (let j = 0; j < 1; j++){
            ctx3.lineTo(points[i][j], points[i][j+1]); // next point for drawing
        }
    }
    ctx3.stroke();
}

drawPoints(points);

// 4 //
let canvas4 = document.getElementById('canvas4');
let ctx4 = canvas4.getContext('2d');
ctx4.beginPath();

ctx4.addEventListener('mousemove',function (event) {
    let point = event.position;
    ctx4.lineWidth = 3;

    ctx4.fill();
});










