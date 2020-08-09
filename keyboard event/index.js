let canvas = document.getElementById('canvas'); // get canvas from HTML
let body = document.body; // get body from HTML
let context = canvas.getContext('2d'); // get context from canvas
let width = canvas.width; // get width from canvas
let height = canvas.height; // get height from canvas
let keyNames = { // number of keys and their function
    32: "stop",
    37: "left",
    38: "up",
    39: "right",
    40: "down"
};
let ball = new Ball(); // create new ball

body.addEventListener('keydown',function (event) { // event listener that catch key press
    let direction = keyNames[event.keyCode] // get name from "keyNames" array by key code
    ball.setDirection(direction); // call setDirection function to change speed or direction of ball
})

let circle = function (x, y, radius, fillCircle) { // drawing ball
    context.beginPath();
    context.arc(x, y, radius, 0, Math.PI * 2, false);
    if (fillCircle) {
        context.fill();
    } else {
        context.stroke();
    }
};

function Ball() { // ball constructor
    this.x = width / 2; // start point by x axis
    this.y = height / 2; // start point by y axis
    this.xSpeed = 1; // start speed by x axis
    this.ySpeed = 0; // start speed by y axis
}

Ball.prototype.move = function () {
    this.x += this.xSpeed; // add to current position the speed by x axis
    this.y += this.ySpeed; // add to current position the speed by y axis

    if(this.x < 0){ // change direction to reverse if ball hit the wall
        this.xSpeed *= -1;
    }
    else if(this.x > width){ // change direction to reverse if ball hit the wall
        this.xSpeed *= -1;
    }
    else if(this.y < 0){ // change direction to reverse if ball hit the wall
        this.ySpeed *= -1;
    }
    else if(this.y > height){ // change direction to reverse if ball hit the wall
        this.ySpeed *= -1;
    }
}

Ball.prototype.draw = function () { // drawing function
    circle(this.x, this.y, 10, true);
}

Ball.prototype.setDirection = function (direction) { // getting the direction and change speed
    if(direction === "up"){
        this.xSpeed = 0;
        this.ySpeed += -1;
    }
    else if(direction === "down"){
        this.xSpeed = 0;
        this.ySpeed += 1;
    }
    else if(direction === "left"){
        this.xSpeed += -1;
        this.ySpeed = 0;
    }
    else if(direction === "right"){
        this.xSpeed += 1;
        this.ySpeed = 0;
    }
    else if(direction === "stop"){
        this.xSpeed = 0;
        this.ySpeed = 0;
    }
}

setInterval(function () {
    context.clearRect(0, 0, width, height); // clear canvas

    ball.draw(); // call draw function
    ball.move(); // call move function

    context.strokeRect(0, 0, width, height); // border
}, 30)














