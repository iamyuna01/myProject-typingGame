import { getRandomWord, wordCount } from './word.js';
import{ updateWord, updateSuccessCount, updateTime, updateRemainingCount, enableInput, disableInput, resetInput, setRetryButtonState, errorWord, inputField } from './ui.js';
import{ startTimer, stopTimer } from './timer.js';
import { getSuccessCount, remainingCount } from './successCount.js';

let  word;
let currentWord;
let currentIndex = 0;

//게임 시작
function startGame(){
    word = wordCount;
    updateRemainingCount(remainingCount());

    currentIndex = 0;
    updateSuccessCount(0); //성공한 상수
    enableInput();
    resetInput();
    setNewWord();
    setRetryButtonState(false);

    startTimer(updateTime, stopTimer);
}

function setNewWord(){
    if(currentIndex >= word){
        endGame();
        return;
    }
    currentWord = getRandomWord();
    updateWord(currentWord);
}

//사용자의 입력을 확인
document.getElementById('input').addEventListener("input", function() {
    errorWord(currentWord);
    if(this.value === currentWord){
        updateSuccessCount(getSuccessCount());
        updateRemainingCount(remainingCount());
        resetInput();
        currentIndex++;
        setNewWord();
    }
});

function endGame() {
    updateWord("Finish! Well Done!");
    enableInput();
    disableInput();
    stopTimer();
    setRetryButtonState(true);
}

//시작
document.addEventListener('DOMContentLoaded', () => {
    startGame();
})

//retry
document.getElementById('retryBtn').addEventListener('click', () => {
    startGame();
});

export{ endGame,currentWord };