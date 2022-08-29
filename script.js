// VARIABLES

const options = ["rock", "paper", "scissors"];

let winner = document.querySelector('#winner');
let computer = document.querySelector('#computer');
let player = document.querySelector('#player');
let start = document.querySelector('#newGame');

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const buttons = document.querySelector("#buttons");

let playerScore = 0;
let computerScore = 0;



// COMPUTER CHOICE  

function getComputerChoice() {
  return options[Math.floor(Math.random()*options.length)];
}



// GAME 

  rock.addEventListener('click', () => {
    playRound(options[0]);
  });

  paper.addEventListener('click', () => {
    playRound(options[1]);
  });

  scissors.addEventListener('click', () => {
    playRound(options[2]);
  });



// PLAY ROUND

function playRound(playerSelection) {

  let computerSelection = getComputerChoice();

  if (playerSelection == computerSelection) {
    winner.textContent = "You were tied";

  } else if (playerSelection == "rock" && computerSelection == "scissors") {
    playerScore++;
    winner.textContent = "You win! Rock beats scissors";

  } else if (playerSelection == "paper" && computerSelection == "rock") {
    playerScore++;
    winner.textContent = "You win! Paper beats rock";

  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    playerScore++;
    winner.textContent = "You win! Scissors beats paper";


  } else if (playerSelection == "rock" && computerSelection == "paper") {
    computerScore++;
    winner.textContent = "You lose! Paper beats rock";

  } else if (playerSelection == "paper" && computerSelection == "scissors") {
    computerScore++;
    winner.textContent = "You lose! Scissors beats paper";

  } else if (playerSelection == "scissors" && computerSelection == "rock") {
    computerScore++;
    winner.textContent = "You lose! Rock beats scissors";
  }

  // SCORE ACTUALIZATION

  player.textContent = `${playerScore}`;
  computer.textContent = `${computerScore}`;

  if (playerScore >= 5 || computerScore >= 5) {
    theWinnerIs();
  }
}



// FINAL FUNCTION: THE WINNER IS

function theWinnerIs () {

  buttons.setAttribute("style", "visibility: hidden");
  winner.setAttribute("style", "font-size: 8vw");

  if (playerScore > computerScore) {
    winner.textContent = "YOU WIN!!!";

  } else if (playerScore < computerScore) {
    winner.textContent = "YOU LOSE!!!";

  } else { 
    winner.textContent = "YOU WERE TIED!!!";
  }  
}



// NEW GAME

start.addEventListener('click', () => {
  playerScore = 0;
  computerScore = 0;
  player.textContent = `${playerScore}`;
  computer.textContent = `${computerScore}`;
  buttons.setAttribute("style", "visibility: visible");
  winner.textContent = "Good Lock!";
  winner.setAttribute("style", "font-size: 4vw");
});
