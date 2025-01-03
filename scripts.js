const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const playerSelection = document.getElementById("playerSelection");
const computerSelection = document.getElementById("computerSelection");
const roundOutcome = document.getElementById("roundOutcome");
const gameScore = document.getElementById("gameScore");
const computerScoreContainer = document.getElementById("computerScoreContainer");
const playerScoreContainer = document.getElementById("playerScoreContainer");
const roundDisplay = document.getElementById("roundDisplay");
const buttonRow = document.getElementById("buttonRow");
const newGameButtonRow = document.getElementById("newGameButtonRow");
const newGameButton = document.createElement("button");
newGameButton.addEventListener("click", resetGame);

function getComputerChoice() {
    var computerChoice = Math.floor(Math.random() * 3);
    if (computerChoice === 0) {
        return "Rock";
    } else if (computerChoice === 1) {
        return "Paper";
    } else if (computerChoice === 2) {
        return "Scissors";
    }
}

function resetGame() {
    playerScoreContainer.innerText = "Player: 0";
    computerScoreContainer.innerText = "Computer: 0";
    roundDisplay.innerText = "Round 1 / 5";
    roundOutcome.innerText = "";
    welcomeMessage.innerText = "Welcome! Let's play again!";
    buttonRow.setAttribute("style", "display:block;");
    newGameButtonRow.innerHTML = "";
    humanScore = 0;
    computerScore = 0;
    roundCount = 0;
    playGame();
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    let roundCount = 0;
    
    function playRound(humanChoice) {
        const computerChoice = getComputerChoice();
        console.log(humanChoice);

        if (humanChoice === computerChoice) {
            roundCount ++
            roundOutcome.innerText = "Tie! You both selected " + humanChoice +".";
        } else if (
            (humanChoice === "Rock" && computerChoice ==="Scissors") ||
            (humanChoice === "Paper" && computerChoice ==="Rock") ||
            (humanChoice === "Scissors" && computerChoice ==="Paper")
        ) {
            roundCount ++
            humanScore ++
            roundOutcome.innerText = "You win! " + humanChoice + " beats " + computerChoice + ".";
        } else if (
            (computerChoice === "Rock" && humanChoice ==="Scissors") ||
            (computerChoice === "Paper" && humanChoice ==="Rock") ||
            (computerChoice === "Scissors" && humanChoice ==="Paper")
        ) {
            roundCount ++
            computerScore ++
            roundOutcome.innerText = "You Lose! " + humanChoice + " loses to " + computerChoice + ". Womp womp!";
      }
      playerScoreContainer.innerText = "Player: " + humanScore;
      computerScoreContainer.innerText = "Computer: " + computerScore;
      roundDisplay.innerText = "Round " + (roundCount + 1) + " / 5";
      welcomeMessage.innerText = "";
      if (roundCount === 5) {
        gameOver();
      }
    }

    rock.addEventListener('click', function() {
        playRound(rock.innerHTML);
    });

    paper.addEventListener('click', function() {
        playRound(paper.innerHTML);
    });

    scissors.addEventListener('click', function() {
        playRound(scissors.innerHTML);
    });

    function gameOver() {
        roundDisplay.innerText = "GAME OVER";
        buttonRow.setAttribute("style", "display:none;");
        newGameButtonRow.append(newGameButton);
        newGameButton.setAttribute("style", "color: white; background: green;");
        newGameButton.textContent = "New Game";

        if (humanScore > computerScore) {
            welcomeMessage.innerText = "You win! Congratulations, you're smarter than a Javascript robot made by me, a total beginner programmer with no experience. Be proud of yourself, but don't quit that day job just yet. You've got a lot of work to do if you want to win the big RPS competition in Capital City.";
        } else if (humanScore < computerScore) {
            welcomeMessage.innerText = "You lose. All your rock paper scissors are belong to us.";
        } else if (humanScore === computerScore) {
            welcomeMessage.innerText = "You tried, but unfortunately you tied. Better luck next time!";
        }
    }

}

playGame();