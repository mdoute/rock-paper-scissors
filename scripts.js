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

    // Shows the value that was generated above
    console.log(randomNum);
}

// Output the choice
getComputerChoice();


// Roadmap
// Generate a random number - done
// Assign that number a string based on its value - done
// Output the computer selection - done
// Ask the player for their input
// Determine winner
// Output the winner