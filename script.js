function getComputerChoice() {
    let rind = Math.floor(Math.random() * 3) + 1;
    switch (rind) {
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissors";
    }
}
    

function playRound(playerSelection, computerSelection) {
    playerSelectionL = playerSelection.toLowerCase();
    if (playerSelectionL == computerSelection) {
        return "Draw";
    }
    if (playerSelectionL == "rock") {
        if (computerSelection == "paper") {
            return "You Lose! Paper beats Rock";
        }
        else {
            return "You Win! Rock beats Scissors";
        }
    } else if (playerSelectionL == "paper") {
        if (computerSelection == "rock") {
            return "You Win! Paper beats Rock";
        }
        else {
            return "You Lose! Scissors beats Paper";
        }
    } else {
        if (computerSelection == "paper") {
            return "You Win! Scissors beats paper";
        }
        else {
            return "You Lose! Rock beats Scissors";
        }
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
  
    for (let round = 1; round <= 5; round++) {
      console.log(`Round ${round}:`);
  
      const playerSelection = prompt("Enter your choice: rock, paper, or scissors");
      const computerSelection = getComputerChoice();
  
      console.log(`You chose: ${playerSelection}`);
      console.log(`Computer chose: ${computerSelection}`);
  
      const result = playRound(playerSelection, computerSelection);
      console.log(result);
  
      if (result.includes("Win")) {
        playerScore++;
      } else if (result.includes("Lose")) {
        computerScore++;
      }
    }
  
    console.log("Game over!");
    console.log(`Player score: ${playerScore}`);
    console.log(`Computer score: ${computerScore}`);
  
    if (playerScore > computerScore) {
      console.log("You win the game!");
    } else if (playerScore < computerScore) {
      console.log("You lose the game!");
    } else {
      console.log("It's a tie!");
    }
  }