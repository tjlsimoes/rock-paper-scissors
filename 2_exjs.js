function getComputerChoice () {
    let x = Math.random();
    if (x >= 0 && x <= 0.33) {
        x = "rock";
        return x;
    } else if (x >= 0.33 && x < 0.66) {
        x = "paper";
        return x;
    } else {
        x = "scissors";
        return x;
    }
}

function playRound(playerSelection, computerSelection) {

    playerSelection = prompt("Rock, Paper or Scissors?");
    playerSelection = playerSelection.toLowerCase();

    computerSelection = getComputerChoice();
    computerSelection = computerSelection.toLowerCase();

    console.log(playerSelection);
    console.log(computerSelection);

    if (playerSelection == "rock" && computerSelection == "scissors") {
        return "You have won! Rock triumphs over scissors!"
    } else if (playerSelection == "paper" && computerSelection == "rock") { 
        return "You have won! Paper triumphs over rock!"
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        return "You have won! Scissors triumph over paper!"
    } 
    
      else if (computerSelection == "rock" && playerSelection == "scissors") {
        return "You have lost! Rock triumphs over scissors!"
    } else if (computerSelection == "paper" && playerSelection == "rock") {
        return "You have lost! Paper triumphs over rock!"
    } else if (computerSelection == "scissors" && playerSelection == "paper") {
        return "You have lost! Scissors triumph over paper!"
    } else {
        return "It's a draw!"
    }
}

function keepScore (you, comp) {
    you = 0;
    comp = 0;

    let result = playRound().substring(0, 13);

    console.log(result);

    if (result === "You have lost" ) {
        comp += 1;
        return `You: ${you}. Computer: ${comp}.`
    } else if (result === "You have won!" ) {
        you += 1;
        return `You: ${you}. Computer: ${comp}.`
    } else {
        return `You: ${you}. Computer: ${comp}.`
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        playRound();
        keepScore();
    }
}

console.log(game());
// The question then is: how to keep track of score?

/* 
Play the game five times in a row. 
Without keeping score, but information popping up on console panel.

console.log(playRound());
console.log(playRound());
console.log(playRound());
console.log(playRound());
console.log(playRound());

Same as: 

function game() {
    for (let i = 0; i < 5; i++) {
        console.log(playRound());
    }
}
*/


