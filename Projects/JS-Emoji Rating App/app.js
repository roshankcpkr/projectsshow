/*
DESCRIPTION:
You job is to enable users to give a rating between 1 (bad) and 5 (great), 
and then display that rating in the form of an emoji. The users should give 
their ratings by pressing a key on their keyboards (the numbers 1 to 5). 
Here's the numbers' corresponding emojis:

5 = 😁
4 = 🙂
3 = 😐
2 = ☹️
1 = 🤬

event listeners, keyboard events, key codes, 
focus, focusout, DOM manipulation, tabindex

*/

//UI Elements

let box = document.querySelector('#box');
let text = document.querySelector('#text');
let para = document.querySelector('#para');

//when the box will get focused the text will change to "Type a number between 1 and 5"
box.addEventListener('focus', function() {
    text.innerHTML = "Type a number between <b>1</b> and <b>5</b>";
});

//when the box will get focus out then the text will get changed to "Click here to give your rating"
box.addEventListener('focusout', function() {
    text.innerHTML = "Click here to give your <b>rating!</b>";
});

//getting the key code on key down of Keyboard and then displaying rating based on that key code.
box.addEventListener('keydown', function(e) {
    //e.keyCode will give us the key code of that key that is get down from keyboard.
    //the key code for 1 = 97 , 2 = 98, 3 = 99, 4 = 100, 5 = 101
    //console.log(e.keyCode);
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
