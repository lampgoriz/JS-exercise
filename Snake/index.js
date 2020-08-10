let canvas = document.getElementById('canvas'); // get canvas element from HTML
let context = canvas.getContext('2d'); // get context from canvas
let width = canvas.width; // canvas width
let height = canvas.height; // canvas height
let blockSize = 5; // size of drawing blocks
let widthInBlocks = width / blockSize; // number of blocks on field by x axis
let heightInBlocks = height / blockSize; //  number of blocks on field by y axis
let score = document.getElementById('score__num'); // get span for score from HTML
let scoreNum = 0; // score number
let body = document.body; // get body

function drawBorder(){ // drawing border of play field
    context.fillStyle = 'Red'; // border color
    context.fillRect(0,0, width, blockSize); // top side of border
    context.fillRect(0,height - blockSize, width, blockSize); // bottom side of border
    context.fillRect(0,0, blockSize, height); // left side of border
    context.fillRect(width - blockSize,0, blockSize, height); // right side of border
}

function gameOver() {
    clearInterval(intervalID); // stop interval function
    context.font = "50px Courier";
    context.fillStyle = "Black";
    context.textAlign = "center";
    context.textBaseline = "middle";
    context.fillText("Game Over", width / 2, height / 2); // game over text with some style
}

function circle (x, y, radius, fillCircle) { // function to draw circle
    context.beginPath();
    context.arc(x, y, radius, 0, Math.PI * 2, false);
    if (fillCircle) {
        context.fill();
    } else {
        context.stroke();
    }
}

function Block(col, row) { // block constructor
    this.col = col; // number of column
    this.row = row; // number of row
}

Block.prototype.drawSquare = function (color) { // block method to draw square
    let x = this.col * blockSize; // getting the place of square by x axis
    let y = this.row * blockSize; // getting the place of square by y axis
    context.fillStyle = color; // color of square
    context.fillRect(x,y, blockSize, blockSize); // drawing square
}

Block.prototype.drawCircle = function (color) { // block method to draw circle (apple)
    let centerX = this.col * blockSize + blockSize / 2; // center of block to draw apple by x axis
    let centerY = this.row * blockSize + blockSize / 2; // center of block to draw apple by y axis
    context.fillStyle = color; // color of circle
    circle(centerX, centerY, blockSize / 2, true); // drawing circle
}

Block.prototype.equal = function (otherBlock) { // method for checking if blocks are in the same place
    return this.col === otherBlock.col && this.row === otherBlock.row;
}

function Snake (){ // snake constructor
    this.segments = [ // snake body which consists of blocks
        new Block(7,5), // create block in this position
        new  Block(6,5),
        new Block(5,5)
    ];

    this.direction = 'right'; // move direction
    this.nextDirection = 'right'; // move direction by pressed key
}

Snake.prototype.draw = function(){ // method to draw snake
    for (let i = 0; i < this.segments.length; i++){ // for loop which draw each segment of snake
        this.segments[i].drawSquare('Black');
    }
}

Snake.prototype.move = function(){ // method that moves snake
    let head = this.segments[0]; // position of snake head
    let newHead; // next position of snake head

    this.direction = this.nextDirection; // previous direction of snake move equal direction by pressed button

    if(this.direction === 'right'){ // if it's right direction new head will be in col from right
        newHead = new Block(head.col + 1, head.row);
    }
    else if(this.direction === 'down'){
        newHead = new Block(head.col, head.row + 1); // if it's down direction new head will be in row from bottom
    }
    else if(this.direction === 'left'){ // if it's left direction new head will be in row from left
        newHead = new Block(head.col - 1, head.row);
    }
    else if(this.direction === 'up'){
        newHead = new Block(head.col, head.row - 1); // if it's up direction new head will be in row from top
    }

    if(this.checkCollision(newHead)){ // checking collision of snake
        gameOver(); // if collision is true game will be over
        return;
    }

    this.segments.unshift(newHead); // add "newHead" to the beginning of "segments" array

    if(newHead.equal(apple.position)){ // if "newHead" position equal apple position
        apple.move(); // remove apple
        scoreNum++; // adding score
        score.innerHTML = scoreNum; // showing new score
    }
    else{
        this.segments.pop(); // remove last element of "segments" array
    }
}

Snake.prototype.checkCollision = function(head){ // method to check snake collision with wall and itself
    let leftCollision = (head.col === 0); // checking left wall collision
    let topCollision = (head.row === 0); // checking top wall collision
    let rightCollision = (head.col === widthInBlocks - 1); // checking right wall collision
    let bottomCollision = (head.row === heightInBlocks - 1); // checking bottom wall collision

    let wallCollision = leftCollision || topCollision || rightCollision || bottomCollision; // if collision was, boolean will remain here

    let selfCollision = false; // standard value of self collision

    for(let i  = 0; i < this.segments.length; i++){ // checking self collision
        if(head.equal(this.segments[i])){
            selfCollision = true;
        }
    }

    return wallCollision || selfCollision; // return boolean value of collision
}

Snake.prototype.setDirection = function(newDirection){ // method to set direction of snake
    if(this.direction === 'up' && newDirection === 'down'){ // if chain to prevent movement of snake to reverse direction
        return;
    }
    else if(this.direction === 'left' && newDirection === 'right'){
        return;
    }
    else if(this.direction === 'down' && newDirection === 'up'){
        return;
    }
    else if(this.direction === 'right' && newDirection === 'left'){
        return;
    }

    this.nextDirection = newDirection; // direction of next move
}

function Apple(){ // apple constructor
    this.position = new Block(10,10);
}

Apple.prototype.draw = function(){ // method to draw apple
    this.position.drawCircle('LimeGreen');
}

Apple.prototype.move = function(){ // method to move apple
    let randomCol = Math.floor(Math.random() * (widthInBlocks - 2) + 1); // random number of column
    let randomRow = Math.floor(Math.random() * (heightInBlocks - 2) + 1); // random number of row

    this.position = new Block(randomCol, randomRow); // position of apple object
}

let snake = new Snake(); // create snake
let apple = new Apple(); // create apple

let intervalID = setInterval(function () { // interval function that run every 100 milliseconds
    context.clearRect(0,0, width, height); // clear canvas
    snake.move(); // move snake
    snake.draw(); // draw snake
    apple.draw(); // draw apple
    drawBorder(); // draw border
},100);

let directions = { // object of key code and names
    37: "left",
    38: "up",
    39: "right",
    40: "down"
};

body.addEventListener('keydown', function (event) { // event listener for pressed buttons
    let newDirection = directions[event.keyCode];

    if(newDirection !== undefined){
        snake.setDirection(newDirection);
    }
})






















