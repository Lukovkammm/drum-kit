function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    audio.currentTime = 0;
    let play = !audio ? undefined : audio.play();
    key.classList.add('playing');
}

function removeHighlight(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
}

function playAgain() {
    const audio = document.querySelector(`audio[data-key="${this.getAttribute('data-key')}"]`);
    audio.currentTime = 0;
    let play = !audio ? undefined : audio.play();
    this.classList.add('playing');
}


window.addEventListener('keydown', playSound);
const keys = document.querySelectorAll('.key');
const audio = document.querySelectorAll('audio');
keys.forEach(key => key.addEventListener('transitionend', removeHighlight));
keys.forEach(key => key.addEventListener('click', playAgain));
