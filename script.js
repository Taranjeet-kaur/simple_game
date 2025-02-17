const getComputerChoice = function(){
    let randomNumber = Math.random() * 100
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
   let popUp = prompt("ROCK, PAPER OR SCISSORS?")
   return popUp;
};

// getHumanChoice();


function playRound(humanChoice, computerChoice) {
    
    let lowerCase = humanChoice.toLowerCase()

    if (lowerCase === computerChoice) {
        return `It's a tie! You: ${lowerCase}. Computer: ${computerChoice}`;
    //    return "Tie"
    }
    if((lowerCase === "rock" && computerChoice === "scissors")|| (lowerCase === "scissors"&& computerChoice === "paper")|| (lowerCase == "paper" && computerChoice === "rock")) {
        return `You win! ${lowerCase} beats ${computerChoice}.`;
    //    return "Win!"
    } else {
        return `You lose! ${computerChoice} beats ${lowerCase}` ;
        // return "Lose!"
    }
};

function playGame(){
    let humanScore = 0;
    let computerScore = 0;
    let resultMessages = [];

    for (let round = 0; round < 3; round++) {

        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();

        let result =playRound(humanChoice, computerChoice);
        resultMessages.push(result);

        if(result.includes("Win!")){
            humanScore++
        } else if(result.includes("Lose!")){
            computerScore++
        }
    };

    resultMessages.push(`Final Score: you - ${humanScore}, Computer - ${computerScore}`);
    

    if(humanScore > computerScore){
        resultMessages.push("You won the game!");
    } else if(computerScore > humanScore){
        resultMessages.push("Computer won the game!");
    } else {
        resultMessages.push("It's a tie!")
    }

    return resultMessages.join('\n')
};

// playGame();


const button1 = document.createElement("button")
button1.textContent = "Play Game"
button1.addEventListener(
    'click', () => {
        let resultDiv = document.createElement("div");
        resultDiv.textContent = playGame();
        document.body.appendChild(resultDiv)
    }
)
document.body.appendChild(button1)


const button2 = document.createElement("button")
button2.textContent = "Play Game"
button2.addEventListener(
    'click', () => {
        let resultDiv = document.createElement("div");
        resultDiv.textContent = playGame();
        document.body.appendChild(resultDiv)
    }
)
document.body.appendChild(button2)

const button3 = document.createElement("button")
button3.textContent = "Play Game"
button3.addEventListener(
    'click', () => {
        let resultDiv = document.createElement("div");
        resultDiv.textContent = playGame();
        document.body.appendChild(resultDiv)
    }
)
document.body.appendChild(button3)




