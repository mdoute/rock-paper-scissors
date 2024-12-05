
// Get Computer choice
function getComputerChoice() {

    // Generate a random number between 0-0.99 with Math.random
    // Multiply the random number by 3
    // Round the random number down to the nearest whole number, either 0, 1, or 2

    var computerChoice = Math.floor(Math.random() * 3);

    // Assign Rock, Paper, or Scissors based on the random number

    if (computerChoice === 0) {
        //console.log("Computer chose: Rock"); // Log the computer's choice to make testing easier
        return "Rock";
    } else if (computerChoice === 1) {
        //console.log("Computer chose: Paper"); // Log the computer's choice to make testing easier
        return "Paper";
    } else if (computerChoice === 2) {
        //console.log("Computer chose: Scissors"); // Log the computer's choice to make testing easier
        return "Scissors";
    }
}

// Get Human choice
function getHumanChoice() {

    // Ask the human for their choice
    // Convert their input to lowercase to match ALL InPuT cases
    var humanChoice = prompt("Rock, paper, or scissors?", "Choose wisely...").toLowerCase();

    // Convert human choice to a number

    if (humanChoice === "rock") {
        return "Rock";
    } else if (humanChoice === "paper") {
        return "Paper";
    } else if (humanChoice === "scissors") {
        return "Scissors";
    }
}

function playGame() {
    //Define player and computer score variables, set to 0
    let humanScore = 0;
    let computerScore = 0;

    console.log("Welcome! This game consists of 5 rounds. The player the with highest score at the end wins. If you didn't assume that's how a winner was chosen, this may be a little too advanced for you. Check out Hello Kitty Island Adventure instead, available now on Nintendo Switch, PlayStation, PC, and Xbox.");

    //Define round logic with the round function
    function playRound() {
        const computerChoice = getComputerChoice();
        const humanChoice = getHumanChoice();

        if (humanChoice === computerChoice) {
            console.log("Tie! You both selected " + humanChoice +".")
        } else if (
            (humanChoice === "Rock" && computerChoice ==="Scissors") ||
            (humanChoice === "Paper" && computerChoice ==="Rock") ||
            (humanChoice === "Scissors" && computerChoice ==="Paper")
        ) {
            humanScore ++
            console.log("You win! " + humanChoice + " beats " + computerChoice + ".")
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
    playRound();
    playRound();
    playRound();
    playRound();
    playRound();

    //Declare winner after 5 rounds
    function gameOver() {
        if (humanScore > computerScore) {
            console.log("You win! Congratulations, you're smarter than a Javascript robot made by me, a total beginner programmer with no experience. Be proud of yourself, but don't quit that day job just yet. You've got a lot of work to do if you want to win the big RPS competition in Capital City.")
        } else if (humanScore < computerScore) {
            console.log("Yikes man, you lose.")
        }
    }

    gameOver();

}

playGame();