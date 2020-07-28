// 1 //
function multiply(num1, num2) {
    return num1 * num2;
}

function  add(num1, num2) {
    return num1 + num2;
}

console.log("result = " + add(multiply(2,5),2));

// 2 // 
arr1 = [1,2,3];
arr2 = [1,2,3];
areArraysSame(arr1, arr2);

function areArraysSame(arr1, arr2) {
    if (arr1.length != arr2.length){
        console.log("arrays are different lengths");
        return;
    }
    for(let i = 0; i < arr1.length; i++){
        console.log("i = " + i);
        if (arr1[i] != arr2[i]){
            return console.log(false);
        }
    }
    console.log(true);
}


