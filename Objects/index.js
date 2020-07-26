// 1 //
let scores = {
    Andrey: 0,
    Ivan: 0,
    Kirill: 0,
    Egor: 0,
    Oleg: 0,
    Anton: 0
}
for (let i = 0; i < 11; i++){
    getPlayer();
}

function getPlayer() {
    let playerNumber = Math.floor(Math.random() * 6);
    getScore(playerNumber);
}

function getScore(playerNumber) {
    let playersArr = ['Andrey', 'Ivan', 'Kirill', 'Egor', 'Oleg', 'Anton'];
    let score = Math.floor(Math.random() * 5);
    scores[playersArr[playerNumber]] += score;
}

console.log(scores);

// 2 //

let myCrazyObject = {
    "name": "A ridiculous object",
    "some array": [7, 9, { purpose: "confusion", number: 123 }, 3.3],
    "random animal": "Banana Shark"
};

console.log(myCrazyObject["some array"][2].number);