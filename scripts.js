
// Set Player and Computer scores to zero
let humanScore = 0;
let computerScore = 0;


// Get Computer choice
function getComputerChoice() {

    // Generate a random number between 0-0.99 with Math.random
    // Multiply the random number by 3
    // Round the random number down to the nearest whole number, either 0, 1, or 2

    var randomNum = Math.floor(Math.random() * 3);

    // Assign Rock, Paper, or Scissors based on the random number

    if (randomNum === 0) {
        console.log("Rock");
    } else if (randomNum === 1) {
        console.log("Paper");
    } else if (randomNum === 2) {
        console.log("Scissors");
    }
}

// Output Computer choice
getComputerChoice();

// Get Player choice
function getPlayerChoice() {

    // Ask the player for their choice
    var playerChoice = prompt("Rock, Paper, or Scissors?", "Choose wisely...");

    // Convert player choice to a number

    if (playerChoice === "Rock") {
        console.log(0);
    } else if (playerChoice === "Paper") {
        console.log(1);
    } else if (playerChoice === "Scissors") {
        console.log(2)
    }
}

// Output Player choice
getPlayerChoice();




// Roadmap
// Generate a random number - done
// Assign that number a string based on its value - done
// Output the computer selection - done
// Ask the player for their input
// Determine winner
// Output the winner