import {currentWord} from './main.js';

const wordDisplay = document.getElementById('word');
const inputField = document.getElementById('input');
const SuccessDisplay = document.getElementById('successCount');
const timeDisplay = document.getElementById('time');
const remainingDisplay = document.getElementById('remainingCount');
const retryButton = document.getElementById('retryBtn');


function updateWord(word){
    wordDisplay.innerHTML = "";
    word.split("").forEach((char, i) => {
        const span = document.createElement('span');
        span.innerHTML = char;
        span.id = `char-${i}`;
        wordDisplay.appendChild(span);
    });
}

function updateSuccessCount(count){
    SuccessDisplay.innerHTML = count;
}

function updateTime(time){
    timeDisplay.innerHTML = time;
}

function updateRemainingCount(remainingCount){
    remainingDisplay.innerHTML = remainingCount;
}

function enableInput(){
    inputField.disabled = false;
    inputField.focus();
}

function disableInput(){
    inputField.disabled = true;
}

function resetInput(){
    inputField.value = "";
}

function setRetryButtonState(enabled){
    retryButton.disabled = !enabled;
    retryButton.style.opacity = enabled ? '1' : '0.6'; 
}

function errorWord(word){
    let input = inputField.value.split("");
    let wordArr = word.split("");
    let currentIndex = 0;

    while(currentIndex < wordArr.length) { 
        let span = document.getElementById(`char-${currentIndex}`);
        if (!span) return;

        if (input[currentIndex] !== wordArr[currentIndex]) {
            span.style.color = 'white';
        } else {
            span.style.color = 'yellow';
        }
        currentIndex++;
    }
}

export{
    updateWord,
    updateSuccessCount,
    updateTime,
    updateRemainingCount,
    enableInput,
    disableInput,
    resetInput,
    setRetryButtonState,
    errorWord,
    inputField,
}