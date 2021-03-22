let chosenNum = document.querySelector("#userNum");
let button = document.querySelector("#button");
let outputNode = document.querySelector("#output");
let playButoon = document.querySelector("#playButton");
let gameContainer = document.querySelector("#game");
let levelValue = document.querySelector("#levelValue");
let triesLeft = document.querySelector("#triesLeft");
let reset = document.querySelector("#reset");

let startNum=0;
let endNum=0;
let tryCounter=0;
let tries = 0;
let randNumber = 0;

reset.style.visibility = "hidden";
gameContainer.style.visibility = "hidden";

playButoon.addEventListener('click', chosingLevel);
// reset.addEventListener('click', chosingLevel);

function chosingLevel(){
    let selectedLevel = document.querySelector(".selectedLevel").value;
    let level = document.querySelector(".selectedLevel");
    level.style.visibility = "hidden";
    playButoon.style.visibility = "hidden";
    gameContainer.style.visibility = "visible";

    if (selectedLevel === "level1") {
        startNum = 1;
        endNum = 10;
        tries = 5;
        tryCounter = 5;
        levelValue.innerHTML = "You've chosen level 1: 1-10";
    }
    else if(selectedLevel === "level2"){
        startNum = 1;
        endNum = 50;
        tries = 7;
        tryCounter=7;
        levelValue.innerHTML = "You've chosen level 2: 1-50";
    }
    else if(selectedLevel === "level3"){
        startNum = 1;
        endNum = 100;
        tries = 9;
        tryCounter = 9;
        levelValue.innerHTML = "You've chosen level 3: 1-100";
    }
    triesLeft.innerHTML = `You have ${tries} from ${tryCounter} tries left`;

    //generate random number
    randNumber = Math.random()*endNum + 1;
    randNumber = Math.floor(randNumber);
    console.log(randNumber);
}

button.addEventListener('click', gameLogic);

function gameLogic(){

    outputNode.innerHTML = "The number you've chosen is: " + chosenNum.value;

    //convert the input number from text to number
    let myNumber = parseInt(chosenNum.value, 10);

    // let result = document.querySelector("#result");

    let flag = false; 
    if (myNumber > endNum || myNumber < startNum){
        flag = true;

        let result = document.createElement("P");
        result.innerText = "Incorrect range!";
        document.body.appendChild(result);

        console.log(endNum);

    }

    if (myNumber === randNumber && !flag){
        document.querySelector("#level").style.visibility = "hidden";
        gameContainer.style.visibility = "hidden";
        tries--;
        triesLeft.innerHTML = `You have ${tries} from ${tryCounter} tries left`;

        let result = document.createElement("P");
        result.innerHTML = "You've guessed the number!";
        result.style.backgroundColor = "green";
        document.body.appendChild(result);

        // reset.style.visibility = "visible";


    }
    else if (myNumber > randNumber && !flag){
        
        let result = document.createElement("P");
        result.innerHTML = `You've chosen ${myNumber}, go lower!`;
        result.style.backgroundColor = "red";
        document.body.appendChild(result);
        
        tries--;
        triesLeft.innerHTML = `You have ${tries} from ${tryCounter} tries left`;


    }
    else if (myNumber < randNumber && !flag){
        
        let result = document.createElement("P");
        result.innerHTML = `You've chosen ${myNumber}, go higher!`;
        result.style.backgroundColor = "red";
        document.body.appendChild(result);

        tries--;
        triesLeft.innerHTML = `You have ${tries} from ${tryCounter} tries left`;


    }
}
