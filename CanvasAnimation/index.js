// 1 //
let canvas = document.getElementById('canvas');
let context = canvas.getContext('2d');
let positionX = 0;
let size = 0

setInterval(function () {
    context.clearRect(0,0, 800, 800);
    context.fillRect(positionX, 0, size, size);

    positionX +=2;
    size++;

    if(positionX > 200){
        positionX = 0;
        size = 0;
    }
},30)

// 2 //

let canvas2 = document.getElementById('canvas2');
let context2 = canvas2.getContext('2d');
let x = 100; // start position by x axis
let y = 100; // start position by y axis

setInterval(function () { // start function

    canvas2.addEventListener('mousemove', function (event) {
        let mouse = [];
        mouse[0] = event.offsetX;
        mouse[1] = event.offsetY;
        x = update(x, mouse[0]); // new position by x axis
        y = update(y, mouse[1]); // new position by y axis
    });

    context2.clearRect(0,0, 200, 200); // clear canvas
    drawBee(x,y); // draw bee at new position
    x = update(x); // new position by x axis
    y = update(y); // new position by y axis

    context2.strokeRect(0, 0, 200, 150); // show border for bee
},30);

function circle(context,x,y, radius, fillCircle) { // function to create circle
    context.beginPath(); // start
    context.arc(x, y, radius, 0, Math.PI *2, false); // parameters for circle
    if(fillCircle){ // if fillCircle equal true the circle will be filled
        context.fill();
    }
    else { // if fillCircle equal true the circle will be stroked
        context.stroke();
    }
}

let drawBee = function (x, y) { // drawing bee
    context2.lineWidth = 2;
    context2.strokeStyle = "Black"; // color for eye, wings, body border
    context2.fillStyle = "Gold"; // color for body
    circle(context2,x, y, 8, true); // body
    circle(context2,x, y, 8, false); // body border
    circle(context2,x - 5, y - 11, 5, false); //
    circle(context2,x + 5, y - 11, 5, false);
    circle(context2,x - 2, y - 1, 2, false);
    circle(context2,x + 2, y - 1, 2, false);
};

function update(coordinates, mousePoint) {
    let offset;
    if (typeof mousePoint === 'number' && mousePoint - coordinates > -5 && mousePoint - coordinates < 5) {
        offset = Math.random() * 4 - 2;
        coordinates += offset;
        // console.log('IF');
    }

    offset  = Math.random() * 4 - 2;
    coordinates += offset;
    // console.log('ELSE');

    if(coordinates > 150){
        coordinates = 150;
    }
    if(coordinates < 0){
        coordinates = 0;
    }

    return coordinates;
}

// 3 //

let canvas3 = document.getElementById('canvas3');
let context3 = canvas3.getContext('2d');

let ball = new Ball();

setInterval(function () {
    context3.clearRect(0, 0, 200, 200);

    ball.draw();
    ball.move();
    ball.checkCollision();

    context3.strokeRect(0, 0, 150, 150);
},30)

function Ball() {
    this.x = 100;
    this.y = 100;
    this.xSpeed = -2;
    this.ySpeed = 3;
}

Ball.prototype.draw = function () {
    circle(context3,this.x, this.y, 3, true);
}

Ball.prototype.move = function () {
    this.x += this.xSpeed;
    this.y += this.ySpeed;
}

Ball.prototype.checkCollision = function () {
    if(this.x < 0 || this.x > 150){
        this.xSpeed = -this.xSpeed;
    }
    if(this.y < 0 || this.y > 150){
        this.ySpeed = -this.ySpeed;
    }
}













