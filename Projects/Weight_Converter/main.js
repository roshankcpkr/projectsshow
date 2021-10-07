document.getElementById("weight-input").addEventListener("input" , e => {
    let kgs = e.target.value;
    document.getElementById("weight-output").innerHTML = kgs * 2.205;
})


document.getElementById("measurement-input").addEventListener("input" , e => {
    let mns = e.target.value;
    document.getElementById("measurement-output").innerHTML = mns * 30.48;
})


document.getElementById("temperature-input").addEventListener("input" , e => {
    let temp = e.target.value;
    document.getElementById("temperature-output").innerHTML = (temp * 1.8 ) + 32;
})
