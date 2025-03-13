let successCount = 0;
let remainingWords = 0;

function initScore(wordCount){
    successCount = 0;
    remainingWords = wordCount;
}

function increaseCount(){
    score++;
    remainingWords--;
}

function getSuccessCount(){
    return successCount;
}

function getRemainingCount(){
    return remainingWords;
}

export {
    initScore,
    increaseCount,
    getSuccessCount,
    getRemainingCount
}