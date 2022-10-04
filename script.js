//randomly chooses from a list of words in an array and returns them
function getComputerChoice(list){
    return list[Math.floor((Math.random()*list.length))];
}
let playerScore = 0;
let computerScore = 0;

function oneRound(playerSelection, computerSelection){
   
    let player = prompt("Rock, Paper,or Scissors?").toLowerCase();
    let computer = getComputerChoice(['rock', 'paper', 'scissors']);
   // console.log(player, playerScore);
    //console.log(computer, computerScore);
    if(player == computer){
        return console.log("It's a tie!");
    }
    else if(player == 'paper' && computer == 'rock' || player == 'scissors' && computer == 'paper' || player == 'rock' && computer == 'scissors'){
        playerScore++;
        //console.log(`Player Score: ${playerScore}`);
        return console.log(`You win! ${player} beats ${computer}`);
    }
    else if(player == 'rock' && computer == 'paper' || player == 'paper' && computer == 'scissors' || player == 'scissors' && computer == 'rock'){
        computerScore++;
        //console.log(`Computer Score: ${computerScore}`);
        return console.log(`You lose! ${computer} beats ${player}`);
    }
    else{
        return console.log("Did you select Rock, Paper, or Scissors?")
    }

   
}
function game(){
    for(i=0; i<5; i++){
        oneRound()
    }
    if(playerScore === computerScore){
        return console.log(`It's a draw! Final score Player${playerScore}:Computer${computerScore}`)
    }
    else if(playerScore > computerScore){
        return console.log(`You win the game! Final score Player${playerScore}:Computer${computerScore}`);        
    }
    else{
        return console.log(`You lose! Final score Player${playerScore}:Computer${computerScore}`);
    }   
}
game()