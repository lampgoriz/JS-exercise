function Car(x, y, speed) {
    this.x = x;
    this.y = y;
    this.speed = speed;
}

let tesla = new Car(120,150, 10);
let nisan = new Car(50, 50, 20);

function drawCar(car) {
    let img = document.createElement('img');
    img.src = "img/car.png";
    img.style.cssText = 'position: absolute; top:' + car.y + "px;" + "left:" +  car.x + "px;";
    let body = document.body;
    body.append(img);
    return img;
}

let returnCar = drawCar(tesla);
returnCar = drawCar(nisan);

Car.prototype.moveLeft = function (speed) {
    console.log(speed);
    this.x -= speed;
    returnCar.style.cssText = 'position: absolute; top:' + this.y + "px;" + "left:" +  this.x + "px;";
}
Car.prototype.moveTop = function (speed) {
    this.y -= speed;
    returnCar.style.cssText = 'position: absolute; top:' + this.y + "px;" + "left:" +  this.x + "px;";
}
Car.prototype.moveRight = function () {
    let randomSpeed = Math.floor(Math.random() * 5);
    this.x += 5;
    returnCar.style.cssText = 'position: absolute; top:' + this.y + "px;" + "left:" +  this.x + "px;";
}
Car.prototype.moveBottom = function (speed) {
    this.y += speed;
    returnCar.style.cssText = 'position: absolute; top:' + this.y + "px;" + "left:" +  this.x + "px;";
}

setInterval(tesla.moveRight, 30);
setInterval(nisan.moveRight, 30);
//
// function carsMove() {
//     tesla.moveRight();
//     nisan.moveRight();
// }