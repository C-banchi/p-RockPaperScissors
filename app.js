/* 
a game that plays rock paper scissors
the whole thing for now will be in the console

first function will be the random RPS 
Top wants me to call it getComputerChoice 
I will set a random number generator 0-2 
1 = rock 
    let computersMove = 'rock'
    return computerMove;
2 = paper 
3= scissor 
then return the string out 

Shout out to https://github.com/parkercon/ git hub submission for the dom update of the score code
*/

const getComputerChoice = () => {
  // getting a random number between 1 and 3
  let randomNum = Math.floor(Math.random() * (4 - 1) + 1);
  //rounding down the number
  let computerMove = "Wouldn't you like to know";
  // I set this to a string incase nothing happened .. error message
  if (randomNum === 1) {
    computerMove = "rock";
    return computerMove;
  } else if (randomNum === 2) {
    computerMove = "paper";
    return computerMove;
  } else {
    computerMove = "scissors";
    return computerMove;
  }
};
/** Top now wants me to create the game function
 *  the function will be called playRound
 *  it will have 2 parameters one from the player and one from the above function
 *  the logic provided by top is a good starting point
 * inside the playRound i need to compare the user input to the computer then decide a winner based on the rules
 *  if playerSelection = rock
 *   then switch case for the computers answer
 */
let playerScore = 0;
let computerScore = 0;
let roundWinner = "";

const playRound = (playerSelection, computerSelection) => {
  let player = playerSelection.toLowerCase();
  let computer = computerSelection;

  clearSelections();

  const computer1 = document.querySelector(".compScore");
  computer1.textContent = `Computer Score: ${computerScore}`;

  const player2 = document.querySelector(".userScore");
  player2.textContent = `Player Score: ${playerScore}`;

  //changing the logic on how the game is played... less code and more readable

  whatWasPicked(computer, player);
  console.log(`c ${computerSelection} p ${playerSelection} `);
  if (
    (player === "rock" && computer === "scissors") ||
    (player === "paper" && computer === "rock") ||
    (player === "scissors" && computer === "paper")
  ) {
    playerScore++;
    return (roundWinner = `You`);
  } else if (player === computer) {
    // alert("Its a Tie");
  } else {
    computerScore++;
    return (roundWinner = `Computer`);
  }
};

const game = (playerChoice) => {
  //   for (let i = 0; i < 5; i++) {
  if (playerScore <= 5) {
    if (computerScore <= 5) {
      const playerSelection = playerChoice;
      const computerSelection = getComputerChoice();
      playRound(playerSelection, computerSelection);
      //   console.log(scoreboard(0));
    } else gameOver();
  } else gameOver();
};

const newGame = () => {
  playerScore = 0;
  computerScore = 0;
  roundWinner = "";
  resetScores();
};

function whatWasPicked(computerMove, playerMove) {
  // this is where i had to do some googling
  let computerPicked = document.querySelectorAll(`#game`);
  //selecting all the html elements with the id of Game
  computerPicked.forEach((computerPick) => {
    // I loop through them to see if one of those Id match what the computer selected
    if (computerMove == computerPick.className) {
      const myDiv = document.querySelector(`.${computerMove}`);
      //  then select that div and give it a boarder based on who selected it
      myDiv.classList.add("computer");
    } else if (playerMove == computerPick.className) {
      const myDiv = document.querySelector(`.${playerMove}`);
      myDiv.classList.add("player");
    } else if (playerMove === computerMove) {
      const myDiv = document.querySelector(`.${playerMove}`);
      myDiv.classList.add("tie");
    }
  });
}
function clearSelections() {
  let gameDiv = document.querySelectorAll("#game");
  const removeDiv = ["tie", "player", "computer"];
  gameDiv.forEach((gd) => {
    removeDiv.forEach((e) => {
      gd.classList.remove(e);
    });
  });
}

const gameOver = () => {
  console.log(`its over`);
};

const resetScores = () => {
  const computer1 = document.querySelector(".compScore");
  computer1.textContent = `Computer Score: ${computerScore}`;

  const player2 = document.querySelector(".userScore");
  player2.textContent = `Player Score: ${playerScore}`;
};

// const keys = document.querySelectorAll("#game");
// keys.forEach((key) => key.addEventListener("transitionend", clearSelections));
