import { getRandomWord } from './word.js';
import{ updateWord, updateSuccessCount, updateTime, updateRemainingCount, enableInput, disableInput, resetInput, setRetryButtonState, errorWord } from './ui.js';
import{ startTimer, stopTimer } from './timer.js';
import { initScore, increaseCount, getSuccessCount, getRemainingCount } from './successCount.js';

let  word;
let currentWord;
let currentIndex = 0;

//게임 시작
function startGame(){
    word = getRemainingCount();
    initScore(word.length);

    currentIndex = 0;
    updateSuccessCount(0); //성공한 상수
    updateRemainingCount(word.length);
    enableInput();
    resetInput();
    setNewWord();
    setRetryButtonState(false);

    startTimer(updateTime, stopTimer);
}

function setNewWord(){
    if(currentIndex >= word.length){
        endGame();
        return;
    }
    currentWord = getRandomWord();
    updateWord(currentWord);
}

//사용자의 입력을 확인
document.getElementById('input').addEventListener("input", function() {
    highlightTyping(currentIndex);
    if(this.value === currentWord){
        increaseCount();
        updateSuccessCount(getSuccessCount());
        updateRemainingCount(getRemainingCount());
        resetInput();
        currentIndex++;
        setNewWord();
    }
});

//시작
document.addEventListener('DOMContentLoaded', () => {
    startGame();
})

//re try
document.getElementById('retryBtn').addEventListener('click', () => {
    startGame();
});

