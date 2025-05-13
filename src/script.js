// Game will be played against computer.

// The computer generate a random value between Rock, Paper or Scissors

// User choose between Rock, Paper and Scissors

// Compare Computer choice and User choice

// Rock beats Scissors
// Scissors beats Paper
// Paper beats Rock

// The game has 5 rounds


// computer choice logic

const choice = ["rock", "paper", "scissors"];
function getComputerChoice() {
    let randomNum = Math.floor(Math.random()*3) + 1;
    return choice[randomNum - 1];
}

// console.log(`CPU choice: ${getComputerChoice()}`);


// human choice logic
function getHumanChoice() {
    let userChoice = prompt("Choose: Rock, Paper or Scissors?");
    return userChoice.toLowerCase();
}

// console.log(`Human Choice: ${getHumanChoice()}`);


// Scores
let cpuScore = 0;
let humanScore = 0;

// Round logic
function playRound(humanChoice, cpuChoice) {
    if(humanChoice === cpuChoice) {
        return `Tied! Both of you choose ${humanChoice}`
    }

    if(humanChoice === "rock") {
        if(cpuChoice === "paper") {
            cpuScore++;
            return `You loose! ${cpuChoice} beats ${humanChoice}`;
        }
        if(cpuChoice === "scissors") {
            humanScore++;
            return `You Won! ${humanChoice} beats ${cpuChoice}`
        } 
    }

    if(humanChoice === "paper") {
        if(cpuChoice === "scissors") {
            cpuScore++;
            return `You loose! ${cpuChoice} beats ${humanChoice}`;
        }
        if(cpuChoice === "rock") {
            humanScore++;
            return `You Won! ${humanChoice} beats ${cpuChoice}`
        } 
    }

    if(humanChoice === "scissors") {
        if(cpuChoice === "rock") {
            cpuScore++;
            return `You loose! ${cpuChoice} beats ${humanChoice}`;
        }
        if(cpuChoice === "paper") {
            humanScore++;
            return `You Won! ${humanChoice} beats ${cpuChoice}`
        } 
    }
}

// Game logic 
function playGame() {
    for(let i = 0; i < 5; i++) {
        let userSelection = getHumanChoice();
        let cpuSelection = getComputerChoice();
        console.log(`Resultado: ${playRound(userSelection, cpuSelection)}.`);
        console.log(`Human: ${humanScore} e CPU: ${cpuScore}`);
    }

    console.log(`Final result:
        Human: ${humanScore}
        CPU: ${cpuScore}`);
}

// Game execution
playGame();