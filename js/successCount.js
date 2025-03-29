import { wordCount } from './word.js';

let successCount = 0;
let word = wordCount;

function getSuccessCount(){
    successCount++;
    return successCount;
}

function remainingCount(){
    return word - successCount;
}

export {
    getSuccessCount,
    remainingCount
}