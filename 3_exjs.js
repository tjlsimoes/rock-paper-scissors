let you = 0;
let comp = 0;
let PlayerSelection;
const div = document.querySelector("#result");


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




function playRound(playersChoice, computerSelection) {

    computerSelection = getComputerChoice();
    computerSelection = computerSelection.toLowerCase();

    playersChoice = playerSelection;

    if (playerSelection == "rock" && computerSelection == "scissors") {
        
        you += 1;

        if (you === 5) {

            let compfinal = comp;
            comp = 0;
            you = 0;

            return   div.textContent = `Congratulations! You've won! You: 5. Computer: ${compfinal}.`;
        }   else if (comp === 5) {

            let youfinal = you;
            comp = 0;
            you = 0;

            return div.textContent = `Try again... A computer has beaten you... You: ${youfinal}. Computer: 5.`;
        }  else {
            return div.textContent = `You have won! Rock triumphs over scissors! You: ${you}. Computer: ${comp}.`;
        }
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        
        you += 1;

        if (you === 5) {

            let compfinal = comp;
            comp = 0;
            you = 0;

            return   div.textContent = `Congratulations! You've won! You: 5. Computer: ${compfinal}.`;
        }   else if (comp === 5) {

            let youfinal = you;
            comp = 0;
            you = 0;

            return div.textContent = `Try again... A computer has beaten you... You: ${youfinal}. Computer: 5.`;
        }   else {
            return div.textContent = `You have won! Paper triumphs over rock! You: ${you}. Computer: ${comp}.`;
        }
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        
        you += 1;
        
        if (you === 5) {

            let compfinal = comp;
            comp = 0;
            you = 0;

            return   div.textContent = `Congratulations! You've won! You: 5. Computer: ${compfinal}.`;
        }   else if (comp === 5) {

            let youfinal = you;
            comp = 0;
            you = 0;
            
            return div.textContent = `Try again... A computer has beaten you... You: ${youfinal}. Computer: 5.`;
        }   else {
            return div.textContent = `You have won! Scissors triumph over paper! You: ${you}. Computer: ${comp}.`;
        }
    } 
    

      else if (computerSelection == "rock" && playerSelection == "scissors") {
        
        comp += 1;
        
        if (you === 5) {

            let compfinal = comp;
            comp = 0;
            you = 0;

            div.textContent = `Congratulations! You've won! You: 5. Computer: ${compfinal}.`
            return   div.textContent = `Congratulations! You've won! You: ${you}. Computer: ${comp}.`;
        }   else if (comp === 5) {

            let youfinal = you;
            comp = 0;
            you = 0;

            return div.textContent = `Try again... A computer has beaten you... You: ${youfinal}. Computer: 5.`;
        }   else {
            return div.textContent = `You have lost! Rock triumphs over scissors! You: ${you}. Computer: ${comp}.`;
        }
    } else if (computerSelection == "paper" && playerSelection == "rock") {
        
        comp += 1;

        if (you === 5) {

            let compfinal = comp;
            comp = 0;
            you = 0;

            return   div.textContent = `Congratulations! You've won! You: 5. Computer: ${compfinal}.`;
        }   else if (comp === 5) {

            let youfinal = you;
            comp = 0;
            you = 0;

            return div.textContent = `Try again... A computer has beaten you... You: ${youfinal}. Computer: 5.`;
        }   else {
            return div.textContent = `You have lost! Paper triumphs over rock! You: ${you}. Computer: ${comp}.`;
        }
    } else if (computerSelection == "scissors" && playerSelection == "paper") {

        comp += 1;

        if (you === 5) {

            let compfinal = comp;
            comp = 0;
            you = 0;

            return   div.textContent = `Congratulations! You've won! You: 5. Computer: ${compfinal}.`;
        }   else if (comp === 5) {

            let youfinal = you;
            comp = 0;
            you = 0;

            return div.textContent = `Try again... A computer has beaten you... You: ${youfinal}. Computer: 5.`;
        }   else {
            return div.textContent = `You have lost! Scissors triumph over paper! You: ${you}. Computer: ${comp}.`;
        }
    } else {
        return div.textContent = `It's a draw! You: ${you}. Computer: ${comp}.`;
    }
    

}



const buttons = document.querySelectorAll("button");

    buttons.forEach((button) => {

        button.addEventListener("click", () => {
            playerSelection = button.id;
            playRound();
        });
    });
