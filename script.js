function getComputerChoice() {
  let randomChoice = Math.floor(Math.random() * 3);
  if (randomChoice === 0) randomChoice = "rock";
  else if (randomChoice === 1) randomChoice = "paper";
  else randomChoice = "scissors";
  return randomChoice;
}

function playRound(humanChoice, computerChoice) {
  const h3 = document.querySelector("h3");
  const human = document.querySelector("#human");
  const computer = document.querySelector("#computer");
  if (
    (humanChoice === "rock" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "rock")
  ) {
    computerScore++;
    h3.textContent = `You lose, ${computerChoice} beats ${humanChoice}.`;
    computer.textContent = `Computer: ${computerScore}`;
  } else if (
    (computerChoice === "rock" && humanChoice === "paper") ||
    (computerChoice === "paper" && humanChoice === "scissors") ||
    (computerChoice === "scissors" && humanChoice === "rock")
  ) {
    humanScore++;
    h3.textContent = `You win, ${humanChoice} beats ${computerChoice}.`;
    human.textContent = `Human: ${humanScore}`;
  } else {
    h3.textContent = `It's a tie.`;
  }
  if (humanScore === 5 || computerScore === 5) {
    const body = document.querySelector("body");
    const btn = document.createElement("button");
    btn.textContent = "fin.";
    const h2 = document.createElement("h2");
    h2.textContent = humanScore === 5 ? "You won." : "You lost.";
    body.appendChild(h2);
    body.insertBefore(btn, h3);
    const buttons = document.querySelector(".buttons");
    body.removeChild(buttons);
  }
}

let humanScore = 0,
  computerScore = 0;
