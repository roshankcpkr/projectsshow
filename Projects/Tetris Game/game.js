let scoreShow = document.getElementById('score');
let highscoreShow = document.getElementById('highscore');
let pause = document.getElementById('pause');
let pauseValue = true;
let newGame = document.getElementsByClassName('start-newgame');
let newGameValue = false;
let modal = document.getElementById('modal');
let backdrop = document.getElementById('backdrop');
let speed = 60;
let board = document.getElementById('board');
let nextBoard = document.getElementById('nextpiece');
let lastPaintTime = 0;
let highscore = 0;


const piecesStorage = {

    1: [[1,1,1,1] , [0,0,0,0] , [0,0,0,0] , [0,0,0,0]],
    2: [[1,1] , [1,1]],
    3: [[0,1,0] , [1,1,1] , [0,0,0]],
    4: [[1,1,0] , [0,1,1] , [0,0,0]],
    5: [[0,1,1] , [1,1,0] , [0,0,0]],
    6: [[1,0,0] , [1,1,1] , [0,0,0]],
    7: [[0,0,1] , [1,1,1] , [0,0,0]]
}

const color = {
    1: "red",
    2: "blue",
    3: "yellow",
    4: "green"
}


class Piece{
   constructor(){
       this.shape = piecesStorage[ Math.round(1 + 6*Math.random())];
       this.coordinates = { x: Math.round(2 + 5*Math.random()) , y:1};
       this.color = color[Math.round(1 + 3*Math.random())];
       this.height = this.shape.length;
       this.width = this.shape.length;
       this.rotation = 1;
   }
}

class Tetris{

    constructor(){
        this.totalBoardValue = [];
        this.totalBoardColor = [];
        this.score = 0;
    }
    
    //used to mark the points in totalboardvalue grid of the landed piece 
    //with 1 as filled and 0 not filled
    markTotalBoard(currentPiece,colorValue){
        currentPiece.shape.forEach( (element,index) =>{
            element.forEach( (piece,idx) =>{
                 if(piece === 1 && (currentPiece.coordinates.y + index)!== undefined && (currentPiece.coordinates.x + idx)!==undefined){
                    this.totalBoardValue[currentPiece.coordinates.y + index -1][currentPiece.coordinates.x + idx -1] = 1;
                    this.totalBoardColor[currentPiece.coordinates.y + index -1][currentPiece.coordinates.x + idx -1] = colorValue;
                 }
                })
            })
    }

    //used to display the current piece and totalBoard piece on the board grid
    displayPiece(){
        board.innerHTML = "";
    
        currentPiece.shape.forEach((element, index) =>{
            element.forEach((piece, idx)=>{
                if(piece!==0){
                    const block = document.createElement('div');
                    block.classList.add('block');
                    block.classList.add(`${currentPiece.color}`);
                    block.style.gridRowStart = currentPiece.coordinates.y + index;
                    block.style.gridColumnStart = currentPiece.coordinates.x + idx;
                    board.appendChild(block);
                }
            })
        })

        this.totalBoardValue.forEach((element, index) => {
               element.forEach((piece , idx) =>{
       
                if(piece !== 0){
                const block = document.createElement('div');
                block.classList.add(`block`);

                if(this.totalBoardColor[index][idx])
                block.classList.add(`${this.totalBoardColor[index][idx]}`);

                block.style.gridRowStart = 1 + index;
                block.style.gridColumnStart = 1 + idx;
                board.appendChild(block);
               }})
               
           });
        
    }

//to check if a row gets completed and then removing it using splice on totalboard array
    rowCompleteCheck(){
        let isFilled = true;
        for (let row = 0; row < this.totalBoardValue.length; row++) {
            isFilled = true;
            for (let col = 0; col <=9; col++) {
                if (this.totalBoardValue[row][col] == 0) {
                    isFilled = false;
                }
            }
            if(isFilled){
            //remove the filled line sub-array from the array
            this.totalBoardValue.splice(row, 1);
            this.totalBoardColor.splice(row, 1);   
            //add a new empty line sub-array to the start of the array
            this.totalBoardValue.unshift([0,0,0,0,0,0,0,0,0]);
            this.totalBoardColor.unshift(["", "" , "" , "" , "" , "" , "" , "" , ""]);
            this.score++;
            }
   
        }
 }

//to check if game ended or not by checking if the first row of total board is filled or not
firsRowCheck(){
    let firstFilled = false;

     for(let i = 0 ; i<1 ; i++){
         for(let j =0 ; j<=9 ; j++){
             if(this.totalBoardValue[i][j]===1)
             firstFilled = true;
         }
     }

     return firstFilled;
}

}


// Game Functions
function main(ctime){
    window.requestAnimationFrame(main);
    if(!pauseValue)
        return;
    if((ctime - lastPaintTime)/1000 < 1/speed){
        return;
    
}
    lastPaintTime = ctime ;
    gameEngine();
  }
  

  
  function gameEngine(){
  
    //used to check if piece landed down and then it is marked in totalboard and newpiece is made to fall down
      if(!verticalCollision()){
        tetris.markTotalBoard(currentPiece,currentPiece.color);
        currentPiece = nextPiece;
        currentPiece.coordinates={ x: Math.round(2 + 5*Math.random()) , y:1}
        nextPiece = new Piece();
        nextPiece.coordinates = {x: 3, y:3};
      }
      
      //it is used to check if new game button is clicked or not
      if(newGameValue){
          newGameValue = false;
          newFreshGame();
      }
      
      //used to check if game over or not 
      //after game over scores updated and new fresh game is called nad backdrop and modal appears
      if(tetris.firsRowCheck()){
          updateHighScore();  
          newFreshGame();
          modal.classList.add('active');
          backdrop.classList.add('active');
          pauseValue = false;
      }

    //it used to make tetris fall down after a certain time after every 20 frames piece goes down
      count++;
      if(count===20){
          currentPiece.coordinates.y++;
          count=1;
      }
    
    
      tetris.rowCompleteCheck();  //to check if a rows is complete or not
      tetris.displayPiece();      //to display currentpiece and the totalBoard pieces
      displaynextPiece();         //used to display next piece
      updateScore();              //used to update score
  }


