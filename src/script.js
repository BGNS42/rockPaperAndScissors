// Game will be played against computer.

// The computer generate a random value between Rock, Paper or Scissors

// User choose between Rock, Paper and Scissors

// Compare Computer choice and User choice

// Rock beats Scissors
// Scissors beats Paper
// Paper beats Rock


// computer choice logic

const choice = ["Rock", "Paper", "Scissors"];
function getComputerChoice() {
    let randomNum = Math.floor(Math.random()*3) + 1;
    return choice[randomNum - 1];
}

// console.log(`CPU choice: ${getComputerChoice()}`);

// human choice logic
function getHumanChoice() {
    let userChoice = prompt("Choose: Rock, Paper or Scissors?");
    return userChoice;
}


// console.log(`Human Choice: ${getHumanChoice()}`);