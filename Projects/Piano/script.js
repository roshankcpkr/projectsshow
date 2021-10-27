const WHITE_KEYS = ['z','x','c','v','b','n','m'];
const BLACK_KEYS = ['s','d','g','h','j'];

const keys = document.querySelectorAll('.key');
const whitekeys = document.querySelectorAll('.key.white');
const blackkeys = document.querySelectorAll('.key.black');

keys.forEach(key => {
    key.addEventListener('click',() => playNote(key))
});

document.addEventListener('keydown', e => { 
    if (e.repeat) return
    const key = e.key;
    const whiteKeyIndex = WHITE_KEYS.indexOf(key);
    const blackKeyIndex = BLACK_KEYS.indexOf(key);

    if(whiteKeyIndex > -1) playNote(whitekeys[whiteKeyIndex])
    if(blackKeyIndex > -1) playNote(blackkeys[blackKeyIndex])
})

function playNote(key){
    const noteAudio = document.getElementById(key.dataset.note)
    noteAudio.currentTime = 0
    noteAudio.play()
    key.classList.add('active')
    noteAudio.addEventListener('ended', () => {
        key.classList.remove('active')
    })
}