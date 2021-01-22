const config = [{
    key: '81',
    audio: 'sounds/CYCdh_Kurz01-ClHat.wav',
    letter: 'Q',
    name: 'CIHat'
}, {
    key: '87',
    audio: 'sounds/CYCdh_Kurz01-Crash02.wav',
    letter: 'W',
    name: 'Crash'
}, {
    key: '69',
    audio: 'sounds/CYCdh_Kurz01-HfHat.wav',
    letter: 'E',
    name: 'HfHat'
}, {
    key: '82',
    audio: 'sounds/CYCdh_Kurz01-Kick02.wav',
    letter: 'R',
    name: 'Kick'
}, {
    key: '84',
    audio: 'sounds/CYCdh_Kurz01-OpHat01.wav',
    letter: 'T',
    name: 'OpHat'
}, {
    key: '89',
    audio: 'sounds/CYCdh_Kurz01-PdHat.wav',
    letter: 'Y',
    name: 'PdHat'
}, {
    key: '85',
    audio: 'sounds/CYCdh_Kurz01-RevCrash.wav',
    letter: 'U',
    name: 'RevCrash'
}, {
    key: '73',
    audio: 'sounds/CYCdh_Kurz01-Ride01.wav',
    letter: 'I',
    name: 'Ride'
}, {
    key: '79',
    audio: 'sounds/CYCdh_Kurz01-Snr02.wav',
    letter: 'O',
    name: 'Snr'
}, {
    key: '80',
    audio: 'sounds/CYCdh_Kurz01-Tom01.wav',
    letter: 'P',
    name: 'Tom'
}];

const content = config.reduce(((acc, item) => {
    return acc + `
    <div data-key="${item.key}" class="key" data-sound="${item.audio}">
        <kbd>${item.letter}</kbd>
        <span class="sound">${item.name}</span>
    </div>`
}), '');

const keyboard = document.querySelector('.keyboard');
const audio = document.querySelector('audio');
keyboard.innerHTML = content;

keyboard.addEventListener('click', function (e) {
    const activeButton = e.target.closest('.key');
    if (activeButton) {
        playSound(activeButton);
    }
})

function playSound(button) {
    audio.src = button.getAttribute('data-sound');
    audio.play();
    button.classList.add('playing');
    button.addEventListener('transitionend', removeHighlight)
}

function clickOnKeyboard(e) {
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    playSound(key);
}

function removeHighlight(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
}

window.addEventListener('keydown', clickOnKeyboard);




