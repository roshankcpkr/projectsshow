const quizData = [
    {
        key:1,
        question: "What is the purpose of the radix parameter in the parseInt() method?",
        a: "Numeral system not to be used",
        b: "Numeral system to be used",
        c: "Conversion mode",
        d: "Parsing mode",
        correct: "b"
    },{
        key:2,
        question: "What will be the radix value of the parseInt() method when the string begins with 0?",
        a: "6",
        b: "7",
        c: "8",
        d: "9",
        correct: "c"
    },{
        key:3,
        question: "What is the purpose of the method JSON.parse()?",
        a: "Parses a string to integer",
        b: "Parses a string to JSON",
        c: "Parses a string from JSON to JSON2",
        d: "Parses integer to string",
        correct: "b"
    },{
        key:4,
        question: "What is the return type of the method parseInt()?",
        a: "String",
        b: "Float",
        c: "Integer",
        d: "Date",
        correct: "c"
    },{
        key:5,
        question: "What are the parameters of the method JSON.parse()?",
        a: "text",
        b: "reviver",
        c: "both text and reviver",
        d: "object",
        correct: "c"
    },{
        key:6,
        question: "What will be the radix value of the parseInt() method when the string begins with any other value other than 0x and 0?",
        a: "8",
        b: "9",
        c: "10",
        d: "11",
        correct: "c"
    },{
        key:7,
        question: "What kind of an exception will be thrown if the string to parse is not valid JSON?",
        a: "SyntaxError",
        b: "ArrayOutOfBoundException",
        c: "Both SyntaxError and ArrayOutOfBoundException",
        d: "Compilation error",
        correct: "a"
    },{
        key:8,
        question: "Which of the following is a JavaScript Compressor?",
        a: "Esprima",
        b: "UgilifyJS",
        c: "Acron",
        d: "Compressify",
        correct: "b"
    },{
        key:9,
        question: "What is the purpose of the UgilifyJS?",
        a: "Exposes a simple API",
        b: "Minification",
        c: "Both Exposes a simple API and Minification",
        d: "Compilation",
        correct: "c"
    },{
        key:10,
        question: "Which of the following is the fastest JavaScript parser?",
        a: "JSLint",
        b: "Esprima",
        c: "Acron",
        d: "Traceur",
        correct: "c"
    }
]

var score = [];
score.length = quizData.length;

function placeQuestion(key) {
    if(key == 0 ||  key == 11){
        return;
    }

    if(key == 1){
        document.getElementById("prev-btn").classList.add("rem-btn");
    }else {
        document.getElementById("prev-btn").classList.remove("rem-btn");
    }
    if(key == 10){
        document.getElementById("submit-btn").classList.remove("rem-btn");
        document.getElementById("next-btn").classList.add("rem-btn");
    }else {
        document.getElementById("next-btn").classList.remove("rem-btn");
        document.getElementById("submit-btn").classList.add("rem-btn");
    }
    document.getElementById("question").innerHTML = `Q${key}. ${quizData[key-1].question}`;
    document.getElementById("question").value = key;
    document.getElementById("opnA").innerHTML = `${quizData[key-1].a}`;
    document.getElementById("opnB").innerHTML = `${quizData[key-1].b}`;
    document.getElementById("opnC").innerHTML = `${quizData[key-1].c}`;
    document.getElementById("opnD").innerHTML = `${quizData[key-1].d}`;

    if( score[key-1] === "a" ){
        document.getElementById("a").checked=true;
    } else{
        document.getElementById("a").checked=false;
    }
    if( score[key-1] === "b" ){
        document.getElementById("b").checked=true;
    } else{
        document.getElementById("b").checked=false;
    }
    if( score[key-1] === "c" ){
        document.getElementById("c").checked=true;
    } else{
        document.getElementById("c").checked=false;
    }
    if( score[key-1] === "d" ){
        document.getElementById("d").checked=true;
    } else{
        document.getElementById("d").checked=false;
    }
}

placeQuestion(1);

document.getElementById("next-btn").addEventListener("click", () => {
    var key = document.getElementById("question").value;
    placeQuestion(key+1);
});
document.getElementById("prev-btn").addEventListener("click", () => {
    var key = document.getElementById("question").value;
    placeQuestion(key-1);
});

document.getElementById("a").addEventListener("click", () => {
    var key = document.getElementById("question").value;
    score[key-1] = "a";
});
document.getElementById("b").addEventListener("click", () => {
    var key = document.getElementById("question").value;
    score[key-1] = "b";
});
document.getElementById("c").addEventListener("click", () => {
    var key = document.getElementById("question").value;
    score[key-1] = "c";
});
document.getElementById("d").addEventListener("click", () => {
    var key = document.getElementById("question").value;
    score[key-1] = "d";
});

document.getElementById("submit-btn").addEventListener("click", () => {
    var finalScore = 0;
    for (let i = 0; i < quizData.length; i++) {
        if( quizData[i].correct === score[i] ){
            finalScore = finalScore+1;
        }
    }

   document.getElementById("submit-test").innerHTML = `<h4 class="card-title" style="text-align: center;">Your Test Is Submitted Successfully..</h4>
                                                       <h4 style="text-align:center">Your Score is ${finalScore}/${quizData.length}</h4>`;
});

