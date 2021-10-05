
var randomNumber1 = Math.floor (Math.random() * 6) + 1;

var randomimage = "dice" + randomNumber1 + ".png";
var randomimgsrc = "images/" + randomimage;
document.querySelector("img.img1").setAttribute("src",randomimgsrc);


var randomNumber2 = Math.floor (Math.random() * 6) + 1;

var randomimageb = "dice" + randomNumber2 + ".png";
var randomimgsrcb = "images/" + randomimageb;
document.querySelector("img.img2").setAttribute("src",randomimgsrcb);



if(randomNumber1> randomNumber2){
    document.querySelector("h1").textContent = "🚩 Player 1 Wins!";
}
else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").textContent = "Player 2 Wins! 🚩";
    
}
else{
    document.querySelector("h1").textContent = "Draw!";

}