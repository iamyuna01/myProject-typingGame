let time = 120;
let timer;

function startTimer(updateCallback, endCallback){
    time = 120;
    updateCallback(time);

    timer = setInterval(() => {
        time--;
        updateCallback(time);
        if(time <= 0){
            clearInterval(timer);
            endCallback();
        }
    }, 1000);
}

function stopTimer(){
    clearInterval(timer);
}

export{startTimer, stopTimer};