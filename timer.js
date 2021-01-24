var timer, i = 0, i_1 = 0; divide = 100, sec = 0, min = 0, hour = 0;

function start() {
    timer = self.setInterval('runningTime()', (1000 / divide));
}

function runningTime() {
    i++;
    if (i >= 10) {
        i = 0;
        i_1++
        if (i_1 >= 10) {
            i_1 = 0;
            sec++
            if (sec >= 60) {
                sec = 0;
                min++
                if(min >= 60){
                    min = 0;
                    hour++
                }
            }
        }
    }

    document.getElementById('time_out').innerHTML = hour + ":" + min + ":" + sec + ":" + i_1 + i;
}

function stop() {
    clearInterval(timer);
    //timer = null;
}

function reset() {
    stop();
    i = 0;
    i_1 = 0;
    sec = 0;
    min = 0;
    hour = 0;

    document.getElementById('time_out').innerHTML = "0:0:0:00";
}