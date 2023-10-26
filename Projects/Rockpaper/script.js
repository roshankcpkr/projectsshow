const computerChoice = document.querySelector('#computer-choice')
const userChoice  = document.querySelector('#user-choice')
let result = document.querySelector('#result')
const rock = document.querySelector('#rock')
const paper= document.querySelector('#paper')
const scissor = document.querySelector('#scissor')
const button = document.querySelectorAll('button')
let displayResult = ''
let user;

function getResult(){
    if(user === "rock" && res === "rock"){
        displayResult = "Draw"
        
    }
    if(user === "rock" && res === "paper"){
        displayResult = "You loose"
        
    }
    if(user === "rock" && res === "scissor"){
        displayResult = "You won"
        
    }
    if(user === "paper" && res === "rock"){
        displayResult = "You won"
        
    }
    if(user === "paper" && res === "paper"){
        displayResult = "Draw"
        
    }
    if(user === "paper" && res === "scissor"){
        displayResult = "You loose"
        
    }
    if(user === "scissor" && res === "rock"){
        displayResult = "You loose"
        
    }
    if(user === "scissor" && res === "paper"){
        displayResult = "You won"
        
    }
    if(user === "scissor" && res === "scissor"){
        displayResult = "Draw"
        
    }

    result.innerText = displayResult 
    
}
button.forEach(element => element.addEventListener('click', (e) => {
    user = e.target.id
    userChoice.textContent = user
    console.log(user)
    generateComputerChoice()
    getResult()

}))

function generateComputerChoice(){
    let choices =["rock","paper","scissor"]
    let index = Math.floor(Math.random() * 3)
    res = choices[index]
    computerChoice.innerHTML = res
}





