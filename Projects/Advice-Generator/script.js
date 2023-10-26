const url = 'https://api.adviceslip.com/advice';
const adviceId = document.querySelector('#advice-id');
const adviceText = document.querySelector('#advice-text');
const adviceBtn = document.querySelector('.btn');

const getAdvice = async ()=>{
    const res = await fetch(url);
    const {slip: {id, advice}} = await res.json();
    adviceId.innerText = id;
    adviceText.innerText = `"${advice}"`;
    console.log(advice)
}

adviceBtn.addEventListener('click', getAdvice)