const getComputerChoice = function(){
    randomNumber = Math.random() * 100
    if(randomNumber < 33){

        return "rock";
    }  else if (randomNumber < 66){
        
        return "paper";
    } else {
        
        return "scissors";
    }
};

getComputerChoice();

const getHumanChoice = function(){
   popUp = prompt("ROCK, PAPER OR SCISSORS?")
   return popUp;
};

getHumanChoice();

humanScore = 0;
computerScore = 0;

function playRound(humanChoice, computerChoice) {
    let lowerCase = humanChoice.toLowerCase()

    if (lowerCase === computerChoice) {
        console.log(`It's a tie! You: ${lowerCase} . Computer: ${computerChoice}`);
        return "Tie"
    }
    if((lowerCase === "rock" && computerChoice === "scissors")|| (lowerCase === "scissors"&& computerChoice === "paper")|| (lowerCase == "paper" && computerChoice === "rock")) {
        console.log(`You win! ${lowerCase} beats ${computerChoice}.`);
        return "Win!"
    } else {
        console.log(`You lose! ${computerChoice} beats ${lowerCase}`);
        return "Lose!"
    }
};

function playGame(){
    let humanScore = 0;
    let computerScore = 0;

    for (let round = 0; round < 5; round++) {

        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();

        let result =playRound(humanChoice, computerChoice)
        if(result === "Win!"){
            humanScore++
        } else if(result === "Lose!"){
            computerScore++
        }
    };

    console.log(`Final Score: you - ${humanScore}, Computer - ${computerScore}`);
    

    if(humanScore > computerScore){
        console.log("You won the game!");
    } else if(computerScore > humanScore){
        console.log("Computer won the game!");
    } else {
        console.log("It's a tie!")
    }
};

playGame();



