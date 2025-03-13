let successCount = 0;


function increaseCount(){
    score++;
}

function getSuccessCount(){
    return successCount;
}

export {
    increaseCount,
    getSuccessCount,
}