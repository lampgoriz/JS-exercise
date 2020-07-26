// 1 //
let alphabet = "abcdefghijklmnopqrstuvwxyz";
let phrase = "";

for (let i = 0; i < 15; i++){
    let letterNumber = Math.floor(Math.random()*26);
    let randomForSpace = Math.floor(Math.random()*10);

    if(randomForSpace % 2){
        phrase += " ";
    }
    else {
        phrase += alphabet[letterNumber];
    }
}
console.log(phrase);

// 2 //

var input = "javascript is awesome";
var output = "";

for(let i = 0; i < input.length; i++){
    if(input[i] == 'a'){
        output += 4;
    }
    else if(input[i] == 'e'){
        output += 3;
    }
    else if(input[i] == 'i'){
        output += 1;
    }
    else if(input[i] == 'o'){
        output += 0;
    }
    else {
        output +=input[i];
    }
}

console.log(output);

