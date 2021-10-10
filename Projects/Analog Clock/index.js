let hour = document.getElementById('hour');
let mins = document.getElementById('minute');
let sec = document.getElementById('second');

setInterval(() => {
    date = new Date();
    h = date.getHours();
    m = date.getMinutes();
    s = date.getSeconds();

    h_hand = 30*h + m/2;
    m_hand = m*6;
    s_hand = s*6;

    hour.style.transform = `rotate(${h_hand}deg)`;
    mins.style.transform = `rotate(${m_hand}deg)`;
    sec.style.transform = `rotate(${s_hand}deg)`;
}, 1000);