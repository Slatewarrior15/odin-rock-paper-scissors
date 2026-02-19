// Randomly return rock , paper , or scissors from the computer
function getComputerChoice(){
    choice = Math.floor((Math.random() * 3) + 1)
    console.log(choice)
    switch(choice){
        case 1:
            console.log("Rock");
            break;
        case 2:
            console.log("Paper");
            break;
        case 3:
            console.log("Scissors");
            break;
    }
}

getComputerChoice();
