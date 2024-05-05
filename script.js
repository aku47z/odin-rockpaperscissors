function getComputerChoice() {
  let randomChoice = Math.floor(Math.random() * 3);
  if (randomChoice === 0) randomChoice = "rock";
  else if (randomChoice === 1) randomChoice = "paper";
  else randomChoice = "scissors";
  return randomChoice;
}

function getHumanChoice() {
  let humanChoice = prompt("What is your choice?\n(rock, paper, scissors)");
  return humanChoice;
}

function playGame() {
  for (i = 1; i <= 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }
  console.log(
    "Your score: " + humanScore + "\tComputer score: " + computerScore
  );
  if (humanScore > computerScore) console.log("You won!");
  else if (humanScore < computerScore) console.log("You lost!");
  else console.log("It's a tie!");
}

function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();
  if (
    (humanChoice === "rock" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "rock")
  ) {
    computerScore++;
    console.log(`You lose, ${computerChoice} beats ${humanChoice}.`);
  } else if (
    (computerChoice === "rock" && humanChoice === "paper") ||
    (computerChoice === "paper" && humanChoice === "scissors") ||
    (computerChoice === "scissors" && humanChoice === "rock")
  ) {
    humanScore++;
    console.log(`You win, ${humanChoice} beats ${computerChoice}.`);
  } else {
    console.log("It's a tie.");
  }
}

let humanScore = 0,
  computerScore = 0;
playGame();

adsxvcbgdfrsadcvb;
