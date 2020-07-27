let wordsArr = ['desk', 'kitchen', 'monkey', 'earthquake', 'math', 'pancake']; // array of words to solve
let word = wordsArr[Math.floor(Math.random()* wordsArr.length)]; // random word from array
let answerArr = []; // array for answer
let remainingLetter = word.length; // number of letters remaining to find
let tryLeft = word.length + 2; // number of attempts to guess the letter

for (let i = 0; i < word.length; i++){
    answerArr[i] = "_"; // answer array with dashes
}

while (remainingLetter > 0 && tryLeft > 0){ // loop to find out word
    alert(answerArr.join(" ")); // shows a word consisting of dashes instead of letters
    alert(tryLeft); // shows a number of attempts to guess the letter
    let guess = prompt("Wright latter, or click Cancel to stop playing").toLowerCase(); // input for writing letter

    if(guess == null){ // if user click OK without any input
        break;
    }
    else if(guess.length !== 1){ // if user click OK with more or less than 1 typed symbol
        alert("Please wright only one latter");
    }
    else { // if user typed only 1 symbol
        for(let i = 0; i < word.length; i++){ // loop
            if(word[i] == guess){ //checking if a symbol are in word
                if(answerArr[i] == guess){ // checking repeating of letters
                    alert("You already wrote this letter"); // alert if the user re-wrote the letter
                    tryLeft++; // add to compensate for further subtraction
                }
                else {
                    answerArr[i] = guess; // add to answerArr correct letter
                    remainingLetter -= 1; // subtract 1 of remaining letters
                }
            }
        }
        tryLeft--; // subtract number of guessing try
    }
}

if(remainingLetter == 0){ // if user guessed word show win alert
    alert(answerArr.join(""));
    alert("You are win, right word is - " + word)
}

