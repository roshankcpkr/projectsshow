let box = document.querySelector('#box');
let text = document.querySelector('#text');
let para = document.querySelector('#para');

box.addEventListener('focus', function() {
    text.innerHTML = "Type a number between <b>1</b> and <b>5</b>";
});

box.addEventListener('focusout', function() {
    text.innerHTML = "Click here to give your <b>rating!</b>";
});

box.addEventListener('keydown', function(e) {
    const keyValue = e.keyCode;
    if(keyValue === 97 || keyValue === 49) {
        text.textContent = "🤬";
        para.textContent = "Your Emoji Rating : ";
        box.style.fontSize = "60px";
    } else if(keyValue === 98 || keyValue === 50) {
        text.textContent = "☹️";
        para.textContent = "Your Emoji Rating : ";
        box.style.fontSize = "60px";
    } else if(keyValue === 99 || keyValue === 51) {
        text.textContent = "😐";
        para.textContent = "Your Emoji Rating : ";
        box.style.fontSize = "60px";
    } else if(keyValue === 100 || keyValue === 52) {
        text.textContent = "🙂";
        para.textContent = "Your Emoji Rating : ";
        box.style.fontSize = "60px";
    } else if(keyValue === 101 || keyValue === 53) {
        text.textContent = "😁";
        para.textContent = "Your Emoji Rating : ";
        box.style.fontSize = "60px";
    } else {
        text.innerHTML = "<b>Invalid Number!</b><br/> Type a number between <b>1</b> and <b>5</b>";
        box.style.fontSize = "30px";
        para.textContent = "";
    }
});
