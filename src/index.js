import './styles.css';

const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
];

const refs = {
    buttonStart: document.querySelector('[data-action="start"]'),
    buttonStop: document.querySelector('[data-action="stop"]'),
    body: document.querySelector('body'),
}

const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

let intervalId = null;
let isActive = false;

const intervalHandler = () => {
    const randomIndex = randomIntegerFromInterval(0, colors.length);
    refs.body.style.backgroundColor = colors[randomIndex];
}

const startHundler = () => {
    if (!isActive) {
        isActive = true;
        refs.buttonStart.disabled = true
        intervalId = setInterval(intervalHandler, 1000);
    }

}

const stopHundler = () => {
    clearInterval(intervalId);
    isActive = false;
    refs.buttonStart.disabled = false
}



refs.buttonStart.addEventListener('click', startHundler)
refs.buttonStop.addEventListener('click', stopHundler)
