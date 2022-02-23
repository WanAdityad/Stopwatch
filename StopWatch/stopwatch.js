let hr = min = sec = ms = "0" + 0,
    startTimer;

const StopWatchStartBtn = document.querySelector(".StopWatchStart"),
    StopWatchStopBtn = document.querySelector(".StopWatchStop"),
    StopWatchResetBtn = document.querySelector(".StopWatchReset");

StopWatchStartBtn.addEventListener("click", start);
StopWatchStopBtn.addEventListener("click", stop);
StopWatchResetBtn.addEventListener("click", reset);

function start() {
    StopWatchStartBtn.classList.add("active");
    StopWatchStopBtn.classList.remove("stopActive");
    startTimer = setInterval(() => {
        ms++
        ms = ms < 10 ? "0" + ms : ms;

        if (ms == 100) {
            sec++;
            sec = sec < 10 ? "0" + sec : sec;
            ms = "0" + 0;
        }
        if (sec == 60) {
            min++;
            min = min < 10 ? "0" + min : min;
            sec = "0" + 0;
        }
        if (min == 60) {
            hr++;
            hr = hr < 10 ? "0" + hr : hr;
            sec = "0" + 0;
        }
        PutValue();
    }, 10)
}


function stop() {
    StopWatchStartBtn.classList.remove("active");
    StopWatchStopBtn.classList.add("stopActive");
    clearInterval(startTimer);
}

function reset() {
    StopWatchStartBtn.classList.remove("active");
    StopWatchStopBtn.classList.remove("stopActive");
    clearInterval(startTimer);
    hr = min = sec = ms = "0" + 0;
    PutValue();

}

function PutValue() {
    document.querySelector(".StopWatchMilliSeconds").innerText = ms;
    document.querySelector(".StopWatchSeconds").innerText = sec;
    document.querySelector(".StopWatchMinutes").innerText = min;
    document.querySelector(".StopWatchHour").innerText = hr;
}