// called to display the next piece
function displaynextPiece(){

    nextBoard.innerHTML = "";
    
    nextPiece.shape.forEach((element, index) =>{
        element.forEach((piece, idx)=>{
            if(piece!==0){
                const block = document.createElement('div');
                block.classList.add('block');
                block.classList.add(`${nextPiece.color}`);
                block.style.gridRowStart = nextPiece.coordinates.y + index;
                block.style.gridColumnStart = nextPiece.coordinates.x + idx;
                nextBoard.appendChild(block);
            }
        })
    })
  }

// it is called when new game button is clicked to start new game by creating a new empty tetris
// initialising empty tetrisboard value and color grid and new currentpiece and next piece
function newFreshGame(){
    tetris = new Tetris();

    for(let i=0 ; i<18 ; i++){
       tetris.totalBoardColor.push(["", "" , "" , "" , "" , "" , "" , "" , "" , ""]);
    }
    for(let i=0 ; i<18 ; i++){
        tetris.totalBoardValue.push([ 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ]);
    }
    
    currentPiece = new Piece();
    nextPiece = new Piece();
    nextPiece.coordinates = {x: 3, y:3};
    count=1;
  }



//function for rotating a tetris 
function rotationMove(){
    
    let maT = [];
 
    for(i = 0; i<currentPiece.height ; i++){
        let xstring = [];
        for(j=0 ; j<currentPiece.width ; j++){
            xstring.push(0);
        }
        maT.push(xstring);
    }

    const  n = currentPiece.height;
    for (i=0;i<n;i++) {
        for (j=0;j<n;j++) {
            maT[i][n-1-j] = currentPiece.shape[j][i];
        }
    }
    
    if(rotationCollision(maT,currentPiece.coordinates.x,currentPiece.coordinates.y)){
    currentPiece.shape = maT;

    }

}

//functionn for the vertical movement when s is pressed
  function verticalMove(){
    if(verticalCollision()){
        currentPiece.coordinates.y +=1;
    }
}

//function for horizontal movement called when a or d key is pressed
  function horizontalMove(value){
     if(horizontalCollision(value)){
      value==='LEFT'?currentPiece.coordinates.x -= 1 : currentPiece.coordinates.x += 1;
    }
 }
 
//to check for the vertical collision
 function verticalCollision(){
     
     var result =true;
     var checky = currentPiece.coordinates.y + 1;
     currentPiece.shape.forEach( (element,index) =>{
       element.forEach( (piece,idx) =>{
           if(piece === 1 &&( index+checky>18 || tetris.totalBoardValue[checky + index - 1][idx + currentPiece.coordinates.x - 1] === 1)){
             result = false;
           }
       })
     })
 
     return result;
 }
 

 //to check if the horizontal motion is poss or not
 function horizontalCollision(value){
    
     let result = true;
     let checkx = currentPiece.coordinates.x;
     checkx = value==='LEFT'? checkx -1 : checkx + 1 ;
 
     currentPiece.shape.forEach( (element,index) =>{
       element.forEach( (piece,idx) =>{
           if(piece === 1 && ( idx + checkx <1 || idx + checkx>10 ||(tetris.totalBoardValue[index + currentPiece.coordinates.y - 1][idx + checkx - 1]=== 1)))
            result = false;
       })
     })
 
     return result;
 }
 

 // to check if rotation is possible
 function rotationCollision(copyPiece,xcordinate,ycordinate){

      var result = true;
      copyPiece.forEach( (element,index) =>{
        element.forEach( (piece,idx) =>{
            if(piece === 1 && ( idx + xcordinate <1 || idx + xcordinate>10 || index+ycordinate>18 ||(tetris.totalBoardValue[index + ycordinate -1][idx + xcordinate -1]=== 1)))
             result = false;
        })
      })

      return result;
 }


 //for updating score  of current tetris and high score(called only when game ends) 
 function updateScore(){
     scoreShow.innerText=`SCORE : ${tetris.score}`;
 }
 function updateHighScore(){
     if(highscore<tetris.score)
     highscore = tetris.score;

     highscoreShow.innerText=`HIGHSCORE : ${highscore}`;
 }

 //Event listener for pausing and resuming the game
 pause.addEventListener('click', ()=>{
     if(pauseValue){
         pauseValue=false;
         pause.innerText="Resume";
     }else{
        pauseValue=true;
        pause.innerText="Pause";
     }
     
 })


//Event listener for starting a newgame after newgame button is clicked
for(i=0 ; i<2 ; i++){
    newGame[i].addEventListener('click', ()=>{
        newGameValue = true;
        pauseValue = true;
        modal.classList.remove('active');
        backdrop.classList.remove('active');
    })
}

//Game logic
//first time initialisation of game
newFreshGame();
window.requestAnimationFrame(main);
window.addEventListener('keydown' , e =>{
    
    switch(e.key){
        case "w":
          rotationMove();
          break;
        case "a":
          horizontalMove("LEFT");
            break;
        case "s":
          verticalMove();
            break;
        case "d":
          horizontalMove("RIGHT");
            break;
    }
} )

