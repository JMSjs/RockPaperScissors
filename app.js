let roundWins = 0;
let roundLosses = 0;
// let rock = document.querySelector('#rock');
// let paper = document.querySelector('#paper');
// let scissors = document.querySelector('#scissors');
let buttons = document.querySelectorAll('.buttons');

// this function creates a random hand for the computer
function getComputerChoice() {
    let computerChoice = "";
    const random = Math.floor(Math.random() * 3);
    switch (random) {
        case 0: computerChoice = "rock";    
            break;
        case 1: computerChoice = "paper";
            break;
        case 2:  computerChoice = "scissors";
            break;
    }
    return computerChoice;
}

// this function executes 1 complete round of R.P.S.
function playRound() {
    buttons.forEach(button => button.addEventListener('click' , function(e) {
        let playerSelection = e.target.id;
        let computerSelection = getComputerChoice();
        evaluateRound(playerSelection, computerSelection);
    }));
}

// this function executes an entire game
function game() {
    for (i = 1; i <= 5; i++) {
        console.log(" ");
        console.log(`******* Round [${i}] out of [5] *******`)
        console.log(playRound());
    }
    whoWon();
}

// this function executes when there is a tie game and returns a string
function tieGame(yourString) {
    return `     Tie. Both players chose [${yourString}].`;
}

// this funciton executes if player wins and returns a string
function playerWin(yourString, cpuString){
    roundWins++;
    return `     ROUND WON! [${yourString}] beats [${cpuString}]!`;
}

//this function executes if the computer wins and returns a string
function playerLose(yourString, cpuString){
    roundLosses++;
    return `     Round lost. [${yourString}] loses to [${cpuString}].`;
}

//this function executes to determine and declare the final winner after a game is finished
function whoWon() {
    if (roundWins === roundLosses) {
        console.log("");
        console.log("========================================");
        console.log("FINAL RESULT....game was a tie");
        console.log("========================================");
    } else if (roundWins > roundLosses) {
        console.log("");
        console.log("========================================");
        console.log(`FINAL RESULT....YOU WIN [${roundWins}] to [${roundLosses}]!!`);
        console.log("========================================");
    } else {
        console.log("");
        console.log("========================================");
        console.log(`FINAL RESULT....You lost [${roundWins}] to [${roundLosses}].`);
        console.log("========================================");
    }
}

// this function evaluates if player's choice wins or loses the round
function evaluateRound(yourString, cpuString) {
    if (yourString == cpuString) {
        return tieGame(yourString);
    } else if (yourString == "rock") {
        switch (cpuString) {
            case "paper": return playerLose(yourString, cpuString);    
                break;
            case "scissors": return playerWin(yourString, cpuString);
                break;
        }
    } else if (yourString == "paper") {
        switch (cpuString) {
            case "scissors": return playerLose(yourString, cpuString);    
                break;
            case "rock": return playerWin(yourString, cpuString);
                break;
        }
    } else {
        switch (cpuString) {
            case "rock": return playerLose(yourString, cpuString);    
                break;
            case "paper": return playerWin(yourString, cpuString);
                break;
        }
    }
}

game();