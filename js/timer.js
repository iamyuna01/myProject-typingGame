let time = 120;
let timer;

function startTimer(updateCallback, endCallback){
    time = 120;
    updateCallback(formatTime(time));

    timer = setInterval(() => {
        time--;
        updateCallback(formatTime(time));
        if(time <= 0){
            clearInterval(timer);
            endCallback();
        }
    }, 1000);
}

function formatTime(seconds){
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    return `${String(minutes).padStart(2,'0')}:${String(remainingSeconds).padStart(2, '0')}`;

}

function stopTimer(){
    clearInterval(timer);
}

export{startTimer, stopTimer};