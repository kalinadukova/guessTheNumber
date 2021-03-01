let chosenNum = document.querySelector("#userNum");
let button = document.querySelector("#button");
let outputNode = document.querySelector("#output");

//generate random number
let randNumber = Math.random()*10 + 1;
randNumber = Math.floor(randNumber);
console.log(randNumber);

button.addEventListener('click', gameLogic);

function gameLogic(){
    outputNode.innerHTML = "The number you've chosen is: " + chosenNum.value;

    //convert the input number from text to number
    let myNumber = parseInt(chosenNum.value, 10);

    let result = document.querySelector("#result");

    let flag = false; 
    if (myNumber > 10 || myNumber < 1){
        flag = true;
        result.innerHTML = "Number must be between 1 and 10!";
    }

    if (myNumber === randNumber && !flag){
        result.innerHTML = "You've guessed the number!";
        result.style.backgroundColor = "green";
    }
    else if (myNumber > randNumber && !flag){
        result.innerHTML = "Go lower!";
        result.style.backgroundColor = "red";
    }
    else if (myNumber < randNumber && !flag){
        result.innerHTML = "Go higher!";
        result.style.backgroundColor = "red";
    }
}
