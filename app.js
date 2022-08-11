let computerChoice = "";


function getComputerChoice() {
    const random = Math.floor(Math.random() * 3);
    switch (random) {
        case 0: computerChoice = "rock";
            break;
        case 1: computerChoice = "paper";
            break;
        case 2: computerChoice = "scissor";
            break;
    }
console.log("Computer has made a decision: " + computerChoice);
}

getComputerChoice();
// function playRound(playerSelection, computerSelection) {
//     if (playerSelection > computerSelection &&
// }