function timer() {
    let timer = document.querySelector(`#timer`);
    let timerHours = document.querySelector(`#timerHours`);
    let timerMinutes = document.querySelector(`#timerMinutes`);
    let timerSeconds = document.querySelector(`#timerSeconds`);

    let hours = 0;
    let minutes = 0;
    let seconds = 0;
    let timerId;

    function setNul(value) {
        return (value < 10)
        ? `0` + value
        : value;
    }

    function makeTimer() {
        seconds += 1;
        timerSeconds.textContent = `${setNul(seconds)}`;
        if (seconds > 59) {
            seconds = 0;
            minutes += 1;
            timerMinutes.textContent = `${setNul(minutes)}`;
        }

        if (minutes > 59) {
            minutes = 0;
            hours += 1;
            timerHours.textContent = `${setNul(hours)}`;
            timerMinutes.textContent = `${setNul(minutes)}`;
        }
        timerId = setTimeout(makeTimer, 1000);
    }
    makeTimer();

    window.addEventListener(`keydown`, resetTimer);
    timer.addEventListener(`mouseenter`, stopTimer);
    timer.addEventListener(`mouseleave`, startTimer);

    function resetTimer(event) {
        if(event.keyCode === 0x1B) {
            seconds = 0;
            minutes = 0;
            hours = 0;
            timerSeconds.textContent = `${setNul(seconds)}`;
            timerMinutes.textContent = `${setNul(minutes)}`;
            timerHours.textContent = `${setNul(hours)}`;
        }
    }

    function stopTimer() {
        clearTimeout(timerId);
    }

    function startTimer() {
        setTimeout(makeTimer, 1000);
    }
}
timer();