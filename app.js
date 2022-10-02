let roundWins = 0;
const displayRoundWins = document.querySelector('#roundWins');
let roundLosses = 0;
const displayRoundLosses = document.querySelector('#roundLosses');
let totalRounds = 5;
const displayTotalRounds = document.querySelector('#numRounds')
let currRound = 1;
const displayCurrRound = document.querySelector('#currRound');
const textLog = document.querySelector('.textLog');
const buttons = document.querySelectorAll('.buttons');
const btnIncrementRound = document.querySelector('#incrementRound');
const btnDecrementRound = document.querySelector('#decrementRound');


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
function playRound(playerSelection) {
    let computerSelection = getComputerChoice();
    displayRound();
    displayRoundWinner(evaluateRound(playerSelection, computerSelection));
    currRound++;
}

function displayRound() {
    let currentRoundText = document.createElement('p');
    currentRoundText.textContent = `******* Round [${currRound}] out of [${totalRounds}] *******`;
    textLog.appendChild(currentRoundText);
    displayCurrRound.textContent = currRound;
}0

function displayRoundWinner(func) {
    let roundWinText = document.createElement('p');
    roundWinText.textContent = func;
    textLog.appendChild(roundWinText);

}

// this function executes when there is a tie game and returns a string
function tieGame(yourString) {
    return `Tie. Both players chose [${yourString}].`;
}

// this function executes if player wins and returns a string
function playerWin(yourString, cpuString){
    roundWins++;
    displayRoundWins.textContent = roundWins;
    return `ROUND WON! [${yourString}] beats [${cpuString}]!`;
}

//this function executes if the computer wins and returns a string
function playerLose(yourString, cpuString){
    roundLosses++;
    displayRoundLosses.textContent = roundLosses;
    return `Round lost. [${yourString}] loses to [${cpuString}].`;
}

// game winner display message
function displayWinner(func) {
    const winnerText = document.createElement('h3');
    winnerText.textContent = func;
    winnerText.style.backgroundColor = 'yellow';
    textLog.appendChild(winnerText);
}
//this function executes to determine and declare the final winner after a game is finished
function whoWon() {
    if (roundWins === roundLosses) {
        return 'FINAL RESULT....game was a tie';
    } else if (roundWins > roundLosses) {
        displayRoundWins.style.backgroundColor = 'yellow';
        return `FINAL RESULT....YOU WIN [${roundWins}] to [${roundLosses}]!!`;
    } else {
        displayRoundLosses.style.backgroundColor = 'yellow';
        return `FINAL RESULT....You lost [${roundWins}] to [${roundLosses}].`;
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

btnIncrementRound.addEventListener('click', function(e) {
    totalRounds++;
    displayTotalRounds.textContent = totalRounds;
    currRound = 1;
    displayCurrRound.textContent = currRound;
    roundWins = 0;
    displayRoundWins.textContent = roundWins;
    displayRoundWins.style.backgroundColor = '';
    roundLosses = 0;
    displayRoundLosses.textContent = roundLosses;
    displayRoundLosses.style.backgroundColor = '';
    textLog.textContent = "text log:";
})

btnDecrementRound.addEventListener('click', function(e) {
    totalRounds--;
    if (totalRounds < 1) {totalRounds = 1};
    displayTotalRounds.textContent = totalRounds;
    currRound = 1;
    displayCurrRound.textContent = currRound;
    roundWins = 0;
    displayRoundWins.textContent = roundWins;
    displayRoundWins.style.backgroundColor = '';
    roundLosses = 0;
    displayRoundLosses.textContent = roundLosses;
    displayRoundLosses.style.backgroundColor = '';
    textLog.textContent = "text log:";
})

buttons.forEach(button => button.addEventListener('click' , function(e) {
    if (currRound > totalRounds) {
        displayWinner(whoWon());
        return;
    }
    let playerSelection = e.target.id;
    playRound(playerSelection);
}));