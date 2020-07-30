function Car(x, y, speed) { // car constructor
    this.x = x; // position by x axis
    this.y = y; // position by y axis
    this.speed = speed; // speed of car
}

let tesla = new Car(120,150, 10); // create tesla object
let nisan = new Car(50, 50, 20); // create nisan object

function drawCar(car) { // function to show picture of car
    let img = document.createElement('img'); // create img element
    img.src = "img/car.png"; // add source to img
    img.style.cssText = 'position: absolute; top:' + car.y + "px;" + "left:" +  car.x + "px;"; // add style to img
    let body = document.body; // get body tag
    body.append(img); // add img to body
    return img; // return img to variable
}

let returnCar = drawCar(tesla); // create tesla img element in HTML
returnCar = drawCar(nisan); // create nisan img element in HTML

Car.prototype.moveLeft = function (speed) { // function that move car object to left for distance equal speed
    this.x -= speed;
    returnCar.style.cssText = 'position: absolute; top:' + this.y + "px;" + "left:" +  this.x + "px;";
}
Car.prototype.moveTop = function (speed) { // function that move car object to top for distance equal speed
    this.y -= speed;
    returnCar.style.cssText = 'position: absolute; top:' + this.y + "px;" + "left:" +  this.x + "px;";
}
Car.prototype.moveRight = function () { // function that move car object to right for random distance between 0 and 5px
    let randomSpeed = Math.floor(Math.random() * 5);
    this.x += randomSpeed;
    returnCar.style.cssText = 'position: absolute; top:' + this.y + "px;" + "left:" +  this.x + "px;";
}
Car.prototype.moveBottom = function (speed) { // function that move car object to bottom for distance equal speed
    this.y += speed;
    returnCar.style.cssText = 'position: absolute; top:' + this.y + "px;" + "left:" +  this.x + "px;";
}
