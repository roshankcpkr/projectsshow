document.addEventListener('DOMContentLoaded', function(){
let generator = document.querySelector('.test');
generator.addEventListener('click', function(){
let value = Math.floor(Math.random() * 11);
            if (value === 11){
              document.querySelector('.luck').innerHTML = 'Your should read today more.';
            }
            else if (value === 0){
              document.querySelector('.luck').innerHTML = 'Your should dance today.';
            }
               else if (value === 1){
              document.querySelector('.luck').innerHTML = 'Your should go to space today.';
            }
               else if (value === 2){
              document.querySelector('.luck').innerHTML = 'Your should start business';
            }
               else if (value === 3){
              document.querySelector('.luck').innerHTML = 'Your should call your family today.';
            }
             else if (value === 4){
              document.querySelector('.luck').innerHTML = 'Your should go to hospital for checkup.';
            }
             else if (value === 5){
              document.querySelector('.luck').innerHTML = 'Your should buy yourself a good lunch';
            }
             else if (value === 6){
              document.querySelector('.luck').innerHTML = 'Your should treat your friends';
            }
             else if (value === 7){
              document.querySelector('.luck').innerHTML = 'Your should watch cs50';
            }
             else if (value === 8){
              document.querySelector('.luck').innerHTML = 'Your should watch a good movie';
            }
             else if (value === 9){
              document.querySelector('.luck').innerHTML = 'Your should learn coding';
            }
             else if (value === 10){
              document.querySelector('.luck').innerHTML = 'Your should donate to a charity';
            }
          });
          });
