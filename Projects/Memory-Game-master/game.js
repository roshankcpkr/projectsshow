var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];

var userClickedPattern = [];

var started = false;

var level = 0;

$("body").keypress(function(){
    if(!started){
        $("#level-title").text("Level "+level);
        nextSequence();
        started = true;
    }
});

$(".btn").click(function() {

    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
  
    playSound(userChosenColour);
  
    animatePress(userChosenColour);

    checkAnswer(userClickedPattern.length-1);
  });
  

function nextSequence() {
    userClickedPattern = [];
    level++;
    $("#level-title").text("Level "+level);
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    $("#" + randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
    // console.log(randomChosenColour);

    checkAnswer(randomChosenColour);
}


function playSound(name){
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
    // console.log("sounds/" + name + ".mp3");
}

function animatePress(currentColour){
    $("#"+currentColour).addClass("pressed");
    // console.log("."+currentColour);
    
    setTimeout(function(){
        $("#"+currentColour).removeClass("pressed");
    },100)
}

function checkAnswer(currentLevel){
    if(gamePattern[currentLevel] === userClickedPattern[currentLevel]){
        console.log("success");

        if(userClickedPattern.length === gamePattern.length){
            setTimeout(function(){
                nextSequence();
            },1000);
        }
    }
    else{
        console.log("wrong");
        var audio1 = new Audio("sounds/wrong.mp3");
        audio1.play();
        $("body").addClass("game-over");
        $("h1").text("Game Over, Press Any Key to Restart");
        setTimeout(function(){
            $("body").removeClass("game-over");
        },200);
        startOver();
    }
}
function startOver(){
    level = 0;
    gamePattern = [];
    started = false;
}