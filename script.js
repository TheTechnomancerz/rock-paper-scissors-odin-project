//randomly chooses from a list of words in an array and returns them
function getComputerChoice(list){
    return list[Math.floor((Math.random()*list.length))];
}
// console.log(getComputerChoice(['rock', 'paper', 'scissors']))
// let computerChoice = getComputerChoice(['rock', 'paper', 'scissors']);
// let playerChoice = prompt('Rock, Paper, or Scissors?').toLowerCase();

function oneRound(playerSelection, computerSelection){

    if(playerSelection === computerSelection){
        return console.log("You tied!");
    }
    else if(playerSelection == 'paper' && computerSelection == 'rock' || playerSelection == 'scissors' && computerSelection == 'paper' || playerSelection == 'rock' && computerSelection == 'scissors'){
        return console.log("You win! " + playerSelection + " beats " + computerSelection + "!");
    }
    else if(playerSelection == 'rock' && computerSelection == 'paper' || playerSelection == 'paper' && computerSelection == 'scissors' || playerSelection == 'scissors' && computerSelection == 'rock'){
        return console.log("You lose! " + computerSelection + " beats " + playerSelection + "!");
    }
    else{
        return console.log("Did you choose rock, paper, or scissors?")
    }
}


// oneRound('rock', computerChoice);
// oneRound('paper', computerChoice);
// oneRound('scissors', computerChoice);


function game(){
    for (let i = 0; i < 5; i++) {
        console.log(oneRound(prompt("Rock, Paper, or Scissors").toLowerCase(), getComputerChoice(['rock', 'paper', 'scissors'])));
    }

}
game();
