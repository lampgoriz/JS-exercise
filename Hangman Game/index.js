let wordsArr = ['desk', 'kitchen', 'monkey', 'earthquake', 'math', 'pancake'];
let word = wordsArr[Math.floor(Math.random()* wordsArr.length)];
let answerArr = [];
let remainingLatter = word.length;
console.log(word);

for (let i = 0; i < word.length; i++){
    answerArr[i] = "_";
}

while (remainingLatter > 0){
    alert(answerArr.join(" "));
    let guess = prompt("Wright latter, or click Cancel to stop playing");

    if(guess == null){
        break;
    }
    else if(guess.length !== 1){
        alert("Please wright only one latter");
    }
    else {
        for(let i = 0; i < word.length; i++){
            if(word[i] == guess){
                answerArr[i] = guess;
                remainingLatter -= 1;
            }
        }
    }
}
if(remainingLatter == 0){
    alert(answerArr.join(""));
    alert("You are win, right word is - " + word)
}

