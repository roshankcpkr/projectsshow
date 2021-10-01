const signupBtn = document.getElementById("sign-up-button");
const signinBtn = document.getElementById("sign-in-button");
const container = document.querySelector(".container")

signupBtn.addEventListener("click",()=>{
    container.classList.add('sign-up-mode')
})
signinBtn.addEventListener("click",()=>{
    container.classList.remove('sign-up-mode')
})