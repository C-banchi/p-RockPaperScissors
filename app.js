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
*/

const getComputerChoice = () => {
    // getting a random number between 1 and 3
let randomNum = Math.floor(Math.random() * (4 - 1) + 1);
//rounding down the number
let computerMove = "Wouldn't you like to know";
// I set this to a string incase nothing happened .. error message
    if (randomNum === 1){
        computerMove = 'Rock';
        return computerMove;
    }
    else if (randomNum === 2){
        computerMove = 'Paper';
        return computerMove;
    }
    else{
        computerMove = 'Scissors';
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
 const playRound = (playerSelection,computerSelection) =>{
    let round = "3 out of 5?";
    if(playerSelection === "rock"){
        switch (computerSelection){
            case "Rock":
                return round = "You must've been reading my mind!";
        }

    }

 }
const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));

getComputerChoice();

