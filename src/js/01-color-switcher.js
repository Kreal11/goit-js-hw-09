function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
const body = document.querySelector('body');
let timerId = null;


const onStart = event => {
    timerId = setInterval(() => {
        body.style.backgroundColor = getRandomHexColor();
    }, 1000);
    startBtn.disabled = true;
}

const onStop = event => {
    clearInterval(timerId);
    startBtn.disabled = false;
}

startBtn.addEventListener('click', onStart);
stopBtn.addEventListener('click', onStop);