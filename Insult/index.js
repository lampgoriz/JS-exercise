let arrWords = ['Piece', 'Face', 'Nose'];
let arrAdjectives = ['Stupid', 'Fat', 'Junky'];
let arrAnimals = ['Monkey', 'Donkey', 'Pig', 'Cockroach'];

let Word = arrWords[Math.floor(Math.random()*arrWords.length)];
let Adjective = arrAdjectives[Math.floor(Math.random()*arrAdjectives.length)];
let Animal = arrAnimals[Math.floor(Math.random()*arrAnimals.length)];

let Word2 = arrWords[Math.floor(Math.random()*arrWords.length)];
let Adjective2 = arrAdjectives[Math.floor(Math.random()*arrAdjectives.length)];
let Animal2 = arrAnimals[Math.floor(Math.random()*arrAnimals.length)];

let inuslt = "You are " + Word + " of " + Adjective + " " + Animal;
let arrInsult = ['You are', Word2, 'of', Adjective2, Animal2];

console.log("Version 1 : " + inuslt);
console.log("Version 2 : " + arrInsult.join(" "));

let arrNumbers = [3, 2, 1];

let compareNumbers = arrNumbers.join(" is bigger then ");

console.log(compareNumbers);


