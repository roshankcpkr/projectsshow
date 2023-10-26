const textEl = document.getElementById("text")
const totalCounter = document.getElementById("total-counter")
const remainingCounter = document.getElementById("remaining-counter")
textEl.addEventListener("keyup",()=>{
    console.log("hello")
    updateCounter()
})

function updateCounter(){
    totalCounter.innerText = textEl.value.length
    console.log(textEl.value.length)
}
