
console.log("Rock, Paper, Scissors Game Initialized");

function getComputerChoice(){

    return Math.floor(Math.random()*3)

}

function getUserChoice(){

    const userInput = prompt("Please enter your choice: 0 : rock, 1 : scissors, 2 : paper");
    if (userInput === null) {
        console.log("User cancelled the game.");
        return null;
    }

    return parseInt(userInput)
}

function play(){
    
    const choices = ["rock","paper" , "scissors"]
    const rounds = parseInt(prompt("Number of rounds !"))
    let played_rounds = 0
    let userChoice
    let computerChoice
    let user_wins = 0

    while(played_rounds < rounds){

        played_rounds++
        userChoice = getUserChoice()
        
        if(userChoice == null){
            break
        }

        computerChoice = getComputerChoice()
        
        console.log( `Computer choice :  ${choices[computerChoice]} || User choice : ${choices[userChoice]}`)

        if(choices[userChoice] == "rock" && choices[computerChoice] == "scissors"){
            user_wins++
        } else if(choices[userChoice] == "scissors" && choices[computerChoice] == "paper"){
            console.log("Computer won ")
            user_wins++
        } else if (choices[userChoice] == "paper" && choices[computerChoice] == "rock"){
            console.log("Computer won ")
            user_wins++
        }

    }


    if(user_wins > (rounds)/2){
        console.log("Great job !")
    } else if(user_wins == (rounds)/2) {
        console.log("Draw !")
    } else {
        console.log("Game lost !")

    }

}

play()
