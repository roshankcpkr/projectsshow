let inputText = document.querySelector("#input");
let root = document.querySelector("ul");

let all = document.querySelector(".all-items")
let active = document.querySelector(".active-items")
let completed = document.querySelector(".completed-items")
let clear = document.querySelector(".clear-completed")


let allTODos = JSON.parse(localStorage.getItem("todos")) || [];


function handleDelet (event) {
    let id = event.target.dataset.id;
    allTODos.splice(id,1);
    localStorage.setItem("todos", 
        JSON.stringify(allTODos)
        );
    createUI(allTODos);
}

function handleToggle (event) {
    let id = event.target.dataset.id;
    allTODos[id].isDone = !allTODos[id].isDone;
    localStorage.setItem("todos", 
    JSON.stringify(allTODos)
    );
    createUI(allTODos);
}


function handleInput(event) {
    if(event.keyCode === 13 && event.target.value !== ""){
        let todo = {
            name:event.target.value,
            isDone:false,
        };
        allTODos.push(todo);
        event.target.value = "";

        localStorage.setItem("todos", 
        JSON.stringify(allTODos)
        );
        createUI(allTODos);
        // console.log(allTODos.push(todo))
    }


}

// createUI(allTODos);

function createUI(allTODos) {
    root.innerHTML = "";
    allTODos.forEach((todo, index) => {
        
        let li = document.createElement("li");
        li.classList.add("list-items")

        let input = document.createElement("input");
        input.classList.add("checkbox")

        input.type = "checkbox";
        input.checked = todo.isDone;
        input.setAttribute("data-id",index)

        input.addEventListener("change",handleToggle);


        let p = document.createElement("p");
        p.classList.add("list-items")

        p.innerText = todo.name;
        let span = document.createElement("span");
        span.classList.add("close")
        span.innerText = "X";
        span.setAttribute("data-id",index)

        span.addEventListener("click",handleDelet);
        
        li.append(input, p, span);
        root.append(li);
    });
};

createUI(allTODos)

all.classList.add("selected");

clear.addEventListener("click", () => {
allTODos = allTODos.filter((todo) => !todo.isDone);
localStorage.setItem("todos", 
JSON.stringify(allTODos)
);
createUI(allTODos);
});

active.addEventListener("click", () => {
    let notCompleted = allTODos.filter((todo) => todo.isDone === false);
    active.classList.add("selected");
    all.classList.remove("selected");
    completed.classList.remove("selected");
    createUI(notCompleted);
});

completed.addEventListener("click", () => {
    let completedTOdos = allTODos.filter((todo) => todo.isDone === true);
    completed.classList.add("selected");
    all.classList.remove("selected");
    active.classList.remove("selected");
    createUI(completedTOdos);
});

all.addEventListener("click", () => {
    all.classList.add("selected");
    active.classList.remove("selected")
    completed.classList.remove("selected")
    createUI(allTODos);
})

inputText.addEventListener("keyup", handleInput);