let score = 0

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

function incrementScore(){
    let scoreContainer = document.querySelector("#score")

    if(!scoreContainer) return
    scoreContainer.innerText = parseInt(scoreContainer.innerText) + 1


}

function inform(msg){

    const info = document.querySelector("#info")

    switch(msg){
        case "user" : 
            info.innerText = "You won !"
            break
        case "computer" :
            info.innerText = "You lost !"
            break

        default : 
            info.innerText = "It's a draw !"
    }
}


function play(elem){
    
    const choices = ["rock","paper" , "scissors"]
    let computerChoice
    let userChoice
    userChoice = parseInt(elem.target.id)
    computerChoice = getComputerChoice()


    const playersChoices = document.querySelector("#playersChoices")

    playersChoices.innerText = `Computer  :  ${choices[computerChoice]} || User  : ${choices[userChoice]}`
    
    if(choices[computerChoice]  == choices[userChoice] ) {
        inform("draw")
        return
    }

    if(choices[userChoice] == "rock" && choices[computerChoice] == "scissors"){
        incrementScore()
        inform("user")
    } else if(choices[userChoice] == "scissors" && choices[computerChoice] == "paper"){
        incrementScore()
        inform("user")
    } else if (choices[userChoice] == "paper" && choices[computerChoice] == "rock"){
        incrementScore()
        inform("user")
    } else {
        
        inform("computer")
    }
}


let choices = document.querySelectorAll('.choices button')

choices.forEach(choice => {
    choice.addEventListener("click", play)
})