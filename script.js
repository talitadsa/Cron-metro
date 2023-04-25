
var timer = document.getElementById("timer");
var interval;
var milliseconds = 0, seconds = 0, minutes = 0, hours = 0;

function start() {
    interval = setInterval(function () {
        milliseconds += 10;
        if (milliseconds == 1000) {
            milliseconds = 0;
            seconds++;
        }
        if (seconds == 60) {
            seconds = 0;
            minutes++;
        }
        if (minutes == 60) {
            minutes = 0;
            hours++;
        }

        timer.innerHTML = ('00' + hours).slice(-2) + ':' +
            ('00' + minutes).slice(-2) + ':' +
            ('00' + seconds).slice(-2) + ':' +
            ('000' + milliseconds).slice(-3);
    }, 10);
}

function stop() {
    clearInterval(interval);
}

function reset() {
    clearInterval(interval);
    milliseconds = 0;
    seconds = 0;
    minutes = 0;
    hours = 0;
    timer.innerHTML = '00:00:00:000';
}
