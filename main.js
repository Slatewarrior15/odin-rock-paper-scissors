

// Randomly return rock , paper , or scissors from the computer
function getComputerChoice(){
    choice = Math.floor((Math.random() * 3) + 1)
    console.log(choice)
    switch(choice){
        case 1:
            return("ROCK");
            
        case 2:
            return("PAPER");
           
        case 3:
            return("SCISSORS");
            
    }
}

// Get user's input
function getHumanChoice(){
    let choice = prompt("ROCK, PAPER, or SCISSORS")
    return(choice.toUpperCase())
}


function playGame(){
    let playRound = function(humanChoice,computerChoice){
        let humanScore = 0
        let computerScore = 0

        const humanWins = 
        (humanChoice == "ROCK" & computerChoice == "SCISSORS")||
        (humanChoice == "PAPER" & computerChoice == "ROCK")|| 
        (humanChoice == "SCISSORS" & computerChoice == "PAPER") 

        const tie = (humanChoice === computerChoice)

        if (humanWins){
            humanScore++
            console.log(`You win! ${humanChoice} beats ${computerChoice}`)
        
        }
        else if (tie){
            console.log(`It is a tie! ${humanChoice} ties with ${computerChoice}`)
        }

        else{
            computerScore++
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`)
        }
    }

    for ( let rounds = 0; rounds < 5; rounds++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);

    }

    if (humanScore > computerScore){
        console.log("You win!")
    }
    else{
        console.log("You lose!, better luck next time")
    }
}   


playGame();


