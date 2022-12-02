/*
getComputerChoice: a function that will randomly return either "Rock", "Paper" or "Scissors".
Generate random number between 0 and 1 and associate it with a number variable x. 
Update (number) variable x to attend to the following conditions:
    if x is greater than or equal to zero and lower than 0.33, then x shall be redefined to "Rock";
    if x is greater than or equal to 0.33 and lower than 0.66, then x shall be redefined to "Paper";
    if x is greater than or equal 0.66 and lower than 1, then x shall be redefined to "Scissors"

Questions: 
How does the random number between 0 and 1 really work? What are its true intervals?
    Math.random() returns a random number between 0 (inclusive),  and 1 (exclusive)

Do the previous conditions assure equal probability to all possible cases? Isn't the first case less probable due to the way the boundaries are set?
    Option 1, if seeing things correctly, has 33 allocated results.
    Option 2, if seeing things, correctly, also has 33 allocated results.
    Option 3, if seeing things, correctly, also has 33 allocated results.

    Calculations for option 1:
        List of possible outcomes: 0, 0.01, 0.02, 0.03, etc. Thus: 0 + 32 possible results. That is 33 possible results in total.
        If seeing things correctly, logic should be similar boundary [0, 5[: 0, 1, 2, 3, 4: 5 integers counted on that boundary.
    Assuming all calculations for option 2 and option 3 to be similar. Boundaries [0.33, 0.66[, [0.66, 0.99[ .
*/

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

/* 
A function that plays a single round of Rock Paper Scissors. 
It should take two parameters: playerSelection and computerSelection.
It should return a string that declares the winner of the round, like "You lose! Paper beats Rock".
Make function's playerSelection parameter case-insensitive.

The parameter of computerSelection will have to be produced by calling the previously defined function to generate randomly "Rock", "Paper", "Scissors" (getComputerChoice()).
The parameter playerSelection will have to be an input.
So the basic idea, eye-balling it, seems to have to be something like this.

Enter game.
Get player's choice.
Compare player's choice with computer's choice.
    Endgame measure of forces:
        Rock triumphs over scissors.
        Paper triumphs over rock.
        Scissors triumph over paper.

How to structure the previous conditional structure whilst referencing it to the variables playerSelection and computerSelection?
    Do an early taxonomy? That is assign different values to the three possible results. If playerSelection and computerSelection correspond with some values the conditionals applied to the formal taxonomy will immediately apply.

        Assign variables 1, 2, 3 to "rock", "paper", "scissors", respectively.
            if playerSelection is equal to 1 ("rock") and computerSelection is equal to 3 ("scissors"), then print out message like "You have won! ...".
            if playerSelection is equal to 2 ("paper") and computerSelection is equal 1 ("rock"), then print out message like "You have won! ...".
            if playerSelection is equal to 3 ("scissors") and computerSelection is equal to 2 ("paper"), then print out similar message to the previous ones.
            
            and the other way around

            if cS is equal to "rock" and pS is equal to "scissors", print out message like "You have lost ...".
            if cS is equal to "paper" and pS is equal to "rock", similar to above.
            if cS is equal to "scissors" and pS is equal to "paper", similar to above.

    Note: There probably is no need to do the first association between the three possible results and the values 1, 2 and 3.
    
          Furthermore, perhaps the code above could be simplified by using template literals.
          Using template literals one could customize the final message without probable having to write all the previous conditions, right?
          And the question comes back again: is there a need to associate the 3 possible results to variables? 
          Eye-balling it, if using template literals the answer seems to have to be yes... Right?
*/

//Get player's choice. Use prompt(): https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt .

let playerSelection = prompt("Rock, Paper or Scissors?");

//console.log(playerSelection);

// Make function's the playerSelection parameter case-insensitive.

playerSelection = playerSelection.toLowerCase();

console.log(playerSelection);

// Currently the prompt accepts all kinds of inputs, be they equal to Rock, Paper, Scissors or not. Possible point to ammend later on.
// Possible ammend to that problem: conditionals.


// Assure computerSelection is a variable of global scope. Probably not the most correct thing to do, but...

let computerSelection = getComputerChoice();

computerSelection = computerSelection.toLowerCase();

console.log(computerSelection);

// Delineate game-round function.



function playRound(playerSelection, computerSelection) {

    console.log(computerSelection);
    console.log(playerSelection);

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
// console.log(playRound(playerSelection, computerSelection));


/* 
There is a need to reask the player for a new choice, upon game restarting. 
Function below just assumed the same playerSelection for all the five attempts.
So one has to find a way to integrate the prompt inside the game or the playRound functions.

/*

// console.log(playRound(playerSelection, computerSelection));


/* Let's just try to iterate this function without keeping score.

function game() {

    for (let i = 0; i < 5; i++) {
        playRound(playerSelection, computerSelection);
    }

}

console.log(game());
/*



/* 
function game(): five rounds, keeping score and reporting winner or loser at the end.

Define a variable i that iterates code for five times.
Keep score: define number variable for each part to be added if the respective part wins a round.
*/

/*
let a = 0;
let b = 0;

function playRound(playerSelection, computerSelection) {

    if (playerSelection == "rock" && computerSelection == "scissors") {
        return a = 1;
    } else if (playerSelection == "paper" && computerSelection == "rock") { 
        return a = 1;
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        return a = 1;
    } 
    
      else if (computerSelection == "rock" && playerSelection == "scissors") {
        return b = 1;
    } else if (computerSelection == "paper" && playerSelection == "rock") {
        return b = 1;
    } else if (computerSelection == "scissors" && playerSelection == "paper") {
        return b = 1;
    }
}

console.log(playRound(playerSelection, computerSelection));
console.log(a);
console.log(b);


function game() {

    for (let i = 0; i < 5; i++) {
        playRound(playerSelection, computerSelection);
    }

    if (a > b) {
        return "Congratulations! You've won!";
    }   else if (a < b) {
        return "Try again... A computer has beaten you..."
    }   else {
        return "It's a draw!"
    }
}

console.log(game());

*/
