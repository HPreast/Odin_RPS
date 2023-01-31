let choices = ['ROCK', 'PAPER', 'SCISSORS'];

function getComputerChoice(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}

function playRound(playerSelection, computerSelection) {
    if (computerSelection == playerSelection.toUpperCase()) {
        return 'Draw!';
    } else if (playerSelection.toUpperCase() == choices[0]) {
        if (computerSelection == choices[1]) {
            return `You Lose, ${computerSelection} beats ${playerSelection}!`;
        } else if (computerSelection == choices[2]) {
            return `You Win! ${playerSelection} beats ${computerSelection}!`;
        }
    } else if (playerSelection.toUpperCase() == choices[1]) {
        if (computerSelection == choices[2]) {
            return `You Lose, ${computerSelection} beats ${playerSelection}!`;
        } else if (computerSelection == choices[0]) {
            return `You Win! ${playerSelection} beats ${computerSelection}!`;
        }
    } else if (playerSelection.toUpperCase() == choices[2]) {
        if (computerSelection == choices[0]) {
            return `You Lose, ${computerSelection} beats ${playerSelection}!`;
        } else if (computerSelection == choices[1]) {
            return `You Win! ${playerSelection} beats ${computerSelection}!`;
        }
    }
}

const playerSelection = 'rock';
const computerSelection = getComputerChoice(choices);
console.log(getComputerChoice(choices));
console.log(playRound(playerSelection, computerSelection));