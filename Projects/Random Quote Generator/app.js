const quote = document.getElementById("quote")
const author = document.getElementById("author")
const btn = document.getElementById("button")

function randomQuote(){
    fetch("https://api.quotable.io/random").then((response)=>response.json())
    .then((data)=>{
       console.log(data)
       let genratedQuote  = data.content
       let genratedauthor =  data.author
       quote.innerText = genratedQuote
       author.innerText = genratedauthor
    })
}
randomQuote()
btn.addEventListener('click',(e)=>{
    randomQuote()
})


// let quote = [
//     {
//         "Ronaldinho":"I learned all about life with a ball at my feet"
//     },
//     {
//         "Pelé":"The more difficult the victory, the greater the happiness in winning" 
//     },
//     {
//         "lionel Messi":"You have to fight to reach your dream. You have to sacrifice and work hard for it."
//     },{
//         "Diego Maradona":"When people succeed, it is because of hard work. Luck has nothing to do with success."
//     },
//     {
//         "David Beckham":"I dont have time for hobbies. At the end of the day, I treat my job as a hobby. Its something I love doing."
//     }  
// ]
// // let ob = Object.keys(quote[1])
// // console.log(ob)
// // console.log(Object.values(quote))



// function generateQuote(){
//     let index = Math.floor((Math.random() * 5))
//     let quo = quote[index]
//     console.log(Object.keys(quote[index]))
//     let player = Object.keys(quote[index])
//     let playerQuote = Object.values(quote[index])
//     who.innerText= player
//     para.innerText = playerQuote
    
// }


// const para = document.getElementById("quote")
// const who = document.getElementById("say")
// const btn = document.getElementById("button")

// btn.addEventListener('click',(e)=>{
//     generateQuote()
    
    
// })