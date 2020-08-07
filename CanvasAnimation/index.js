// 1 //
let canvas = document.getElementById('canvas');
let context = canvas.getContext('2d');
let positionX = 0; // start position by x axis
let size = 0 // start size

setInterval(function () {
    context.clearRect(0,0, 800, 800); // clearing canvas
    context.fillRect(positionX, 0, size, size); // redrawing rectangle

    positionX +=2; // step of rectangle move by x axis
    size++; // step of rectangle size

    if(positionX > 200){ // if rectangle position equal 200px, reset to zero position and size of rectangle
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
    context2.clearRect(0,0, 200, 200); // clear canvas
    drawBee(x,y); // draw bee at new position

    canvas2.addEventListener('mousemove', function (event) {
        let mouse = [];
        mouse[0] = event.offsetX;
        mouse[1] = event.offsetY;
        x = update(x, mouse[0]); // new position by x axis
        y = update(y, mouse[1]); // new position by y axis
    });

    x = update(x); // new position by x axis
    y = update(y); // new position by y axis

    context2.strokeRect(0, 0, 200, 150); // show border for bee
},30);

function circle(context,x,y, radius, fillCircle, color) { // function to create circle
    context.beginPath(); // start
    context.arc(x, y, radius, 0, Math.PI *2, false); // parameters for circle
    if(fillCircle){ // if fillCircle equal true the circle will be filled
        context.fillStyle = color
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
    circle(context2,x - 5, y - 11, 5, false); // left wing
    circle(context2,x + 5, y - 11, 5, false); // right wing
    circle(context2,x - 2, y - 1, 2, false); // left eye
    circle(context2,x + 2, y - 1, 2, false); // right eye
};

function update(coordinates, mousePoint) { // changing bee position

    let offset;
    if (mousePoint - coordinates > -10 && mousePoint - coordinates < 10) { // if distance from cursor to bee less than 10px, bee will fly away
        offset = Math.random() * 4 - 2; // distance of move
        coordinates += offset; // adding offset to previous coordinates
        // console.log('IF');
    }
    else if (mousePoint == undefined){
        offset  = Math.random() * 4 - 2; // distance of move
        coordinates += offset; // adding offset to previous coordinates
    }

    if(coordinates > 150){ // if bee coordinates equal 150 its will stop
        coordinates = 150;
    }
    if(coordinates < 0){ // if bee coordinates equal 0 its will stop
        coordinates = 0;
    }

    return coordinates;
}

// 3 //

let canvas3 = document.getElementById('canvas3');
let context3 = canvas3.getContext('2d');

let colors = ["Red", "Orange", "Yellow", "Green", "Blue", "Purple"]; // array of colors for balls
let balls = []; // balls array
for (let i = 0; i < 11; i++){ // create each ball
    balls[i] = new Ball();
}


setInterval(function () { // redrawing balls
    context3.clearRect(0, 0, 200, 200); // clearing canvas

    for (let i = 0; i < 11; i++){
        balls[i].draw(); // drawing balls
        balls[i].move(); // steps of balls
        balls[i].checkCollision(); // checking contact with walls
    }

    context3.strokeRect(0, 0, 150, 150); // field border
},30);

function Ball() { // ball constructor
    this.x = 100; // start coordinates by x axis
    this.y = 100; // start coordinates by y axis
    this.xSpeed = Math.floor(Math.random()*11 - 5); // speed by x axis
    this.ySpeed = Math.floor(Math.random()*11 - 5); // speed by y axis
    this.color = colors[Math.floor(Math.random()*colors.length)]; // random color
}

Ball.prototype.draw = function () { // drawing ball
    circle(context3,this.x, this.y, 3, true, this.color);
}

Ball.prototype.move = function () { // calculating next position of ball
    this.x += this.xSpeed;
    this.y += this.ySpeed;
}

Ball.prototype.checkCollision = function () { // checking contact with walls
    if(this.x < 0 || this.x > 150){ // if ball contact with wall revers this speed
        this.xSpeed = -this.xSpeed;
    }
    if(this.y < 0 || this.y > 150){ // if ball contact with wall revers this speed
        this.ySpeed = -this.ySpeed;
    }
}