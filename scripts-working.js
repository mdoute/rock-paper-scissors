
// Get Computer choice
function getComputerChoice() {

    // Generate a random number between 0-0.99 with Math.random
    // Multiply the random number by 3
    // Round the random number down to the nearest whole number, either 0, 1, or 2

    var computerChoice = Math.floor(Math.random() * 3);

    // Assign Rock, Paper, or Scissors based on the random number

    if (computerChoice === 0) {
        console.log("Computer chose: Rock"); // Log the computer's choice
        return "Rock";
    } else if (computerChoice === 1) {
        console.log("Computer chose: Paper"); // Log the computer's choice
        return "Paper";
    } else if (computerChoice === 2) {
        console.log("Computer chose: Scissors"); // Log the computer's choice
        return "Scissors";
    }
}


// Get Human choice
function getHumanChoice() {

    // Ask the human for their choice
    // Convert their input to lowercase to match ALL InPuT cases
    var humanChoice = prompt("Rock, Paper, or Scissors?", "Choose wisely...").toLowerCase();

    // Convert human choice to a number

    if (humanChoice === "rock") {
        return "Rock";
    } else if (humanChoice === "paper") {
        return "Paper";
    } else if (humanChoice === "scissors") {
        return "Scissors";
    }
}

// Play a round and update score based on who wins

  

  



function playGame() {
    //Define player and computer score variables, set to 0
    let humanScore = 0;
    let computerScore = 0;

    //Define round logic with the round function
    function playRound(humanChoice, computerChoice) {
        const computerSelection = getComputerChoice();
        const humanSelection = getHumanChoice();

        if (humanChoice === computerChoice) {
            console.log("Tie! You both selected " + humanChoice +".")
        } else if (
            (humanChoice === "Rock" && computerChoice ==="Scissors") ||
            (humanChoice === "Paper" && computerChoice ==="Rock") ||
            (humanChoice === "Scissors" && computerChoice ==="Paper")
        ) {
            humanScore ++
            console.log("You win! " + humanChoice + " beats " + computerChoice)
        } else if (
            (computerChoice === "Rock" && humanChoice ==="Scissors") ||
            (computerChoice === "Paper" && humanChoice ==="Rock") ||
            (computerChoice === "Scissors" && humanChoice ==="Paper")
        ) {
            computerScore ++
            console.log("You Lose! " + humanChoice + " loses to " + computerChoice + ". Womp womp!")
      }
      console.log("Player score: " + humanScore);
      console.log("Computer score: " + computerScore);
    }
    
    //Play round 5 times
    playRound(humanSelection, computerSelection);
    playRound(humanSelection, computerSelection);
    playRound(humanSelection, computerSelection);
    playRound(humanSelection, computerSelection);
    playRound(humanSelection, computerSelection);

    //Declare winner after 5 rounds

}

playGame();