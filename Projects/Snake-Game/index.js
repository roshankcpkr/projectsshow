const button = document.getElementById("btn")



let boxSize = 25;
let totalRow = 21; //total no of row
let totalColumn = 21; //total no of column
let board;
let context; //drawing object snake

//snake head 4
let snakeX = boxSize * 5;
let snakeY = boxSize * 5;

let foodX;
let foodY;

//gameover 14
let gameOver = false;

let snakeBody = []

// score
let score = 0

// let snakeSpeed
let intervalID = null
let initialSpeed = 5   // Initial time interval for setInterval function
let speedMultiplier =2  // Multiplier to decrease the time interval after eating food
let currentSpeed= initialSpeed      // Current time interval for setInterval function

let speedX = 0; // speed of snake in x direction 7
let speedY = 0; //speed of snake in y direction




window.onload = function () {
  //set the board height and width      step 1
  board = document.getElementById("board");
  board.height = totalRow * boxSize;
  board.width = totalColumn * boxSize;
  //this is used to draw on board
  context = board.getContext("2d");

  // call the function changeDirection when key is pressed 10
  document.addEventListener("keyup", changeDirection);

  placeFood();

  // step 2
  //   console.log(board)

  // Set snake speed 11
  

  setInterval(update, 1000/currentSpeed); //snakeSpeed); // update the snake every 1000ms / snakeSpeed

//   update();  // it is done by setInterval because we have to call it multiple times
};



function update() {

  //gameover
  if(gameOver){
    return;
  }

  //3
  //backgroung of board
  if(score>=10 && score<=15){
    context.fillStyle = "maroon"
    context.fillRect(0, 0, board.width, board.height)
    
  }else{
    context.fillStyle = "black";
    context.fillRect(0, 0, board.width, board.height);
  }

 
  
  //food color and position & food part should be above snake
  context.fillStyle = "green";
  context.fillRect(foodX, foodY, boxSize, boxSize);

    // collision with food 12
    if(snakeX === foodX && snakeY === foodY){
      snakeBody.push([foodX, foodY]);
      placeFood();

      // score update
      score += 1;

      // incresing speed after collision with food
      currentSpeed = initialSpeed / speedMultiplier ; // Decrease the time interval after eating food
      clearInterval(intervalID); //clear the current interval
      intervalID = setInterval(update, 1000 / currentSpeed); //set new interval with updated speed//set new interval with updated speed
    }
    console.log(currentSpeed);

    //head or body part grow 14
    for(let i = snakeBody.length-1; i>0 ; i--){
      //head shift to tail and new part attach to head
      snakeBody[i] = snakeBody [i-1]  //This is a way to shift each element of the array towards the head of the snake.
    }
    if(snakeBody.length){
      snakeBody[0]= [snakeX, snakeY]
    }




  //snake color 5
  context.fillStyle = "white";
  snakeX += speedX * boxSize; //updating the speed or motion of snake in x direction 8
  snakeY += speedY * boxSize; // updating the speed or motion of snake in y direction
  context.fillRect(snakeX, snakeY, boxSize, boxSize);




  
  // to eat food (only eat and leave not attatch to body) 13 
  for(let i = 0 ; i<snakeBody.length ; i++){
    context.fillRect(snakeBody[i][0], snakeBody[i][1], boxSize, boxSize)
  }




  // game over condition
   //this is for wall touch game over
  if(snakeX < 0 || snakeX >= totalColumn * boxSize || snakeY < 0 || snakeY >= totalRow * boxSize){
    gameOver = true;
    alert("Game Over")
  }

  // This is for body touch game over
   for(let i=0; i < snakeBody.length; i++){
    if(snakeX === snakeBody[i][0] && snakeY === snakeBody[i][1]){
      gameOver = true;
      alert("Game Over");
    }
   
   }


 //score update in canvas  
   drawScore()

}

//score display
function drawScore(){
 context.fillStyle = "white"
 context.font = "24px monospace"
 context.fillText("Score: "+score, 10, 30)


}

//change direction of snake 9

function changeDirection (e){

    if(e.code === "ArrowUp" && speedY != 1){
      // If up arrow key pressed with this condition...
      // snake will not move in the opposite direction
      speedX = 0
      speedY = -1
    }

    else if (e.code === "ArrowDown" && speedY != -1){
      //If down arrow key pressed
      speedX = 0
      speedY = 1
    }

    else if (e.code === "ArrowLeft" && speedX != 1){
        //if left arrow is pressed
        speedX = -1
        speedY = 0
    }

    else if(e.code === "ArrowRight" && speedX != -1 ){
        //if arrow right is pressed
        speedX = 1
        speedY = 0
    }

}

//places food in random places 6
function placeFood() {
  foodX = Math.floor(Math.random() * totalRow) * boxSize;
  foodY = Math.floor(Math.random() * totalColumn) * boxSize;
  console.log(foodX, foodY);

  // increase snake speed after eating food
//   snakeSpeed += 2;
}
button.addEventListener("click", restartGame)

document.addEventListener("keydown",(e)=>{
  if(e.key==="Enter"){
    restartGame()
  }
})

function restartGame(){
  location.reload();
  console.log("clicked1");
}