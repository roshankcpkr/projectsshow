function numberGenerator(){
     randomNumber = Math.floor(Math.random() * 6) + 1
     return randomNumber
}

let imgNum = numberGenerator();
let imgNum2 = numberGenerator();

let playerOneDie = function changeImage1(){
        document.querySelector(".img1").setAttribute("src", "images/dice"+imgNum+".png");
        return imgNum
}
    
    
let playerTwoDie = function changeImage2(){
    document.querySelector(".img2").setAttribute("src", "images/dice"+imgNum2+".png");
    return imgNum2
}

    
    
let playAgain = document.getElementById("play-again");

playAgain.addEventListener("click", () => {
    imgNum = numberGenerator();
    imgNum2 = numberGenerator();


    if(playerOneDie() > playerTwoDie()){
        document.querySelector("h1").innerHTML = "<h1>🚩Player One Wins</h1>";
    }else if(playerTwoDie() > playerOneDie()){
        document.querySelector("h1").innerHTML = "<h1>Player Two Wins🚩</h1>";
    }else if(playerTwoDie() === playerOneDie()){
        document.querySelector("h1").innerHTML = "<h1>DRAW🤝🏻!</h1>";
    }
});