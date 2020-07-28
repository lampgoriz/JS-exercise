let map = document.getElementById('map'); // get map
let width = map.offsetWidth; // width of map
let height = map.offsetHeight;  // height of map
let clicks = 0; // counter of clicks to win

let target = { // get random position for treasure
    x: getRandomNumber(width),
    y: getRandomNumber(height),
}

function getRandomNumber(number){
    return Math.floor(Math.random() * number); // return position of treasure
}

map.addEventListener('click', function(event){ // listener to find out how close the user clicked to the treasure
    clicks++; // increment clicks counter

    if(clicks > 50){
        alert("GAME OVER. You spent all clicks");
        map.style.display = "none";
    }

    let distance = distanceToTreasure(event, target); // distance between treasure and click
    let message = document.getElementById('distance'); // message that notifies the user how close he clicked to the treasure
    message.innerHTML =  distanceMessage(distance) + ". Clicks remaining : " + (50 - clicks); // showing the message

    if(distance < 8){ // if distance to treasure less than 8px user win
        alert("Found the treasure in ");
    }
});

function distanceToTreasure(event, target){
    let diffX = event.offsetX - target.x; // distance between treasure and click by x axis
    let diffY = event.offsetY - target.y; // distance between treasure and click by y axis
    return Math.sqrt((diffX * diffX) +(diffY * diffY)); // distance between treasurer and click by the Pythagorean Theorem
}

function distanceMessage(distance) { // variants of message depends on distance
    if(distance < 10){
        return "Really hot";
    }
    else if(distance < 20){
        return "Hot";
    }
    else if(distance < 40){
        return "Warm";
    }
    else if(distance < 80){
        return "Cold";
    }
    else if(distance < 160){
        return 'Really cold';
    }
    else {
        return "Freezing";
    }
}

