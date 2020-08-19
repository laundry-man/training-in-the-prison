let inputArea = document.getElementById('input-area');
let numberArea = document.getElementById('number-area');
let displayArea = document.getElementById('display-area');
let buttonArea = document.getElementById('button-area');

let startBtn = document.getElementById('start-btn');
let stopBtn = document.getElementById('stop-btn');

let range = document.getElementById('range');
let interval = document.getElementById('interval');

let intervalObj = {};

function isValidNumber(val) {
    let valid = parseInt(val);
    if (valid === NaN) return false;
    else return true;
}

function isValidRange(kind, val) {
    if (kind) {
        if (val < 100) return true;
        else return false;
    }
    else {
        if (val < 43) return true;
        else return false;
    }
}

function checkValidation(kind, val) {
    let valid = parseInt(val);
    if (valid === NaN)
        return false;
    if (kind)
        if (valid < 100) return true;
        else return false;
    else
        if (valid < 43) return true;
        else return false;
    return false;
}

function makeRandom(min, max) {
    var randVal = Math.floor(Math.random() * (max - min + 1)) + min;
    return randVal;
}

function start() {
    if (!checkValidation(true, range.value) || !checkValidation(false, interval.value)) {
        range.value = '';
        interval.value = '';
        return;
    }

    inputArea.style.display = 'none';
    numberArea.style.display = 'inline';

    startBtn.disabled = true;
    stopBtn.disabled = false;

    let rangeInt = parseInt(range.value);
    let intervalInt = parseInt(interval.value) * 1000;

    intervalObj = setInterval(() => {
        displayArea.innerText = makeRandom(1, rangeInt);
    }, intervalInt);
}

function stop() {
    inputArea.style.display = 'inline';
    numberArea.style.display = 'none';

    startBtn.disabled = false;
    stopBtn.disabled = true;

    range.value = '';
    interval.value = '';

    clearInterval(intervalObj);
}