
// in order to extract the elements of the board on the page
var a = [[],[],[],[],[],[],[],[],[]];
// this is used to mark the remaining spaces
var temp = [[],[],[],[],[],[],[],[],[]];

// initialize the a[][] on the web to make the changes
function initialize(){
    for( i = 0 ; i < 9 ; i++ ){
        for( j = 0 ; j < 9 ; j++ ){
            a[i][j] = document.getElementById( i*9 + j);
            a[i][j].innerText = 0;
            temp[i][j] = false;
        } 
    }
}

// we need a board on which we can perform backtracking
var board = [[],[],[],[],[],[],[],[],[]];

// in order to generate new board
var generator = document.getElementById('generate');

// in order to solve the puzzle
var solver = document.getElementById('solve');

var difficulty;

function mode(){
    var m = document.querySelectorAll('input[name="diff"]');
    for(item of m){
        if(item.checked){
            difficulty = item;
            break;
        }
    }
}

console.log(a);

// updating the board when we get the solution
function changeboard(){
    for( i = 0 ; i < 9 ; i++ ){
        for( j = 0 ; j < 9 ; j++ ){
            if(board[i][j]!=0){
                a[i][j].innerText = board[i][j];
            }
            else{
                a[i][j].innerText = '';
            }
        } 
    }
}

function qsetColor(){
    for( i = 0 ; i < 9 ; i++ ){
        for( j = 0 ; j < 9 ; j++ ){
            if(board[i][j]!=0){
                temp[i][j] = true;
                // a[i][j].style.background = "brown";
                a[i][j].style.color = "brown";
            }
        } 
    }
}
function asetColor(){
    for( i = 0 ; i < 9 ; i++ ){
        for( j = 0 ; j < 9 ; j++ ){
            if(temp[i][j]==false){
                // a[i][j].style.background = "green";
                a[i][j].style.color = "green";
            }
        } 
    }
}
function resetcolor(){
    for( i = 0 ; i < 9 ; i++ ){
        for( j = 0 ; j < 9 ; j++ ){
            a[i][j].style.background = "rgb(223, 203, 203)";
        } 
    }
}

var seconds = 0;
var minutes = 0 ;
var hours = 0;
var displayseconds;
var displayminutes;
var displayhour;


var start;
function time(){
    setInterval(function timer(){
            seconds++;
            if(seconds/60 ===1){
                seconds = 0;
                minutes++;
            }
            if(minutes/60===1){
                minutes=0;
                hours++;
            }
        
            if(seconds<10){
                displayseconds = "0" + seconds.toString();
            }
            else{
                displayseconds = seconds;
            }
            if(minutes<10){
                displayminutes = "0" + minutes.toString();
            }
            else{
                displayminutes = minutes;
            }
            if(hours<10){
                displayhour = "0" + hours.toString();
            }
            else{
                displayhour = hours;
            }
        
            document.getElementById('timer').innerHTML = displayhour + " : " + displayminutes + " : " + displayseconds;
    }, 1000);
}
function reset(){
    clearInterval(start);
}
generator.onclick = function(){
    // resetboard();
    mode();
    reset();
    start = time();
    console.log(difficulty.value);
    var xhr = new XMLHttpRequest();
    if(difficulty=='easy'){
        xhr.open('GET','https://sugoku.herokuapp.com/board?difficulty=easy');
        xhr.responseType = 'json';
        xhr.send();
        xhr.onload = function(){
            var robj = xhr.response;
            board = robj.board;
            console.log(board);
            initialize();
            resetcolor();
            qsetColor();       
            changeboard();
        }
    }
    else if(difficulty=='medium'){
        xhr.open('GET','https://sugoku.herokuapp.com/board?difficulty=hard');
        xhr.responseType = 'json';
        xhr.send();
        xhr.onload = function(){
            var robj = xhr.response;
            board = robj.board;
            console.log(board);
            initialize();
            resetcolor();
            qsetColor();       
            changeboard();
        }
    }
    else{
        xhr.open('GET','https://sugoku.herokuapp.com/board?difficulty=hard');
        xhr.responseType = 'json';
        xhr.send();
        xhr.onload = function(){
            var robj = xhr.response;
            board = robj.board;
            console.log(board);
            initialize();
            resetcolor();
            qsetColor();       
            changeboard();
        }
    }
}

/*--------------------------------------------------------------------------------------------------------------------------------------------------- */
function isPossible(board,i,j,num){
    for(row=0;row<9;row++){
        if(board[row][j]==num){
            return false;
        }
    }
    
    for(col=0;col<9;col++){
        if(board[i][col]==num){
            return false;
        }
    }

    var sx = i - i%3;
    var sy = j - j%3;
    for(r = sx; r < sx+3; r++){
        for(c = sy; c < sy+3; c++){
            if(board[r][c]==num){
                return false;
            }
        }
    }
    return true;
}

function solveSudoku(board,i,j){
    if(i==9){
        changeboard();
        return;
    }   
    if(j==9){
        solveSudoku(board,i+1,0);
        return;
    }
    if(board[i][j]!=0){
        solveSudoku(board,i,j+1);
        return;
    }
    for(var num=1;num<=9;num++){
        if(isPossible(board,i,j,num)){
            board[i][j] = num;
            solveSudoku(board,i,j+1);
            board[i][j] = 0;
        }
    }
}
solve.onclick = function(){
    solveSudoku(board,0,0);
    asetColor();
}

/*---------------------------------------------------------------------------------------------------------------------------------------------------------------- */