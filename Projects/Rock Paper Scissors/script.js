function rpsGame(yourChoice) {
    var userChoice = yourChoice.id;
    var choices = ['rock', 'paper', 'scissors'];
    var botChoice = choices[Math.floor(Math.random() * 3)];
    console.log(userChoice + botChoice);
    results = decideWinner(userChoice, botChoice);
    message = finalMessage(results);
    alert(message['message']);
    rpsFrontEnd(userChoice, botChoice, message);
}

function decideWinner(uc, bc) {
    if (uc === bc)
        return 0.5;
    if (uc === 'rock') {
        if (bc === 'paper')
            return 0;
        if (bc === 'scissors')
            return 1;
    }
    if (uc === 'paper') {
        if (bc === 'rock')
            return 1;
        if (bc === 'scissors')
            return 0;
    }
    if (uc === 'scissors') {
        if (bc === 'paper')
            return 1;
        if (bc === 'rock')
            return 0;
    }
}

function finalMessage(results) {
    if (results === 0)
        return { 'message': "You lost!", 'color': 'red' };
    if (results === 1)
        return { 'message': "You won!", 'color': 'blue' };
    if (results === 0.5)
        return { 'message': "It's a draw!", 'color': 'gold' };
}

function rpsFrontEnd(userChoice, botChoice, message)
{
    var imgDB = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src,
    }
    
    //removing
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    var humanDiv = document.createElement('div');
    var messageDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var buttonDiv = document.createElement('div');

    humanDiv.innerHTML = "<img src='" + imgDB[userChoice] + "' width='auto' height='150' style='box-shadow: 0px 0px 40px 5px rgba(0, 0, 255, 0.75)'>";
    messageDiv.innerHTML = "<h1 style='color: " + message['color'] + "; font-size: 60px; padding: 30px;' width='auto' height='150'>" + message['message'] +"</h1>";
    botDiv.innerHTML = "<img src='" + imgDB[botChoice] + "' width='auto' height='150' style='box-shadow: 0px 0px 40px 5px rgba(255, 0, 0, 0.75)'>";
    buttonDiv.innerHTML = "<br><button class='btn btn-success' onclick='location.reload()'>   Play again   </button>"

    rpsDiv = document.getElementById('flex-box-div');
    rpsDiv.appendChild(humanDiv);
    rpsDiv.appendChild(messageDiv);
    rpsDiv.appendChild(botDiv);
    document.getElementById('container-div').appendChild(buttonDiv);
}
